import Link from "next/link";
import { getProducts } from "@/lib/shopify";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductGrid } from "@/components/ProductGrid";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TourForm } from "@/components/TourForm";

export default async function TourPage() {
    const products = await getProducts(12);
    return (
        <div className="min-h-screen bg-black text-on-background selection:bg-white selection:text-black flex flex-col">
            <Header />

            {/* Main Content */}
            <main className="pt-20 flex-1 w-full max-w-container-max mx-auto">
                {/* Sub Navigation */}
                <nav className="flex justify-center gap-16 py-8 md:gap-12 lg:gap-24">
                    <Link
                        href="/"
                        className="font-label-caps text-label-caps text-white transition-colors"
                    >
                        EXCLUSIVE
                    </Link>
                    <Link
                        href="/tour"
                        className="font-label-caps text-label-caps text-white transition-colors border-b-2 border-white"
                    >
                        TOUR
                    </Link>
                    <Link
                        href="#"
                        className="font-label-caps text-label-caps text-white transition-colors"
                    >
                        COLLECTIONS
                    </Link>
                </nav>

                {/* Product Spotlight */}
                <section className="flex flex-col items-center px-4 md:px-6 lg:px-margin-edge mt-8 py-16 md:py-24">
                    <h1 className="font-headline-lg  text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase text-white mb-12">
                        Touring Soon
                    </h1>

                    <TourForm />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
