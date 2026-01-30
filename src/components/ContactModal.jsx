import { useEffect } from "react";

const ContactModal = ({ open, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    // bg-black/40 backdrop-blur-sm
    <div className="fixed inset-0 z-[60] flex justify-center ">

      {/* Wrapper (below header) */}
      <div
        className="relative w-full max-w-5xl px-4"
        style={{ marginTop: "88px" }}
      >
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-10">

          {/* Close X */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 md:top-2 md:right-6 z-50 text-2xl font-semibold text-black hover:opacity-70"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            {/* LEFT */}
            <div className="-mt-7">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                Let’s Talk
              </h2>

              <p className="mt-4 md:mt-5 text-gray-700 leading-relaxed text-sm md:text-base">
                Have some big idea or business to develop and need help?
                Then reach out we’d love to hear about your project and provide help
              </p>

              <div className="mt-6 md:mt-8">
                <h4 className="font-bold">Email</h4>
                <p>info@artiflex.com</p>
              </div>

              <div className="mt-5 md:mt-6">
                <h4 className="font-bold">Socials</h4>
                <ul className="mt-2 space-y-1 underline">
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <form className="space-y-3 md:space-y-3 -mt-7">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none" />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none" />
              </div>

              <div>
                <label className="text-sm font-medium">
                  What service are you interested in
                </label>
                <select className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none">
                  <option>Select project type</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows="3"
                  className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 py-3 rounded-full bg-[#02AEEC] text-white font-semibold"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
