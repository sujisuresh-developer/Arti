

// const vendors = [
//   { name: "Sophos", logo: "https://interworks.com/wp-content/uploads/2017/09/Sophos-ATC-LogoSQ.png" },
//   { name: "Fortinet", logo: "https://www.proofpoint.com/sites/default/files/pr/Proofpoint-logo-reg-K.jpg" },
//   { name: "Check Point", logo: "https://www.eplus.com/images/default-source/authors/check-point-2024-logo-color.png?sfvrsn=69ac24b1_1" },
//   { name: "Aruba", logo: "https://interworks.com/wp-content/uploads/2017/09/Aruba.png" },
//   { name: "Veeam", logo: "https://securityaffairs.com/wp-content/uploads/2023/03/veeam-software-vector-logo.png" },
//   { name: "Trend Micro", logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Trend_Micro_Logo_2023.png" },
//   { name: "Proofpoint", logo: "https://www.proofpoint.com/sites/default/files/pr/Proofpoint-logo-reg-K.jpg" },
//   { name: "Mimecast", logo: "https://cybercompare.com/wp-content/uploads/2023/10/pd_mimecast_logo-1024x298.png" },
//   { name: "Hewlett Packard", logo: "https://www.infosys.com/content/dam/infosys-web/en/about/images/hpe-logo.jpg" },
//   { name: "VMware", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/vmware_1.png" },
//   { name: "Dell Technologies", logo: "https://www.boardinfinity.com/blog/content/images/2025/02/Company-Blog-Creatives----2025-02-25T180208.318.png" },
//   { name: "Microsoft", logo: "https://image.pitchbook.com/m3KpejK5fM5YbfW4TlFQw4MgQHh1707480684076_200x200" },
//   { name: "Palo Alto Networks", logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png?imwidth=480" },
//   { name: "Acronis", logo: "https://www.codelattice.com/assets/img/acronis/acronis-og.jpg" },
//   { name: "SonicWall", logo: "https://www.advantage.tech/wp-content/uploads/2023/07/Sonicwall-Brand-Logo.png" },
//   { name: "3CX", logo: "https://www.commend.com/cMedia/temp/0/3/csm_logo-3cx-300x200_fd79e9f581.png" },
//   { name: "Huawei", logo: "https://media.business-humanrights.org/media/images/Huawei-Logo.2e16d0ba.fill-1200x630.png" },
//   { name: "Cisco", logo: "https://i0.wp.com/martinexsa.com/wp-content/uploads/2017/09/Cisco-logo.png?fit=271%2C190&ssl=1" },
//   { name: "Nutanix", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/nutanix_logo.png" },
//   { name: "ESET", logo: "https://interworks.com/wp-content/uploads/2017/09/ESET-Logo_Web_Transparent.png" },
//   { name: "Kaspersky", logo: "https://assets.dealmela.com/stores/kaspersky.png" },
//   { name: "F5", logo: "https://www.bdata.com.hk/uploads/f5.png" },
//   { name: "Microsoft Azure", logo: "https://miro.medium.com/v2/resize:fit:1200/1*nzsbJWmPOvKI9yeBGHe2uA.png" },
//   { name: "Ivanti", logo: "https://www.nutanix.com/partners/technology-alliances/ivanti/_jcr_content/root/container/componentContainer/container_mosaic_685/item0/2mosaic_1/image_copy.coreimg.png/1685443179376/logo-ivanti.png" },
// ];



// import LaserFlow from "./LaserFlow";

// const vendors = [
//   { name: "Sophos", logo: "https://interworks.com/wp-content/uploads/2017/09/Sophos-ATC-LogoSQ.png" },
//   { name: "Fortinet", logo: "https://www.proofpoint.com/sites/default/files/pr/Proofpoint-logo-reg-K.jpg" },
//   { name: "Check Point", logo: "https://www.eplus.com/images/default-source/authors/check-point-2024-logo-color.png" },
//   { name: "Aruba", logo: "https://interworks.com/wp-content/uploads/2017/09/Aruba.png" },
//   { name: "Veeam", logo: "https://securityaffairs.com/wp-content/uploads/2023/03/veeam-software-vector-logo.png" },
// ];

// const VendorScroll = () => (
//   <div className="relative w-full overflow-hidden">
//     <div className="flex items-center gap-10 whitespace-nowrap animate-vendors px-6 sm:px-10">
//       {[...vendors, ...vendors].map((v, i) => (
//         <img
//           key={i}
//           src={v.logo}
//           alt={v.name}
//           className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain opacity-90"
//         />
//       ))}
//     </div>
//   </div>
// );

// const Hero = () => {
//   return (
//     <section
//       className="
//         relative bg-black overflow-hidden
        
//       min-h-[100vh] sm:min-h-[105vh] lg:min-h-[115vh]
//         flex flex-col
//       "
//     >
//       {/* ===== LASER FLOW ===== */}
//       <div className="absolute inset-0 z-0">
//         <LaserFlow
//           horizontalBeamOffset={0.25}
//           verticalBeamOffset={-0.28}
//           color="#566feb"
//           horizontalSizing={0.6}
//           verticalSizing={2.4}
//           wispDensity={1}
//           wispSpeed={15}
//           wispIntensity={5}
//           flowSpeed={0.35}
//           flowStrength={0.25}
//           fogIntensity={0.5}
//           fogScale={0.35}
//           fogFallSpeed={0.6}
//           decay={1.1}
//           falloffStart={1.15}
//         />
//       </div>

