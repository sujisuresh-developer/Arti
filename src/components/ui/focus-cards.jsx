"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";

const Card = React.memo(
  ({ card, index, hovered, setHovered }) => {
    const Icon = card.icon;
    const isHovered = hovered === index;

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative rounded-2xl overflow-hidden h-72 md:h-96 w-full transition-all duration-300 ease-out bg-gray-100",
          hovered !== null && !isHovered && "blur-sm scale-[0.96]"
        )}
      >
        {/* IMAGE */}
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ALWAYS VISIBLE TITLE (BLACK, HIDES ON HOVER) */}
        <div
          className={cn(
            "absolute bottom-4 left-4 z-10 transition-opacity duration-300",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        >
          <h3 className="text-white  text-lg font-bold drop-shadow">
            {card.title}
          </h3>
        </div>

        {/* HOVER OVERLAY */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 z-20 flex flex-col justify-end p-6 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          {/* ICON */}
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4">
            <Icon className="text-[#1E5BFF]" size={20} />
          </div>

          {/* TITLE (WHITE, ONLY ON HOVER) */}
          <h3 className="text-white text-xl font-semibold">
            {card.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-2 text-sm text-gray-200 leading-relaxed">
            {card.desc}
          </p>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards = [] }) {
  const [hovered, setHovered] = useState(null);

  if (!Array.isArray(cards)) {
    console.error("FocusCards: 'cards' must be an array", cards);
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title || index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
