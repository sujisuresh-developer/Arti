"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden  ">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
    
  );
}

const testimonials = [
  {
    quote:
      "The cybersecurity solutions provided by Artillex IT gave us peace of mind Their proactive threat monitoring and rapid incident response have protected us from multiple sophisticated attacks.",
    name: "Michael Rodriguez",

    title: "Healthcare Solutions Lto.",
  },
  {
    quote:
      "As a growing enterprise, we needed a technology partner who could scale with us. Artiflex IT's managed services have been instrumental in supporting our 300% growth over two years.",
    name: "Jennifer Williams",
 
    title: "Eriergy Dynamics Corp",
  },
  {
    quote: "Artiflex IT transformed our entire infrastructure. Their team's expertise in cloud migration saved us 40% in operational costs while improving ou system rellability to 99.99% uptime.",
    name: "Sarah Chen",
    title: "FinTech Global"
  },
  {
    quote:
      "As a growing enterprise, we needed a technology partner who could scale with us. Artiflex IT's managed services have been instrumental in supporting our 300% growth over two years.",
    name: "Jennifer Williams",


    title: "Eriergy Dynamics Corp",
  },
  {
    quote:
      "Artiflex IT transformed our entire infrastructure. Their team's expertise in cloud migration saved us 40% in operational costs while improving ou system rellability to 99.99% uptime.",
    name: "Sarah Chen",
    title: "FinTech Global",
  },
];
