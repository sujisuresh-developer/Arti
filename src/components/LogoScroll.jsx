import { useEffect, useRef } from "react";
import dub from "../assets/dub.png";
import logo28 from "../assets/28.png";
import logo3 from "../assets/idAIdoQlaN_1766401349277.png";
import logo4 from "../assets/idIu5Lf4Sf_1766399953051.png";
import nbtc from "../assets/nbtc.png";
import logo6 from "../assets/idMNWTiY7c_logos.png";
import shaw from "../assets/shaw.jpeg";
import logo8 from "../assets/LnW7oU12lP7gNmfZJtUdl05IXcB1736410981931_200x200.png";


const logos = [
  dub,
  logo28,
  logo3,
  logo4,
  nbtc,
  logo6,
  shaw,
  logo8,
];

 
const LogoScroll = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Section scroll progress (0 → 1)
      const progress = Math.min(
        Math.max((vh - rect.top) / (vh + rect.height), 0),
        1
      );

      // IMPORTANT: bigger movement + initial offset
      const translateX = -200 - progress * 600;

      trackRef.current.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fdfdfd] py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our Clients
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-12 whitespace-nowrap will-change-transform"
          >
            {/* LEFT END */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="w-3 h-3 rounded-full border border-gray-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
              </div>
              <div className="w-20 h-[1px] bg-gray-300" />
              <span className="text-sm font-medium text-gray-800">
                Businesses that secured peace of mind through clarity
              </span>
            </div>

            {/* LOGOS */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px]"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-12 object-contain"
                />
              </div>
            ))}

            {/* RIGHT END */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <span className="text-sm font-medium text-gray-800">
                Businesses that secured peace of mind through clarity
              </span>
              <div className="w-20 h-[1px] bg-gray-300" />
              <div className="w-3 h-3 rounded-full border border-gray-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LogoScroll;
