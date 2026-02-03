"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PixelBlast from "../components/PixelBlast";
import TextGenerateEffectDemo from "../components/text-generate-effect-demo";
import Logos from "../components/Logos";


import CloudExplain from "./CloudExplain";

function CloudSolutions() {
    return (
        <>
            <Header />

            {/* HERO SECTION */}
          <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">

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

                {/* HERO CONTENT */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center mt-10">

                    {/* TEXT GENERATE HEADING */}
                    <h1
                        className="text-white font-bold leading-tight max-w-4xl
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl"
                    >
                        <TextGenerateEffectDemo
                            words="Cloud Solutions Designed for Security."

                        />
                    </h1>

                    {/* SUBTITLE */}
                    <p className="mt-8 max-w-3xl text-sm sm:text-base text-gray-300">
                        Empowering businesses with flexible, secure, and optimized hybrid
and multi-cloud environments.

                    </p>
                </div>



            </section>

            <CloudExplain />
            <Logos/>

            <Footer />
        </>
    );
}

export default CloudSolutions;