//       {/* ===== DARK OVERLAY ===== */}
//       <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/70 to-transparent" />

//       {/* ===== HERO TEXT ===== */}
//       <div
//         className="
//           relative z-10
//           max-w-7xl
//           px-6 sm:px-8 lg:px-24
//           pt-[120px] sm:pt-[130px] lg:pt-[140px]
//           w-full text-left
//         "
//       >
//         <h1 className="text-white font-bold leading-none text-[40px] sm:text-[56px] lg:text-[96px]">
//           Innovate.
//           <br />
//           Secure.
//           <br />
//           Transform.
//         </h1>

//         <p className="mt-6 text-gray-400 max-w-lg text-sm sm:text-base lg:text-lg">
//           Powering businesses with secure, scalable, and reliable technology foundations.
//         </p>
//       </div>

//       {/* ===== WHITE ARC + BEAM LANDING ===== */}
//       <div className="relative z-20 w-full flex justify-center mt-16 sm:mt-24 lg:mt-0">

//         <div
//           className="
//             relative bg-white
//             w-[92%]
//             sm:w-[80%]
//             md:w-[70%]
//             lg:w-[46%]
//             max-w-[920px]
//             rounded-t-[32px] sm:rounded-t-[40px]
//             pt-5 sm:pt-12
//             pb-8 sm:pb-10
//             shadow-[0_-40px_120px_rgba(86,111,235,0.35)]
//             sm:translate-x-2
//             md:translate-x-6
//             lg:translate-x-80
//           "
//         >
//           {/* BEAM GLOW ANCHOR */}
//           <div
//             className="
//               absolute -top-14 sm:-top-16
//               left-1/2 -translate-x-1/2
//               w-[260px] sm:w-[360px] lg:w-[420px]
//               h-[120px] sm:h-[160px] lg:h-[180px]
//               pointer-events-none
//               bg-[radial-gradient(circle,rgba(86,111,235,0.9)_0%,rgba(86,111,235,0.4)_35%,transparent_70%)]
//               blur-[60px] sm:blur-[70px]
//             "
//           />

//           <VendorScroll />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

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

const VendorScroll = () => (
  <div className="relative w-full overflow-hidden bg-white py-6">
    <div className="flex items-center gap-10 whitespace-nowrap animate-vendors px-6">
      {[...vendors, ...vendors].map((v, i) => (
        <img
          key={i}
          src={v.logo}
          alt={v.name}
          className="h-15 sm:h-15 object-contain opacity-90"
        />
      ))}
    </div>
  </div>
);

const Hero = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="
          relative bg-black overflow-hidden
          min-h-[85vh] sm:min-h-[95vh] lg:min-h-[115vh]
          flex flex-col
        "
      >
        {/* ===== LASER FLOW ===== */}
         <div className="absolute inset-0 z-0">
      <LaserFlow
          horizontalBeamOffset={0.25}
          verticalBeamOffset={-0.24}
          color="#566feb"
          horizontalSizing={0.6}
          verticalSizing={2.4}
          wispDensity={1}
          wispSpeed={15}
          wispIntensity={5}
          flowSpeed={0.35}
          flowStrength={0.25}
          fogIntensity={0.5}
          fogScale={0.35}
          fogFallSpeed={0.6}
          decay={1.1}
          falloffStart={1.15}
        />
      </div> 

      

        {/* ===== RIGHT-SIDE GLOW (BOTTOM → TOP) ===== */}
        <div
          className="
            absolute right-0 top-0 h-full w-[45%]
            bg-[radial-gradient(circle_at_right,rgba(86,111,235,0.9)_0%,rgba(86,111,235,0.4)_35%,transparent_70%)]
            blur-[90px]
            z-[1]
            pointer-events-none
          "
        />

        {/* ===== DARK OVERLAY ===== */}
        <div className="absolute inset-0 z-[1] bg-black/60" />

        {/* ===== HERO CONTENT ===== */}
        <div
          className="
            relative z-10
            max-w-7xl w-full
            px-6 lg:px-24
            pt-[110px] sm:pt-[130px]
            text-left
          "
        >
          <h1 className="text-white font-bold leading-none text-[40px] sm:text-[64px] lg:text-[96px]">
            Innovate.
            <br />
            Secure.
            <br />
            Transform.
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg text-sm sm:text-lg">
            Powering businesses with secure, scalable, and reliable technology foundations.
          </p>
        </div>

        {/* ===== DESKTOP WHITE ARC (UNCHANGED) ===== */}
        <div className="hidden lg:flex relative z-20 w-full justify-center mt-auto">
          <div
            className="
              relative bg-white
              w-[46%] max-w-[920px]
              rounded-t-[40px]
              pt-12 pb-10
              shadow-[0_-40px_120px_rgba(86,111,235,0.35)]
              translate-x-80
            "
          >
            <VendorScroll />
          </div>
        </div>
      </section>

      {/* ================= MOBILE VENDORS (AFTER HERO) ================= */}
      <div className="block lg:hidden">
        <VendorScroll />
      </div>
    </>
  );
};

export default Hero;



