"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfraExplain from "../components/InfraExplain";
import PixelBlast from "../components/PixelBlast";
import TextGenerateEffectDemo from "../components/text-generate-effect-demo";
import Logos from "../components/Logos";

function InfrastructureSolutions() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] bg-black overflow-hidden ">

        {/* PIXEL BLAST BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#7a53fa"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* HERO CONTENT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center mt-18">

          {/* TEXT GENERATE HEADING */}
          <h1 className="text-white font-bold leading-tight max-w-4xl
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl"
          >
            <TextGenerateEffectDemo
              words="Infrastructure Solutions Built for Scale. Secured for Growth."
            />
          </h1>

          {/* SUBTITLE */}
          <p className="mt-8 max-w-2xl text-sm sm:text-base text-gray-300">
            We design and implement secure, scalable IT infrastructure — from
            network setup and server deployment to data center management —
            providing a solid foundation for your digital operations.
          </p>
        </div>
      

       
      </section>

      {/* CONTENT */}
      <InfraExplain />
      <Logos/>

      <Footer />
    </>
  );
}

export default InfrastructureSolutions;
