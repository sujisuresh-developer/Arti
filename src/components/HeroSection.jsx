import React from 'react';

const HeroSection = () => {
    return (
        // Main container with black background and relative positioning
        <div className="relative bg-black text-white min-h-screen flex items-center justify-start overflow-visible mb-32">

            {/* The diagonal yellow light effect element */}
            <div className="absolute top-0 left-0 w-full h-full">
                {/* Using arbitrary values for rotation and translation */}
                <div className="absolute bottom-0 left-0 w-[150%] h-[300px] bg-blue-400 opacity-70 transform rotate-[-30deg] translate-x-[-50%] translate-y-[-50%] blur-3xl filter-custom-blur" />
                {/* The secondary bright beam is another, smaller, rotated element */}
                <div className="absolute bottom-0 left-0 w-[100%] h-[150px] bg-blue-500 opacity-90 transform rotate-[-30deg] translate-x-[-40%] translate-y-[-40%] blur-xl filter-custom-blur" />
            </div>

            {/* Content Container to ensure text is above the diagonal element */}
            <div className="relative z-10 p-8 md:p-16 max-w-2xl">
                <div className="mb-4">
                    {/* Placeholder for the logo/icon in the top left */}

                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Delivering <span className="text-blue-400">clarity and confidence</span> in cybersecurity.
                </h1>

            </div>
        </div>
    );
};

export default HeroSection;
