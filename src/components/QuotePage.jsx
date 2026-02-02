"use client";



const QuotePage = () => {
  return (
    <>
      

      {/* QUOTE PAGE */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#F7FAFF] overflow-hidden mt-20">

        {/* Background Accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 
            w-[900px] h-[420px] 
            bg-blue-200 rounded-full 
            blur-[160px] opacity-40" />
        </div>

        {/* Quote Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

          {/* Blue Divider */}
          <div className="mx-auto mb-8 h-[4px] w-24 bg-[#2563eb] rounded-full" />

          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug">
            “Our role isn’t to push products, but to enable smarter,
            scalable decisions through software.”
          </blockquote>

          <p className="mt-8 text-sm uppercase tracking-widest text-gray-600">
            — Artiflex IT Philosophy
          </p>

        </div>
      </section>

    </>
  );
};

export default QuotePage;
