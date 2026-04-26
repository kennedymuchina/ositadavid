import Link from "next/link";
import { SiSpotify, SiYoutube, SiSoundcloud, SiApplemusic } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

export function Footer() {
    return (
        <footer className="flex flex-col items-center gap-4 py-6 md:py-8 lg:py-12 px-4 md:px-6 w-full bg-black">
            <nav className="flex flex-col items-center gap-2">
                <Link
                    href="#"
                    className="font-headline-lg text-[10px] tracking-tight uppercase text-white transition-colors [font-family:Arial]"
                >
                    TERMS & CONDITIONS
                </Link>
                <Link
                    href="#"
                    className="font-headline-lg text-[10px] tracking-tight uppercase text-white transition-colors [font-family:Arial]"
                >
                    PRIVACY POLICY
                </Link>
                <Link
                    href="#"
                    className="font-headline-lg text-[10px] tracking-tight uppercase text-white transition-colors [font-family:Arial]"
                >
                    COOKIES
                </Link>
                <Link
                    href="#"
                    className="font-headline-lg text-[10px] tracking-tight uppercase text-white transition-colors [font-family:Arial]"
                >
                    DO NOT SELL MY INFORMATION
                </Link>
                <Link
                    href="#"
                    className="font-headline-lg text-[10px] tracking-tight uppercase text-white transition-colors [font-family:Arial]"
                >
                    ©XI100 / YVNG ROCKSTXRS™ ALL RIGHTS RESERVED
                </Link>
            </nav>
            <div className="flex gap-4">
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
                    <AiFillInstagram className="w-6 h-6" />
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
        </footer>
    );
}
