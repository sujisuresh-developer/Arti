"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { Star } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left", // RIGHT → LEFT
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const hasAnimated = useRef(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!hasAnimated.current) {
      addAnimation();
      hasAnimated.current = true;
    }
  }, []);

  const addAnimation = () => {
    if (!containerRef.current || !scrollerRef.current) return;

    const children = Array.from(scrollerRef.current.children);

    children.forEach((item) => {
      scrollerRef.current.appendChild(item.cloneNode(true));
    });

    setDirection();
    setSpeed();
    setStart(true);
  };

  const setDirection = () => {
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const setSpeed = () => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty(
      "--animation-duration",
      duration
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent) ]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[360px] md:w-[420px] shrink-0 rounded-2xl border bg-white px-8 pt-10 pb-6 shadow-sm"
          >
            {/* QUOTE BOX */}
            <div className="absolute -top-5 left-6">
              <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-xl leading-none">❝</span>
              </div>
            </div>

            {/* STARS */}
            <div className="mb-3 flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* QUOTE TEXT */}
            <p className="text-sm leading-relaxed text-neutral-700">
              “{item.quote}”
            </p>

            {/* AUTHOR */}
            <div className="mt-6">
              <p className="font-semibold text-neutral-900">{item.name}</p>
              <p className="text-sm text-blue-600">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
