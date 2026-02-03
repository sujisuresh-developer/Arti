"use client";

const QuotePage = () => {
  return (
    <>
      {/* QUOTE PAGE */}
      <section
        className="
          relative
          min-h-screen
          flex
          items-center
          justify-center
          overflow-hidden
          mt-20
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      >
        {/* DARK / LIGHT OVERLAY */}
   

        {/* Quote Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

          {/* Blue Divider */}
          <div className="mx-auto mb-8 h-[4px] w-24 bg-[#2563eb] rounded-full" />

          {/* QUOTE */}
          <blockquote
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-snug
              text-white
              font-['Playfair_Display',serif]
            "
          >
            <span className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl align-top text-[white] mr-1">
              “
            </span>
            Our role isn’t to push products, but to enable smarter,
            scalable decisions through software.
          </blockquote>
        </div>
      </section>
    </>
  );
};

export default QuotePage;
