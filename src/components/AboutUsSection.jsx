"use client";

import Header from "./Header";
import Footer from "./Footer";

import TextGenerateEffectDemo from "./text-generate-effect-demo";
import AboutContentSection from "./AboutContentSection";
import VendorsAutoScroll from "./VendorsAutoScroll";
import FloatingLines from "./FloatingLines";

const AboutUsSection = () => {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
     <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <FloatingLines
            linesGradient={["#4f6cff", "#2F4BC0", "#0008fa"]}
            animationSpeed={1}
            interactive
            bendRadius={5}
            bendStrength={-0.5}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>


        {/* DARK OVERLAY */}
        {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}

        {/* CONTENT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            2xl:text-8xl"
          >
            <TextGenerateEffectDemo
              words="About ArtiflexIT your technology innovation partner."
            />
          </h1>

         
        </div>

        {/* BOTTOM GRADIENT FADE */}
        
      </section>

      {/* LIGHT CONTENT SECTION */}
     

      <AboutContentSection />
      <VendorsAutoScroll />

      <Footer />
    </>
  );
};

export default AboutUsSection;
