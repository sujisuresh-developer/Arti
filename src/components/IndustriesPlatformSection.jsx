"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const industries = [
  {
    title: "Energy & Utilities",
    desc: "Smart grid management and secure operational technology infrastructure for energy providers.",
    image:
      "https://images.unsplash.com/photo-1758797899821-46e9aa667409?w=1200&auto=format&fit=crop&q=60",
    points: [
      "Secure OT & SCADA environments",
      "Real-time monitoring & analytics",
      "High-availability infrastructure",
      "Regulatory & compliance readiness",
    ],
  },
  {
    title: "Financial Services",
    desc: "Compliance-ready infrastructure and advanced security for banking and fintech operations.",
    image:
      "https://plus.unsplash.com/premium_photo-1673208585690-fe33159386bd?w=1200&auto=format&fit=crop&q=60",
    points: [
      "Track cost, value and margin in real time",
      "Reduce risk with secure data pipelines",
      "Connected office & supplier systems",
      "Automated approvals & reporting",
    ],
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant systems ensuring patient data security and seamless healthcare delivery.",
    image:
      "https://images.unsplash.com/photo-1606206873764-fd15e242df52?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    points: [
      "Patient data protection",
      "HIPAA & ISO compliance",
      "Secure clinical workflows",
      "24/7 system availability",
    ],
  },
  {
    title: "Enterprise & SaaS",
    desc: "Scalable cloud architecture and DevOps for high-growth technology companies.",
    image:
      "https://plus.unsplash.com/premium_photo-1680509034814-e733c5f873ac?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29mdHdhcmUlMjBhcyUyMGElMjBzZXJ2aWNlfGVufDB8fDB8fHww",
    points: [
      "Cloud-native scalability",
      "DevOps automation",
      "High-performance platforms",
      "Cost-optimized infrastructure",
    ],
  },
];

export default function IndustriesPlatformSection() {
  const [active, setActive] = useState(0);
  const industry = industries[active];

  return (
    <section className="relative bg-black py-20 overflow-hidden px-4 sm:px-6 lg:px-5">
        {/* SECTION HEADING */}
<div className="text-center max-w-3xl mx-auto px-6 mb-14">
  <h2 className="text-4xl md:text-5xl font-bold text-white">
    Industries We Serve
  </h2>
  <p className="mt-4 text-white">
    Deep expertise across critical sectors, delivering industry-specific
    solutions that meet regulatory and operational demands.
  </p>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= TABS ================= */}
        <div
          className="
            relative z-10
            flex flex-col sm:flex-row
            gap-3 sm:gap-4
            mb-8 sm:mb-2
            items-stretch sm:items-center
            justify-center
          "
        >
          {industries.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`
                px-6 py-4
                text-sm font-semibold
                transition
                w-full sm:w-auto
                rounded-lg sm:rounded-t-lg
                ${
                  active === idx
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#2563eb]/60 text-black/80 hover:bg-[white]"
                }
              `}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* ================= PURPLE PANEL ================= */}
        <div
          className="
            relative
            rounded-[32px] sm:rounded-[48px]
            bg-[#2563eb]
            px-6 sm:px-10
            py-12 sm:py-16
            text-white
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

            {/* LEFT TEXT */}
            <div className="lg:col-span-1 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Empower teams across <br /> {industry.title}
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                {industry.desc}
              </p>

              <p className="text-lg sm:text-xl font-semibold">
                One unified technology platform from planning to execution.
              </p>
            </div>

            {/* CENTER IMAGE */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-[260px] sm:w-[320px] md:w-[380px] object-cover h-80 sm:h-96 md:h-[350px]"
                />

               
              </div>
            </div>

            {/* RIGHT CHECKLIST */}
            <div className="lg:col-span-1 space-y-5">
              {industry.points.map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#4C1D95] flex items-center justify-center shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-white text-base sm:text-lg leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
