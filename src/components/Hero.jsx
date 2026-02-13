import React from "react";
import LaserFlow from "./LaserFlow";
import sophos from "../assets/Sophos1.png";
import fortinet from "../assets/Fortinet.png";
import checkpoint from "../assets/check-point.png";
import aruba from "../assets/Aruba.png";
import veeam from "../assets/veeam.png";
import trend from "../assets/Trend_Micro.png";
import proofpoint from "../assets/Proofpoint.jpg";
import mimecast from "../assets/mimecast.png";
 import hp from "../assets/Hewlett.png";
import vmware from "../assets/vmware.png";
import dell from "../assets/dell.png";
import microsoft from "../assets/microsoft.png";
import paloalto from "../assets/PaloAltoNetworks.png";
import acronis from "../assets/Acronis.png";
import sonicwall from "../assets/SonicWall.png";
import cx3 from "../assets/3CX.png";
import huawei from "../assets/Huawei.png";
import cisco from "../assets/Cisco.png";
import nutanix from "../assets/Nutanix.png";
import eset from "../assets/ESET.png";
import kaspersky from "../assets/kaspersky.png";
import f5 from "../assets/f5.png";
import azure from "../assets/microsoft.png";
import ivanti from "../assets/Ivanti.png";


const vendors = [
  { name: "Sophos", logo: sophos, size: "large" },
  { name: "Fortinet", logo: fortinet },
  { name: "Check Point", logo: checkpoint, size: "large" },
  { name: "Aruba", logo: aruba, size: "large" },
  { name: "Veeam", logo: veeam },
  { name: "Trend Micro", logo: trend },
  { name: "Proofpoint", logo: proofpoint },
  { name: "Mimecast", logo: mimecast },
  { name: "Hewlett Packard", logo: hp},
  { name: "VMware", logo: vmware },
  { name: "Dell Technologies", logo: dell, size: "large" },
  { name: "Microsoft", logo: microsoft, size: "large" },
  { name: "Palo Alto Networks", logo: paloalto},
  { name: "Acronis", logo: acronis },
  { name: "SonicWall", logo: sonicwall},
  { name: "3CX", logo: cx3 },
  { name: "Huawei", logo: huawei, size: "large" },
  { name: "Cisco", logo: cisco},
  { name: "Nutanix", logo: nutanix, size: "large" },
  { name: "ESET", logo: eset,size: "large" },
  { name: "Kaspersky", logo: kaspersky, size: "large" },
  { name: "F5", logo: f5 },
  { name: "Microsoft Azure", logo: azure, size: "large" },
  { name: "Ivanti", logo: ivanti },
];

const VendorScroll = () => (
  <section className="w-full bg-white py-8 overflow-hidden">
    <div
  className="flex items-center gap-14 whitespace-nowrap animate-vendors px-6 w-max"
  onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
  onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
  onTouchStart={(e) => e.currentTarget.style.animationPlayState = "paused"} 
  onTouchEnd={(e) => e.currentTarget.style.animationPlayState = "running"}
>

      {[...vendors, ...vendors].map((v, i) => (
        <img
  key={i}
  src={v.logo}
  alt={v.name}
 className={`
  object-contain opacity-90
  ${
    v.name === "Sophos" ||
    v.name === "Aruba" ||
    v.name === "Microsoft"
      ? "h-26 sm:h-24 xl:h-28"

      // Decrease these specific logos
      : v.name === "Fortinet" ||
        v.name === "Palo Alto Networks" ||
        v.name === "SonicWall"||v.name==="kaspersky"
      ? "h-6 sm:h-6 xl:h-6"

      // Normal large
      : v.size === "large"
      ? "h-20 sm:h-20 xl:h-24"

      // Default small
      : "h-10 sm:h-12"
  }
`}


/>

      ))}
    </div>
  </section>
);

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
