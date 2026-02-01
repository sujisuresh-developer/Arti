"use client";

import InfiniteMovingCardsDemo from "./Infinite-moving-cards-demo";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Countries Served" },
];

export default function TrustedSection() {
  return (
    <section className="bg-[#F7FAFF] py-10">
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
      <div className="mt-3">
        <InfiniteMovingCardsDemo />
      </div>

      {/* 🔹 STATS SECTION (NO LINES, SMALL GAP) */}
      <div className="mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
