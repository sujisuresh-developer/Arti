import React from "react";
import { motion, useAnimate } from "framer-motion";

const ContactButton = ({ children = "Contact", onClick, className = "" }) => {
  const [scope, animate] = useAnimate();

  const animateLoading = async () => {
    await animate(
      ".loader",
      { width: 20, scale: 1, display: "block" },
      { duration: 0.2 }
    );
  };

  const animateSuccess = async () => {
    await animate(
      ".loader",
      { width: 0, scale: 0, display: "none" },
      { duration: 0.2 }
    );
    await animate(
      ".check",
      { width: 20, scale: 1, display: "block" },
      { duration: 0.2 }
    );
    await animate(
      ".check",
      { width: 0, scale: 0, display: "none" },
      { delay: 1.5, duration: 0.2 }
    );
  };

  const handleClick = async (e) => {
    await animateLoading();
    await onClick?.(e);
    await animateSuccess();
  };

  const Loader = () => (
  <motion.svg
    animate={{ rotate: 360 }}
    initial={{ scale: 0, width: 0, display: "none" }}
    transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="loader text-white"
  >
    <path d="M12 3a9 9 0 1 0 9 9" />
  </motion.svg>
);


const CheckIcon = () => (
  <motion.svg
    initial={{ scale: 0, width: 0, display: "none" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check text-white"
  >
    <path d="M9 12l2 2l4-4" />
  </motion.svg>
);


  return (
    <motion.button
  ref={scope}
  onClick={handleClick}
  className="
    group relative overflow-visible
    flex items-center justify-center gap-2
    rounded-full bg-[#02AEEC]
    px-5 py-2.5
    font-medium text-white
    
  "
>
  {/* Outline ring */}
  <span
    className="
      pointer-events-none absolute
      inset-[-3px]
      rounded-full
      border-2 border-[#02AEEC]
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
    "
  />

  <span className="relative z-10">Send message</span>
</motion.button>

  );
};

export default ContactButton;
