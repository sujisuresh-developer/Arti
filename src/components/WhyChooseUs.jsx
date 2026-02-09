import React from "react";
import { Target, Layers, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { FocusCards } from "./ui/focus-cards"; // Assuming you have this component

const features = [
  {
    icon: Target,
    title: "Tailored IT Solutions",
    desc: "Custom-built infrastructure and services designed specifically for your business size, industry, and growth objectives.",
    image: "https://media.istockphoto.com/id/502462262/photo/cloud-computing.jpg?s=612x612&w=0&k=20&c=mNq94Zu3RXr9QIsW7kUMe9BedXPV_62lmOxCcqJhI0s=",
  },
  {
    icon: Layers,
    title: "Secure & Scalable Frameworks",
    desc: "Future-ready architecture that grows with your business while maintaining the highest security standards.",
    image: "https://itbrief.com.au/uploads/story/2025/10/31/Samsung_Knox_Protect.webp",
  },
  {
    icon: Users,
    title: "Dedicated Technology Partner",
    desc: "A committed team working as an extension of your organization, understanding your unique challenges.",
    image: "https://microwaresolutions.com/wp-content/uploads/2024/11/OEM-Technology-Partners.jpg",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "500+ successful implementations across global enterprises with 99.9% uptime and client satisfaction.",
    image: "https://imarat.com.pk/wp-content/uploads/2024/08/Reviewing-Developer-Profiles-and-Track-Records-for-Real-Estate.jpg.webp",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Simple Grid Pattern for Tech Vibe */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase bg-blue-50 px-3 py-1 rounded-full">
              Why Us
            </span>
           <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
  Why Choose{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
    Artiflex IT
  </span>
</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We're not just another IT provider — we're your strategic technology
              partner committed to your long-term success.
            </p>
          </motion.div>
        </div>

        {/* --- STYLED SEPARATOR LINE --- */}
        {/* Replaced the block with a sleek animated gradient line */}
        <motion.div 
           initial={{ scaleX: 0 }}
           whileInView={{ scaleX: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-14"
        >
          <div className="h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 shadow-lg shadow-blue-500/20" />
        </motion.div>

        {/* --- CARDS SECTION --- */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
        >
          <FocusCards cards={features} />
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;