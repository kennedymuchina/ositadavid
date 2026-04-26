const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_TOKEN) {
    throw new Error("Missing Shopify environment variables");
}

interface ShopifyProduct {
    id: string;
    title: string;
    handle: string;
    priceRange: {
        minVariantPrice: {
            amount: string;
            currencyCode: string;
        };
    };
    featuredImage: {
        url: string;
        altText: string;
    } | null;
}

export interface Product {
    id: string;
    title: string;
    handle: string;
    price: string;
    image: {
        url: string;
        altText: string;
    };
}

async function shopifyFetch(query: string, variables = {}) {
    try {
        const response = await fetch(`https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN as string,
            },
            body: JSON.stringify({ query, variables }),
        });

        if (!response.ok) {
            throw new Error(`Shopify API error: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error("Shopify fetch error:", error);
        throw error;
    }
}

export async function getProducts(first: number = 12): Promise<Product[]> {
    const query = `
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            featuredImage {
              url
              altText
            }
          }
        }
      }
    }
  `;

    try {
        const response = await shopifyFetch(query, { first });

        if (response.errors) {
            console.error("Shopify GraphQL errors:", response.errors);
            return [];
        }

        return response.data.products.edges.map((edge: { node: ShopifyProduct }) => ({
            id: edge.node.id,
            title: edge.node.title,
            handle: edge.node.handle,
            price: edge.node.priceRange?.minVariantPrice?.amount || "0",
            image: {
                url: edge.node.featuredImage?.url || "",
                altText: edge.node.featuredImage?.altText || edge.node.title,
            },
        }));
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
}

export async function getProductByHandle(handle: string) {
    const query = `
    query GetProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        description
        priceRange {
          minVariantPrice {
            amount
          }
        }
        featuredImage {
          url
          altText
        }
      }
    }
  `;

    const response = await shopifyFetch(query, { handle });
    return response.data.productByHandle;
}
