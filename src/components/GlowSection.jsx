const GlowSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 pt-40 pb-40 grid grid-cols-1 lg:grid-cols-2 items-start gap-12">

        {/* LEFT TEXT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full border border-gray-300 text-gray-600">
            Introduction
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Glow your User
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg text-base sm:text-lg leading-relaxed">
            We create custom IT solutions designed to align with your unique
            business needs, ensuring efficiency, scalability, and security.
            You gain a dedicated technology partner committed to understanding
            your requirements and delivering secure, future-ready solutions.
          </p>
        </div>

        {/* RIGHT IMAGE (LOWERED) */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="https://www.windcrest.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-image.7fde7d7b.png&w=2048&q=75"
            alt="Glow Visual"
            className="
              w-[260px]
              sm:w-[340px]
              lg:w-[420px]
              translate-y-32
            "
          />
        </div>
      </div>

      {/* BLUE WAVE (ON TOP OF IMAGE) */}
     {/* BLUE WAVE (SYMMETRIC LEFT & RIGHT EDGES) */}
<div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden leading-none pointer-events-none">
  <svg
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
    className="w-full h-[380px]"
  >
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
    />
  </svg>
</div>


    </section>
  )
}

export default GlowSection
