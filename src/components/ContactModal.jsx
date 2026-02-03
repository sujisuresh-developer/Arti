"use client";

import { useEffect } from "react";
import Meteors from "./ui/meteors";

const ContactModal = ({ open, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* WRAPPER */}
      <div className="relative w-full max-w-5xl mt-[88px]">
        {/* MODAL */}
        <div className="relative bg-black rounded-2xl shadow-2xl border border-white/10 p-5 md:p-8">

          {/* METEORS */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Meteors number={18} className="opacity-50" />
          </div>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 z-[100] text-xl font-semibold text-white hover:opacity-70"
          >
            ✕
          </button>

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LEFT */}
            <div className="text-white">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-['Playfair_Display',serif] font-semibold">
                Let’s Talk
              </h2>

              <p className="mt-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                Have some big idea or business to develop and need help?
                Reach out — we’d love to hear about your project.
              </p>

              <div className="mt-4 text-sm">
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-300">info@artiflex.com</p>
              </div>

              <div className="mt-3 text-sm">
                <h4 className="font-semibold">Socials</h4>
                <ul className="mt-1 space-y-0.5 underline text-gray-300">
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <form className="space-y-2 text-sm">
              <div>
                <label className="text-white">Name</label>
                <input className="mt-1 w-full bg-white px-3 py-2 rounded-md outline-none text-black" />
              </div>

              <div>
                <label className="text-white">Email</label>
                <input className="mt-1 w-full bg-white px-3 py-2 rounded-md outline-none text-black" />
              </div>

        <div className="relative">
  <label className="text-white">Service</label>

  <select
    className="
      mt-1 w-full
      bg-white
      px-3 pr-10
      py-2
      rounded-md
      outline-none
      text-black
      appearance-none
    "
  >
    <option>Select a Service</option>
    <option>Infrastructure Solutions</option>
    <option>Cyber Security</option>
    <option>Application Security</option>
    <option>Cloud Solutions</option>
    <option>Managed Services</option>
    <option>AMC Services</option>
  </select>

  {/* CENTERED ARROW */}
  <span
    className="
      pointer-events-none
      absolute
      right-3
      top-1/2
      -translate-y-1/150
      -translate-x-0.5
      text-gray-600
      text-xs
      leading-none
    "
  >
    ▼
  </span>
</div>



              <div>
                <label className="text-white">Message</label>
                <textarea
                  rows="2"
                  className="mt-1 w-full bg-white px-3 py-2 rounded-md outline-none text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-2.5 rounded-full bg-[#02AEEC] text-white font-semibold hover:opacity-90 transition"
              >
                Connect With Us
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
