"use client";

import Header from "./Header";
import Footer from "./Footer";
import Beams from "./Beams";
import TextGenerateEffectDemo from "./text-generate-effect-demo";
import AboutContentSection from "./AboutContentSection";

const AboutUsSection = () => {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[700px] md:h-[600px] overflow-hidden bg-black">

        {/* BEAMS BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* CONTENT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <h1 className="text-white font-bold leading-tight max-w-4xl
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

          <p className="mt-6 sm:mt-8 max-w-xl sm:max-w-2xl text-xs sm:text-sm md:text-base text-gray-300">
            From infrastructure to cybersecurity, cloud to managed services —
            Artiflex IT delivers innovative, secure, and scalable technology
            for businesses of all sizes.
          </p>
        </div>

        {/* BOTTOM GRADIENT FADE */}
        <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-white to-transparent z-30" />
      </section>

      {/* LIGHT CONTENT SECTION */}
      <section className="bg-white pt-10 pb-14 sm:pt-12 sm:pb-16 -mt-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm md:text-base text-neutral-700">
            From infrastructure to cybersecurity, cloud to managed services —
            Artiflex IT delivers innovative, secure, and scalable technology
            for businesses of all sizes.
          </p>
        </div>
      </section>

      <AboutContentSection />

      <Footer />
    </>
  );
};

export default AboutUsSection;
