import LaserFlow from "./LaserFlow";

const vendors = [
  { name: "Sophos", logo: "https://interworks.com/wp-content/uploads/2017/09/Sophos-ATC-LogoSQ.png",size: "large" },
  { name: "Fortinet", logo: "https://www.proofpoint.com/sites/default/files/pr/Proofpoint-logo-reg-K.jpg" },
  { name: "Check Point", logo: "https://www.eplus.com/images/default-source/authors/check-point-2024-logo-color.png?sfvrsn=69ac24b1_1",size: "large" },
  { name: "Aruba", logo: "https://interworks.com/wp-content/uploads/2017/09/Aruba.png" ,size: "large"},
  { name: "Veeam", logo: "https://securityaffairs.com/wp-content/uploads/2023/03/veeam-software-vector-logo.png" },
  { name: "Trend Micro", logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Trend_Micro_Logo_2023.png" },
  { name: "Proofpoint", logo: "https://www.proofpoint.com/sites/default/files/pr/Proofpoint-logo-reg-K.jpg" },
  { name: "Mimecast", logo: "https://cybercompare.com/wp-content/uploads/2023/10/pd_mimecast_logo-1024x298.png" },
  { name: "Hewlett Packard", logo: "https://www.infosys.com/content/dam/infosys-web/en/about/images/hpe-logo.jpg",size: "large" },
  { name: "VMware", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/vmware_1.png",size: "large" },
  { name: "Dell Technologies", logo: "https://www.boardinfinity.com/blog/content/images/2025/02/Company-Blog-Creatives----2025-02-25T180208.318.png",size: "large" },
  { name: "Microsoft", logo: "https://image.pitchbook.com/m3KpejK5fM5YbfW4TlFQw4MgQHh1707480684076_200x200",size: "large" },
  { name: "Palo Alto Networks", logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png?imwidth=480",size: "large" },
  { name: "Acronis", logo: "https://www.codelattice.com/assets/img/acronis/acronis-og.jpg" },
  { name: "SonicWall", logo: "https://www.advantage.tech/wp-content/uploads/2023/07/Sonicwall-Brand-Logo.png",size: "large" },
  { name: "3CX", logo: "https://www.commend.com/cMedia/temp/0/3/csm_logo-3cx-300x200_fd79e9f581.png",size: "large" },
  { name: "Huawei", logo: "https://media.business-humanrights.org/media/images/Huawei-Logo.2e16d0ba.fill-1200x630.png",size: "large" },
  { name: "Cisco", logo: "https://i0.wp.com/martinexsa.com/wp-content/uploads/2017/09/Cisco-logo.png?fit=271%2C190&ssl=1",size: "large" },
  { name: "Nutanix", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/nutanix_logo.png",size: "large" },
  { name: "ESET", logo: "https://interworks.com/wp-content/uploads/2017/09/ESET-Logo_Web_Transparent.png",size: "large" },
  { name: "Kaspersky", logo: "https://assets.dealmela.com/stores/kaspersky.png",size: "large" },
  { name: "F5", logo: "https://www.bdata.com.hk/uploads/f5.png" },
  { name: "Microsoft Azure", logo: "https://miro.medium.com/v2/resize:fit:1200/1*nzsbJWmPOvKI9yeBGHe2uA.png",size: "large" },
  { name: "Ivanti", logo: "https://www.nutanix.com/partners/technology-alliances/ivanti/_jcr_content/root/container/componentContainer/container_mosaic_685/item0/2mosaic_1/image_copy.coreimg.png/1685443179376/logo-ivanti.png",size: "large" },
];
const VendorScroll = () => (
  <section className="w-full bg-white py-8 overflow-hidden">
    <div className="flex items-center gap-14 whitespace-nowrap animate-vendors px-6 w-max">
      {[...vendors, ...vendors].map((v, i) => (
        <img
  key={i}
  src={v.logo}
  alt={v.name}
  className={`
    object-contain opacity-90
    ${v.size === "large" ? "h-20 sm:h-20 xl:h-24" : "h-10 sm:h-12"}
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
        {/* 🔵 MOBILE BLUE EFFECT */}
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
