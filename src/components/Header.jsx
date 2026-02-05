import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

import logo from "../assets/final.png";
import ContactModal from "./ContactModal";
import ContactButton from "./ContactButton";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  // Handle Scroll Locking (for both Mobile Menu & Contact Modal)
  useEffect(() => {
    if (mobileOpen || contactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [mobileOpen, contactOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Infrastructure Solutions", path: "/infrastructure-solutions" },
    { name: "Cyber Security", path: "/cyber-security-solutions" },
    { name: "Application Security", path: "/application-security-solutions" },
    { name: "Cloud Solutions", path: "/cloud-solutions" },
    { name: "Managed Services", path: "/managed-services" },
    { name: "AMC Services", path: "/amc-services" },
  ];

  return (
    <>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* HEADER WRAPPER */}
      <header className="fixed top-0 left-0 w-full z-50 mt-0 md:mt-0 ">
        <div
          className="
            max-w-full mx-auto
            bg-white
             shadow-lg border border-white/40
            transition-all duration-300
          "
        >
          <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-3">

            {/* --- LOGO --- */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Artiflex IT"
                className="h-15 w-auto md:h-18 object-contain"
              />
            </Link>

            {/* --- DESKTOP NAVIGATION --- */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>

              {/* Desktop Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2">
                  Services <ChevronDown size={14} />
                </button>
                
                {/* Dropdown Panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
              
              <div className="pl-2">
                <ContactButton onClick={() => setContactOpen(true)} />
              </div>
            </nav>

            {/* --- MOBILE HAMBURGER --- */}
            <button
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* ============================================== */}
      {/* MOBILE SIDE DRAWER                */}
      {/* ============================================== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* 1. Backdrop (Click to close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* 2. Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full">
                
                {/* Header inside Drawer */}
                <div className="flex justify-between items-center mb-8">
                   <span className="text-lg font-bold text-slate-900">Menu</span>
                   <button 
                     onClick={() => setMobileOpen(false)}
                     className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors"
                   >
                     <X size={20} />
                   </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                  <MobileLink to="/">Home</MobileLink>
                  <MobileLink to="/about">About</MobileLink>

                  {/* Mobile Services Accordion */}
                  <div className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold text-slate-800"
                    >
                      Services
                      <motion.span
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col pb-2">
                            {navLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.path}
                                className="px-6 py-3 text-sm text-slate-600 border-l-2 border-transparent hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-600 transition-all flex items-center justify-between group"
                              >
                                {link.name}
                                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"/>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <MobileLink to="/faq">FAQ</MobileLink>
                </nav>

                {/* Footer / CTA inside Drawer */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setContactOpen(true);
                    }}
                    className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 active:scale-95 transition-all"
                  >
                    Contact Us
                  </button>
                  
                  <p className="mt-4 text-center text-xs text-slate-400">
                    © Artiflex IT Solutions
                  </p>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper Component for Mobile Links to keep code clean
const MobileLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    className="block px-4 py-3.5 text-base font-medium text-slate-700 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors"
    {...props}
  >
    {children}
  </Link>
);

export default Header;