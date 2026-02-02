"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PixelBlast from "../components/PixelBlast";
import TextGenerateEffectDemo from "../components/text-generate-effect-demo";

import AppliExplain from "./AppliExplain";
import Logos from "../components/Logos";

function ApplicationSecuritySolutions() {
    return (
        <>
            <Header />

            {/* HERO SECTION */}
            <section className="relative w-full h-[600px] bg-black overflow-hidden">

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
                <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">

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
                            words="Built-In Security for Every Application."
                        />
                    </h1>

                    {/* SUBTITLE */}
                    <p className="mt-8 max-w-3xl text-sm sm:text-base text-gray-300">
                        From secure code to deployment, we protect applications against evolving threats
                        while ensuring performance and compliance.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-42 sm:h-40 bg-gradient-to-t from-white via-black/50 to-transparent z-10 pointer-events-none" />



            </section>

            <AppliExplain />
            <Logos/>

            <Footer />
        </>
    );
}

export default ApplicationSecuritySolutions;
