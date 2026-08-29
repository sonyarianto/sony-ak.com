"use client";

import { useEffect, useRef } from "react";

export default function BuyMeACoffee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";
    script.dataset.name = "bmc-button";
    script.dataset.slug = "sonyarianto";
    script.dataset.color = "#FFDD00";
    script.dataset.emoji = "☕";
    script.dataset.font = "Inter";
    script.dataset.text = "Buy me a coffee";
    script.dataset.outlineColor = "#000000";
    script.dataset.fontColor = "#000000";
    script.dataset.coffeeColor = "#ffffff";
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="mt-12 flex justify-center border-t border-gray-200 pt-8">
      <div ref={containerRef} />
    </div>
  );
}
