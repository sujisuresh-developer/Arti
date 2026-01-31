import LaserFlow from "./LaserFlow";

const Hero = () => {
  return (
    <section className="relative bg-black overflow-hidden h-screen flex flex-col justify-between">
      
      {/* 1. LASER FLOW BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <LaserFlow
          horizontalBeamOffset={0.25}
          verticalBeamOffset={-0.4}
          color="#566feb"
          horizontalSizing={0.6}
          verticalSizing={2}
          wispDensity={1}
          wispSpeed={15}
          wispIntensity={5}
          flowSpeed={0.35}
          flowStrength={0.25}
          fogIntensity={0.45}
          fogScale={0.3}
          fogFallSpeed={0.6}
          decay={1.1}
          falloffStart={1.2}
        />
      </div>

      {/* 2. THE GLOW - Increased intensity and adjusted position to be fully visible */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] z-[5] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom, rgba(86, 111, 235, 0.9) 0%, rgba(86, 111, 235, 0.4) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* 3. DARK OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* 4. HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 pt-32 w-full">
        <h1 className="text-white font-bold leading-none text-[48px] sm:text-[64px] lg:text-[96px]">
          Innovate.
          <br />
          Secure.
          <br />
          Transform.
        </h1>

        <p className="mt-6 text-gray-400 max-w-lg text-base sm:text-lg">
          Powering businesses with secure, scalable, and reliable technology foundations.
        </p>
      </div>

      {/* 5. THE SMALL WHITE ARC SECTION */}
      <div className="relative z-20 w-full flex justify-center items-end">
        <div className="relative bg-white w-[40%] max-w-[900px] h-28 px-20 flex items-center justify-around rounded-t-[50px] ms-165">
          
          {/* INVERTED CORNER MASKS (This creates the "Small Arc" look from the first photo) */}
          <div className="absolute -left-[39px] bottom-0 w-10 h-10 bg-white" 
               style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 100%, 0% 0%, 0% 0%, 100% 0%)', maskImage: 'radial-gradient(circle at 0% 0%, transparent 100%, black 100%)', WebkitMaskImage: 'radial-gradient(circle at 0% 0%, transparent 39px, black 40px)' }} />
          
          <div className="absolute -right-[39px] bottom-0 w-10 h-10 bg-white" 
               style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 100%, 100% 0%, 100% 0%, 0 0%)', maskImage: 'radial-gradient(circle at 100% 0%, transparent 100%, black 100%)', WebkitMaskImage: 'radial-gradient(circle at 100% 0%, transparent 39px, black 40px)' }} />

          {/* LOGO PLACEHOLDERS */}
          <div className="text-blue-900 font-bold opacity-30">BILAL COACH</div>
          <div className="text-blue-900 font-bold opacity-30 text-xl">LOGO</div>
          <div className="text-blue-900 font-bold opacity-30">SHAHEEN</div>
          <div className="text-blue-900 font-bold opacity-30">MANTHAR GROUP</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;