"use client";

import Image from "next/image";
import type { Product } from "@/lib/shopify";

interface ProductCarouselProps {
    products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
    if (products.length === 0) {
        return (
            <div className="w-full aspect-[3/4] bg-surface-container-lowest flex items-center justify-center">
                <p className="text-neutral-500">No products available</p>
            </div>
        );
    }

    const currentProduct = products[4];

    return (
        <div className="relative w-full">
            {/* Carousel Container */}
            <div className="relative w-3/5 mx-auto aspect-[3/4] overflow-hidden">
                <Image
                    key={currentProduct.id}
                    alt={currentProduct.image.altText}
                    src={currentProduct.image.url}
                    fill
                    className="w-full h-full object-cover transition-opacity duration-700"
                    priority
                />
            </div>

            {/* Navigation Buttons */}
            {/* <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-70 transition-opacity active:scale-95"
        aria-label="Previous product"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button> */}

            {/* <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-70 transition-opacity active:scale-95"
        aria-label="Next product"
      >
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button> */}

            {/* Product Info */}
            <div className="text-center space-y-4 py-8">
                <h2 className="font-headline-md text-headline-md text-white uppercase tracking-tight font-extrabold">
                    {currentProduct.title}
                </h2>
                <p className="font-body-lg text-body-lg text-white-400">
                    ${currentProduct.price}
                </p>
                {/* <div className="pt-4">
          <button className="px-12 py-4 bg-white text-black font-label-caps text-label-caps hover:bg-neutral-200 transition-colors active:scale-95">
            ADD TO CART
          </button>
        </div> */}
            </div>

            {/* Dots Indicator */}
            {/* Will be re-enabled when carousel has multiple products */}
        </div>
    );
}
