import React from "react";
import LaserFlow from "./LaserFlow";
import sophos from "../assets/Resize/sophos.png";
import fortinet from "../assets/Resize/Fortinet.png";
import checkpoint from "../assets/Resize/Check-Point-2024-logo-color.png";
import aruba from "../assets/Aruba.png";
import veeam from "../assets/Resize/veeam.png";
import trend from "../assets/Resize/Trend_Micro.png";
import proofpoint from "../assets/Resize/Proofpoint.jpg.png";
import mimecast from "../assets/Resize/mimecast.png";
import hp from "../assets/Resize/Hewlett.png";
import vmware from "../assets/Resize/vmware.png";
import dell from "../assets/Resize/Dell_Logo.png";
import microsoft from "../assets/Resize/microsoft.png";
import paloalto from "../assets/Resize/PaloAltoNetworks.png";
import acronis from "../assets/Resize/Acronis.png";
import sonicwall from "../assets/Resize/SonicWall.png";
import cx3 from "../assets/Resize/3CX.png";
import huawei from "../assets/Huawei.png";
import cisco from "../assets/Resize/Cisco.png";
import nutanix from "../assets/Resize/Nutanix.png";
import eset from "../assets/Resize/ESET.png";
import kaspersky from "../assets/Resize/Kaspersky1.png";
import f5 from "../assets/Resize/f5.png";
import azure from "../assets/Resize/Microsoft_Azure.png";
import ivanti from "../assets/Resize/Ivanti.png";



import { useRef, useState } from "react";


const vendors = [
  { name: "Sophos", logo: sophos },
  { name: "Fortinet", logo: fortinet },
  { name: "Check Point", logo: checkpoint },
  { name: "Aruba", logo: aruba },
  { name: "Veeam", logo: veeam },
  { name: "Trend Micro", logo: trend },
  { name: "Proofpoint", logo: proofpoint },
  { name: "Mimecast", logo: mimecast },
  { name: "Hewlett Packard", logo: hp },
  { name: "VMware", logo: vmware },
  { name: "Dell Technologies", logo: dell },
  { name: "Microsoft", logo: microsoft},
  { name: "Palo Alto Networks", logo: paloalto },
  { name: "Acronis", logo: acronis },
  { name: "SonicWall", logo: sonicwall },
  { name: "3CX", logo: cx3 },
  { name: "Huawei", logo: huawei},
  { name: "Cisco", logo: cisco },
  { name: "Nutanix", logo: nutanix},
  { name: "ESET", logo: eset },
  { name: "Kaspersky", logo: kaspersky},
  { name: "F5", logo: f5 },
  { name: "Microsoft Azure", logo: azure},
  { name: "Ivanti", logo: ivanti },
];

const VendorScroll = () => {

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    setIsDragging(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const slider = scrollRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-blue-400 py-8 overflow-y-hidden mt-10">
      <div
        ref={scrollRef}
        className="flex items-center gap-14 whitespace-nowrap animate-vendors px-6 w-max cursor-grab"
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
          setIsDragging(false);
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.animationPlayState = "running";
          setIsDragging(false);
        }}
      >
       {[...vendors, ...vendors].map((v, i) => (
  <img
    key={i}
    src={v.logo}
    alt={v.name}
    className={`
      object-contain opacity-90
      ${
        v.name === "Huawei" || v.name === "Aruba"
          ? "h-25 sm:h-24 xl:h-28"
          : "h-10 sm:h-18 xl:h-10"
      }
    `}

  />
))}
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="
          relative overflow-hidden
          min-h-[100vh] sm:min-h-[90vh] lg:min-h-[100vh]
          flex items-center
          bg-black
        "
      >
        {/* MOBILE BLUE EFFECT */}
        <div className="absolute inset-0 sm:hidden z-0">
          {/* Gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1a3a] to-black" />

          {/* Blue glow */}
          <div
            className="
              absolute bottom-[-20%] right-[-30%]
              w-[120%] h-[120%]
              bg-[radial-gradient(circle,rgba(86,111,235,0.45)_0%,rgba(86,111,235,0.25)_30%,transparent_65%)]
              blur-[120px]
            "
          />
        </div>

        {/* LASER FLOW (DESKTOP ONLY) */}
        {/* LASER FLOW (RESPONSIVE) */}
        <div className="absolute inset-0 z-0 laserflow-container block sm:block">
          <LaserFlow
            horizontalBeamOffset={0.25}
            verticalBeamOffset={-0.5}
            color="#566feb"
            horizontalSizing={0.6}
            verticalSizing={3}
            wispDensity={1}
            wispSpeed={15}
            wispIntensity={25}
            flowSpeed={0.25}
            flowStrength={0.25}
            fogIntensity={0.45}
            fogScale={0.45}
            fogFallSpeed={0.6}
            decay={2.1}
            falloffStart={1}
          />
        </div>

        {/* RIGHT GLOW (DESKTOP ONLY) */}
        <div
          className="
            hidden sm:block
            absolute right-0 bottom-0
            h-[65%] w-[45%]
            bg-[radial-gradient(circle_at_bottom_right,rgba(86,111,235,0.85)_0%,rgba(86,111,235,0.4)_40%,transparent_75%)]
            blur-[100px]
            z-[1]
            pointer-events-none
          "
        />

        {/* HERO CONTENT */}
        <div
          className="
            relative z-10
            max-w-7xl w-full
            px-6 lg:px-24

            flex flex-col items-center justify-center text-center
            sm:block sm:text-left

            pt-0 sm:pt-[120px]
          "
        >
          <h1 className="text-white font-bold leading-none text-[34px] sm:text-[64px] lg:text-[96px]">
            Innovate.
            <br />
            Secure.
            <br />
            Transform.
          </h1>

          <p className="mt-5 text-gray-300 max-w-lg text-sm sm:text-lg">
            Powering businesses with secure, scalable, and reliable technology foundations.
          </p>
        </div>
      </section>



      {/* ================= VENDORS AFTER HERO ================= */}
      <VendorScroll />
    </>
  );
};

export default Hero;
