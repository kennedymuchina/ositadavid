import Link from "next/link";
import { SiSpotify, SiYoutube, SiInstagram, SiSoundcloud, SiApplemusic } from "react-icons/si";
import { getProducts } from "@/lib/shopify";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductGrid } from "@/components/ProductGrid";
import { Header } from "@/components/Header";

export default async function HomePage() {
    const products = await getProducts(12);
    return (
        <div className="min-h-screen bg-black text-on-background selection:bg-white selection:text-black flex flex-col">
            <Header />

            {/* Main Content */}
            <main className="pt-20 flex-1 w-full max-w-container-max mx-auto">
                {/* Sub Navigation */}
                <nav className="flex justify-center gap-12 py-8 md:gap-12 lg:gap-24">
                    <Link
                        href="#"
                        className="font-label-caps text-label-caps text-white transition-colors"
                    >
                        EXCLUSIVE
                    </Link>
                    <Link
                        href="#"
                        className="font-label-caps text-label-caps text-white transition-colors"
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
                <section className="flex flex-col items-center px-4 md:px-6 lg:px-margin-edge mt-8">
                    {/* Mobile Carousel - Hidden on lg screens */}
                    <div className="w-full ">
                        <ProductCarousel products={products} />
                    </div>

                    
                </section>
            </main>

            {/* Footer */}
            <footer className="flex flex-col items-center gap-12 py-12 md:py-16 lg:py-20 px-4 md:px-6 w-full bg-black">
                <nav className="flex flex-col items-center gap-4">
                    <Link
                        href="#"
                        className="font-headline-lg text-[10px] tracking-widest uppercase text-white transition-colors"
                    >
                        TERMS & CONDITIONS
                    </Link>
                    <Link
                        href="#"
                        className="font-headline-lg text-[10px] tracking-widest uppercase text-white transition-colors"
                    >
                        PRIVACY POLICY
                    </Link>
                    <Link
                        href="#"
                        className="font-headline-lg text-[10px] tracking-widest uppercase text-white transition-colors"
                    >
                        COOKIES
                    </Link>
                    <Link
                        href="#"
                        className="font-headline-lg text-[10px] tracking-widest uppercase ttext-white transition-colors"
                    >
                        DO NOT SELL MY INFORMATION
                    </Link>
                    <Link
                        href="#"
                        className="font-headline-lg text-[10px] tracking-widest uppercase text-white transition-colors"
                    >
                        ©XI100 / YVNG ROCKSTXRS™ ALL RIGHTS RESERVED
                    </Link>
                </nav>
                <div className="flex gap-2">
                    {/* Spotify */}
                    <Link href="https://open.spotify.com/artist/3d5DZ5YLW77RNM62AFObl5" className="text-white hover:opacity-70 transition-opacity">
                        <SiSpotify className="w-6 h-6" />
                    </Link>

                    {/* YouTube */}
                    <Link href="https://www.youtube.com/@ositadavd" className="text-white hover:opacity-70 transition-opacity">
                        <SiYoutube className="w-6 h-6" />
                    </Link>

                    {/* Instagram */}
                    <Link href="https://www.instagram.com/ositadavd" className="text-white hover:opacity-70 transition-opacity">
                        <SiInstagram className="w-6 h-6" />
                    </Link>

                    {/* SoundCloud */}
                    <Link href="https://soundcloud.com/ositadavid" className="text-white hover:opacity-70 transition-opacity">
                        <SiSoundcloud className="w-6 h-6" />
                    </Link>

                    {/* Apple Music */}
                    <Link href="https://music.apple.com/us/artist/osita-david/1825984531" className="text-white hover:opacity-70 transition-opacity">
                        <SiApplemusic className="w-6 h-6" />
                    </Link>
                </div>

                {/* <div className="text-center pt-8 border-t border-white/5 w-full max-w-[200px]">
                    <p className="font-headline-lg text-[10px] tracking-widest uppercase text-neutral-600">
                        © OSITA DAVID
                    </p>
                </div> */}
            </footer>
        </div>
    );
}
