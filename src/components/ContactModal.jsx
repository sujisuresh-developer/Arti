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
    <div className="fixed inset-0 z-[60] flex justify-center mt-2 bg-black/30 backdrop-blur-md transition-all duration-300">

      {/* WRAPPER */}
      <div
        className="relative w-full max-w-5xl px-4"
        style={{ marginTop: "88px" }}
      >

        {/* ===== METEORS BACKGROUND ===== */}
      

        {/* ===== MODAL CONTENT ===== */}
        <div className="relative bg-black rounded-2xl shadow-2xl p-6 md:p-10 border border-white/10">
        <Meteors number={25} className="opacity-60" />

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 md:top-2 md:right-6 z-50 text-2xl font-semibold text-white hover:opacity-70"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            {/* LEFT */}
            <div className="-mt-4 text-white">
              <h2 className="text-3xl md:text-5xl font-bold">
                Let’s Talk
              </h2>

              <p className="mt-4 md:mt-5 text-gray-300 leading-relaxed text-sm md:text-base">
                Have some big idea or business to develop and need help?
                Then reach out — we’d love to hear about your project.
              </p>

              <div className="mt-6 md:mt-8">
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-300">info@artiflex.com</p>
              </div>

              <div className="mt-5 md:mt-6">
                <h4 className="font-bold">Socials</h4>
                <ul className="mt-2 space-y-1 underline text-gray-300">
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form className="space-y-3 md:space-y-3 -mt-7">

              <div>
                <label className="text-sm font-medium text-white">Name</label>
                <input className="mt-1 w-full bg-white px-4 py-2.5 rounded-lg outline-none text-black" />
              </div>

              <div>
                <label className="text-sm font-medium text-white">Email</label>
                <input className="mt-1 w-full bg-white px-4 py-2.5 rounded-lg outline-none text-black" />
              </div>

              <div>
                <label className="text-sm font-medium text-white">
                  What service are you interested in
                </label>
                <select className="mt-1 w-full bg-white px-4 py-2.5 rounded-lg outline-none text-black">
                  <option>Select project type</option>
                  <option>Infrastructure Solutions</option>
                  <option>Cyber Security</option>
                  <option>Application Security</option>
                  <option>Cloud Solutions</option>
                  <option>Managed Services</option>
                  <option>AMC Services</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-white">Message</label>
                <textarea
                  rows="3"
                  className="mt-1 w-full bg-white px-4 py-2.5 rounded-lg outline-none text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 py-3 rounded-full bg-[#02AEEC] text-white font-semibold hover:opacity-90 transition"
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
