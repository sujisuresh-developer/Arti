const ClarityCTA = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4 bg-white">
      <div className="w-full max-w-6xl rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lg">
        
        {/* LEFT */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-light text-white leading-snug">
            Unsure about your security readiness?
            <span className="block font-semibold text-blue-200">
              Get clear visibility. Take confident action.
            </span>
          </h2>
        </div>

        {/* RIGHT */}
        <div className="max-w-md text-left md:text-right">
          <p className="text-neutral-300 text-sm mb-4">
            A quick conversation to understand risks, priorities,
            and the smartest next move for your business.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-6 py-2.5 text-blue-200 text-sm font-medium hover:bg-blue-200 hover:text-neutral-900 transition">
            Contact Us
            <span className="text-base">›</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ClarityCTA;
