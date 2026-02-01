import LaserFlow from "./LaserFlow";

const vendors = [
  { name: "Sophos", logo: "https://interworks.com/wp-content/uploads/2017/09/Sophos-ATC-LogoSQ.png" },
  { name: "Fortinet", logo: "https://www.proofpoint.com/sites/default/files/pr/Proofpoint-logo-reg-K.jpg" },
  { name: "Check Point", logo: "https://www.eplus.com/images/default-source/authors/check-point-2024-logo-color.png?sfvrsn=69ac24b1_1" },
  { name: "Aruba", logo: "https://interworks.com/wp-content/uploads/2017/09/Aruba.png" },
  { name: "Veeam", logo: "https://securityaffairs.com/wp-content/uploads/2023/03/veeam-software-vector-logo.png" },
  { name: "Trend Micro", logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Trend_Micro_Logo_2023.png" },
  { name: "Proofpoint", logo: "https://www.proofpoint.com/sites/default/files/pr/Proofpoint-logo-reg-K.jpg" },
  { name: "Mimecast", logo: "https://cybercompare.com/wp-content/uploads/2023/10/pd_mimecast_logo-1024x298.png" },
  { name: "Hewlett Packard", logo: "https://www.infosys.com/content/dam/infosys-web/en/about/images/hpe-logo.jpg" },
  { name: "VMware", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/vmware_1.png" },
  { name: "Dell Technologies", logo: "https://www.boardinfinity.com/blog/content/images/2025/02/Company-Blog-Creatives----2025-02-25T180208.318.png" },
  { name: "Microsoft", logo: "https://image.pitchbook.com/m3KpejK5fM5YbfW4TlFQw4MgQHh1707480684076_200x200" },
  { name: "Palo Alto Networks", logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png?imwidth=480" },
  { name: "Acronis", logo: "https://www.codelattice.com/assets/img/acronis/acronis-og.jpg" },
  { name: "SonicWall", logo: "https://www.advantage.tech/wp-content/uploads/2023/07/Sonicwall-Brand-Logo.png" },
  { name: "3CX", logo: "https://www.commend.com/cMedia/temp/0/3/csm_logo-3cx-300x200_fd79e9f581.png" },
  { name: "Huawei", logo: "https://media.business-humanrights.org/media/images/Huawei-Logo.2e16d0ba.fill-1200x630.png" },
  { name: "Cisco", logo: "https://i0.wp.com/martinexsa.com/wp-content/uploads/2017/09/Cisco-logo.png?fit=271%2C190&ssl=1" },
  { name: "Nutanix", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/nutanix_logo.png" },
  { name: "ESET", logo: "https://interworks.com/wp-content/uploads/2017/09/ESET-Logo_Web_Transparent.png" },
  { name: "Kaspersky", logo: "https://assets.dealmela.com/stores/kaspersky.png" },
  { name: "F5", logo: "https://www.bdata.com.hk/uploads/f5.png" },
  { name: "Microsoft Azure", logo: "https://miro.medium.com/v2/resize:fit:1200/1*nzsbJWmPOvKI9yeBGHe2uA.png" },
  { name: "Ivanti", logo: "https://www.nutanix.com/partners/technology-alliances/ivanti/_jcr_content/root/container/componentContainer/container_mosaic_685/item0/2mosaic_1/image_copy.coreimg.png/1685443179376/logo-ivanti.png" },
];

const VendorScroll = ({ className = "" }) => (
  <div className={`relative w-full overflow-hidden ${className}`}>
    <div className="flex items-center gap-8 whitespace-nowrap animate-vendors">
      {[...vendors, ...vendors].map((v, i) => (
        <img
          key={i}
          src={v.logo}
          alt={v.name}
          className="h-12 sm:h-14 md:h-16 lg:h-20 min-w-[100px] object-contain"
        />
      ))}
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative bg-black overflow-hidden h-screen flex flex-col justify-between">

      {/* LASER FLOW BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <LaserFlow
          horizontalBeamOffset={0.25}
          verticalBeamOffset={-0.3}
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

      {/* GLOW */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] z-[5] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom, rgba(86,111,235,0.9) 0%, rgba(86,111,235,0.4) 30%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* HERO CONTENT */}
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

      {/* 📱 MOBILE VENDORS (BELOW HERO) */}
      <div className="block lg:hidden px-6 mt-10">
        <VendorScroll />
      </div>

      {/* 🖥 DESKTOP WHITE ARC + VENDORS (UNCHANGED) */}
      <div className="hidden lg:flex relative z-20 w-full justify-center items-end -mt-15">
        <div className="relative bg-white w-[40%] max-w-[900px] h-100 px-20 flex items-center justify-around rounded-t-[50px] ms-165">
          <div className="relative w-full h-full overflow-hidden flex items-center -mt-60">
            <VendorScroll />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
