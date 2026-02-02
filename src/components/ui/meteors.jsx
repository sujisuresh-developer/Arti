"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Meteors = ({ number = 20, className }) => {
  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {meteors.map((_, idx) => {
        // Spread meteors evenly across width
        const position = idx * (800 / number) - 400;

        return (
          <span
            key={`meteor-${idx}`}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-40px",
              left: `${position}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default Meteors;
