const OurPromiseVideo = () => {
  return (
    <section className="relative w-full h-[85vh] lg:h-[95vh] overflow-hidden mb-40 ">

      {/* 🔹 BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/4480970/"   // ⬅️ your team video
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 BLUE OVERLAY */}
      <div className="absolute inset-0 bg-blue-900/70" />

      {/* 🔹 BLUE ELLIPSE GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* LEFT */}
        <div className="absolute -left-48 top-1/2 -translate-y-1/2
          w-[700px] h-[700px] rounded-full
          bg-blue-500/40 blur-[160px]" />

        {/* RIGHT */}
        <div className="absolute -right-48 top-1/2 -translate-y-1/2
          w-[700px] h-[700px] rounded-full
          bg-blue-400/40 blur-[160px]" />
      </div>

      {/* 🔹 CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          {/* RIGHT-ALIGNED TEXT BLOCK */}
          <div className="flex justify-end">
            <div className="max-w-2xl">

            <h2 className="
  text-xl sm:text-2xl lg:text-3xl xl:text-4xl
  font-semibold
  leading-snug
  text-white
">

              We’re building a world where growing businesses scale with confidence in their cybersecurity.
              </h2>

            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default OurPromiseVideo
