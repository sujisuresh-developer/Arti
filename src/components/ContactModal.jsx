"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import Meteors from "./ui/meteors";

const ContactModal = ({ open, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* BACKDROP BLUR & DARKENING */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* MODAL CONTAINER */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              relative w-full max-w-5xl 
              bg-zinc-950 border border-white/10 
              rounded-2xl shadow-2xl overflow-hidden
              max-h-[90vh] flex flex-col
            "
          >
         
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
              <Meteors number={20} />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* SCROLLABLE CONTENT AREA */}
            <div className="relative z-10 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[500px]">
                
                {/* --- LEFT: INFO SECTION (2 cols) --- */}
                <div className="lg:col-span-2 bg-zinc-900/40 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] font-bold text-white tracking-wide">
                      Let’s Talk
                    </h2>
                    <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                      Have a big idea or a business to scale? 
                      We help enterprises build future-ready infrastructure.
                    </p>
                  </div>

                  <div className="mt-10 space-y-8">
                    {/* Contact Details */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Contact</h4>
                      <a href="mailto:info@artiflex.com" className="flex items-center gap-2 text-zinc-200 hover:text-blue-400 transition-colors">
                        <Mail size={16} />
                        info@artiflex.com
                      </a>
                    </div>

                    {/* Socials */}
                   
                  </div>
                </div>

                {/* --- RIGHT: FORM SECTION (3 cols) --- */}
                <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <form className="space-y-5">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <InputGroup label="Name" placeholder="John Doe" />
                      <InputGroup label="Email" placeholder="john@example.com" type="email" />
                    </div>

                    {/* Custom Select */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-zinc-300">Service Interest</label>
                      <div className="relative">
                        <select className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-zinc-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none transition-all cursor-pointer">
                          <option className="bg-zinc-900 text-zinc-400">Select a Service</option>
                          <option className="bg-zinc-900">Infrastructure Solutions</option>
                          <option className="bg-zinc-900">Cyber Security</option>
                          <option className="bg-zinc-900">Cloud Solutions</option>
                          <option className="bg-zinc-900">Managed Services</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={16} />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-zinc-300">Message</label>
                      <textarea
                        rows="4"
                        placeholder="Tell us about your project..."
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-zinc-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Reusable Small Components ---

const InputGroup = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-medium text-zinc-300">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-zinc-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600"
    />
  </div>
);



export default ContactModal;