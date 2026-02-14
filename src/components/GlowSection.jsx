const GlowSection = () => {
  return (
    <section className="relative bg-white overflow-hidden -mt-10">

      {/* BACKGROUND LINES */}
      <div
        className="
          absolute inset-0 z-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
          bg-[size:120px_120px]
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 pt-40 pb-40 grid grid-cols-1 lg:grid-cols-2 items-start gap-12">

        {/* LEFT TEXT */}
        <div className="animate-fadeInUp">

          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Your Growth.Our Technology
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg text-base sm:text-lg leading-relaxed">
            We create custom IT solutions designed to align with your unique
            business needs, ensuring efficiency, scalability, and security.
            You gain a dedicated technology partner committed to understanding
            your requirements and delivering secure, future-ready solutions.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="https://www.windcrest.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-image.7fde7d7b.png&w=2048&q=75"
            alt="Glow Visual"
            className="
              w-[260px]
              sm:w-[340px]
              lg:w-[450px]
              translate-y-32
              transition-transform duration-700 ease-out
              hover:scale-105
              animate-floatSlow
              h-380px
            "
          />
        </div>
      </div>

      {/* BLUE WAVE */}
     {/* BLUE WAVE */}
<div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden pointer-events-none">
  <svg
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
    className="w-full h-[380px] animate-waveIn"
  >
    {/* MAIN WAVE */}
    <path
      d="
        M0,110
        C200,180 420,210 720,190
        1020,170 1240,120 1440,140
        L1440,220
        L0,220
        Z
      "
      fill="#2563eb"
      style={{
        filter: "drop-shadow(0 -25px 60px rgba(37,99,235,0.45))",
      }}
    />

    {/* ✨ GLOW TOP LINE */}
    <path
      d="
        M0,110
        C200,180 420,210 720,190
        1020,170 1240,120 1440,140
      "
      fill="none"
      stroke="rgba(147,197,253,0.9)"
      strokeWidth="4"
      style={{
        filter: "drop-shadow(0 0 12px rgba(147,197,253,0.9)) drop-shadow(0 0 24px rgba(37,99,235,0.6))",
      }}
    />
  </svg>
</div>


      {/* LOCAL ANIMATIONS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out both;
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(32px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        @keyframes waveIn {
          from {
            transform: translateY(80px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-waveIn {
          animation: waveIn 1.2s ease-out both;
        }
      `}</style>

    </section>
  )
}

export default GlowSection
