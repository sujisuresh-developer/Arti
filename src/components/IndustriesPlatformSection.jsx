"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const industries = [
  {
    title: "Energy & Utilities",
    desc: "Smart grid management and secure operational technology infrastructure for energy providers.",
    image: "https://images.unsplash.com/photo-1758797899821-46e9aa667409?w=1200&auto=format&fit=crop&q=60",
    stat: "99.99% Uptime",
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
    image: "https://plus.unsplash.com/premium_photo-1673208585690-fe33159386bd?w=1200&auto=format&fit=crop&q=60",
    stat: "ISO 27001 Ready",
    points: [
      "Track cost & margin in real time",
      "Secure financial data pipelines",
      "Connected office systems",
      "Automated approvals & reporting",
    ],
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant systems ensuring patient data security and seamless healthcare delivery.",
    image: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    stat: "HIPAA Compliant",
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
    image: "https://plus.unsplash.com/premium_photo-1680509034814-e733c5f873ac?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29mdHdhcmUlMjBhcyUyMGElMjBzZXJ2aWNlfGVufDB8fDB8fHww",
    stat: "Zero Latency",
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
    <section className="relative bg-black py-24 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* --- SECTION HEADING --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Industries We Serve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-gray-400 leading-relaxed"
          >
            Deep expertise across critical sectors, delivering industry-specific
            solutions that meet regulatory and operational demands.
          </motion.p>
        </div>

        {/* --- TABS (NAVIGATION) --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {industries.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`
                relative px-6 py-3 text-sm font-semibold rounded-full transition-colors duration-300
                ${active === idx ? "text-white" : "text-gray-400 hover:text-white"}
              `}
            >
              {active === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </button>
          ))}
        </div>

        {/* --- MAIN CONTENT PANEL --- */}
        <div className="relative rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-md overflow-hidden">
          
          {/* Panel Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="p-6 md:p-12 lg:p-16 min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >

                {/* --- LEFT: TEXT CONTENT (Wider: 7 cols) --- */}
                <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                      Empower teams in <br className="hidden lg:block"/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        {industry.title}
                      </span>
                    </h3>
                    <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
                      {industry.desc}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                     <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
                        Key Capabilities
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        {industry.points.map((point, i) => (
                          <div key={i} className="flex gap-3 items-start group">
                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300">
                              <Check size={12} className="text-blue-400 group-hover:text-white" />
                            </div>
                            <p className="text-gray-300 group-hover:text-white transition-colors">
                              {point}
                            </p>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>

                {/* --- RIGHT: IMAGE (Larger: 5 cols) --- */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
                   <div className="relative group w-full">
                      {/* Image Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
                      
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square border border-white/10 shadow-2xl">
                         <img 
                            src={industry.image} 
                            alt={industry.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                         />
                         
                         {/* Subtle Overlay */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                         
                       
                      </div>
                   </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}