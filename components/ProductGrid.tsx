import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/shopify";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const displayProducts = products.slice(0, 4);

  if (displayProducts.length === 0) {
    return (
      <div className="w-full py-12 text-center">
        <p className="text-neutral-500">No products available</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden bg-surface-container-lowest aspect-square"
          >
            <Image
              src={product.image.url}
              alt={product.image.altText}
              fill
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Product Info on Hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-headline-md text-headline-md text-white text-center px-4">
                {product.title}
              </h3>
              <p className="font-body-lg text-body-lg text-neutral-300 mt-2">
                ${product.price}
              </p>
              <button className="mt-4 px-6 py-2 bg-white text-black font-label-caps text-label-caps hover:bg-neutral-200 transition-colors active:scale-95 text-xs">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {products.length > 4 && (
        <div className="pt-8">
          <Link
            href="/store"
            className="inline-flex items-center font-label-caps text-label-caps text-white hover:text-neutral-300 transition-colors group"
          >
            VIEW MORE
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
