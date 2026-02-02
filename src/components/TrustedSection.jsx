"use client";

import InfiniteMovingCardsDemo from "./Infinite-moving-cards-demo";



export default function TrustedSection() {
  return (
    <section className="mt-40" >
      {/* 🔹 TOP HEADING */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 -mt-6">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-2 text-neutral-600 text-sm md:text-base">
          Don&apos;t just take our word for it — hear from enterprises
          who&apos;ve transformed their IT operations with Artiflex IT.
        </p>
      </div>

      {/* 🔹 MOVING TESTIMONIAL CARDS */}
     
        <InfiniteMovingCardsDemo />
     

      
    </section>
  );
}
