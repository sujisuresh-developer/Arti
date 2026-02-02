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

         <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug font-serif">
  <span className="inline-block text-6xl md:text-7xl lg:text-8xl align-top text-[#2563eb] mr-1">
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
