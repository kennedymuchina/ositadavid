"use client";

import { useState } from "react";

export function TourForm() {
    const [email, setEmail] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted:", { email, agreedToTerms });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center gap-6">
            {/* Email Input */}
            <div className="w-full">
                <label className="block text-center font-label-caps text-label-caps text-white mb-4">
                    Enter Email For Updates
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    required
                />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-5 h-5 border border-white bg-transparent cursor-pointer"
                    required
                />
                <label htmlFor="terms" className="font-label-caps text-label-caps text-white cursor-pointer">
                    I AGREE TO TERMS
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="mt-4 px-12 py-3 font-label-caps text-label-caps text-white border border-white hover:bg-white hover:text-black transition-colors active:scale-95"
            >
                SUBMIT
            </button>
        </form>
    );
}
