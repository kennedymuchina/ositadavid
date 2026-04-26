"use client";

import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from "@phosphor-icons/react";

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full flex justify-center items-center px-6 py-4 bg-black/90 backdrop-blur-md">
            {/* Left Menu Button */}
            <div className="absolute left-6">
                <button className="text-black hover:opacity-70 transition-opacity active:scale-95">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            {/* Center Logo */}
            <Link href="/">
                <Image
                    src="/images/ositadavid1.png"
                    alt="Osita David"
                    width={200}
                    height={80}
                    priority
                    className="h-16 w-auto"
                />
            </Link>

            {/* Right Icons */}
            <div className="absolute right-6 flex items-center gap-2">
                <button className="text-white hover:opacity-70 transition-opacity active:scale-95">
                    <MagnifyingGlassIcon className="w-6 h-6" />
                </button>

                <button className="text-white hover:opacity-70 transition-opacity active:scale-95">
                    <UserIcon className="w-6 h-6" weight="fill" />
                </button>

                <button className="text-white hover:opacity-70 transition-opacity active:scale-95 relative">
                    <ShoppingCartIcon className="w-6 h-6" weight="fill" />
                </button>
            </div>
        </header>
    );
}
