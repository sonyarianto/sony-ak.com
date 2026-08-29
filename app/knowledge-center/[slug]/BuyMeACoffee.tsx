"use client";

import Script from "next/script";

export default function BuyMeACoffee() {
  return (
    <div className="mt-12 flex justify-center border-t border-gray-200 pt-8">
      <Script
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        data-name="bmc-button"
        data-slug="sonyarianto"
        data-color="#FFDD00"
        data-emoji="☕"
        data-font="Inter"
        data-text="Buy me a coffee"
        data-outline-color="#000000"
        data-font-color="#000000"
        data-coffee-color="#ffffff"
        strategy="lazyOnload"
      />
      <a
        href="https://www.buymeacoffee.com/sonyarianto"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-[#FFDD00] px-6 py-3 font-medium text-black transition-colors hover:bg-[#e6c700]"
      >
        ☕ Buy me a coffee
      </a>
    </div>
  );
}
