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
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-4">

        {/* PIXEL BLAST BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#02AEEC"
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

        {/* HERO CONTENT */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-5xl pt-24 sm:pt-28 md:pt-0">

          {/* HEADING */}
          <h1
            className="
              text-white font-extrabold
              leading-tight
              text-2xl
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              xl:text-6xl
              max-w-full
              px-2
            "
          >
            <TextGenerateEffectDemo
              words="Future Ready Technology Platforms"
            />
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              mt-6
              text-sm
              sm:text-base
              md:text-base
              text-gray-300
              max-w-xl
              px-3
            "
          >
            We design and implement secure, scalable IT infrastructure — from
            network setup and server deployment to data center management —
            providing a solid foundation for your digital operations.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <InfraExplain />
      <Logos />

      <Footer />
    </>
  );
}

export default InfrastructureSolutions;
