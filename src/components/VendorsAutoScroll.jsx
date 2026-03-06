// "use client";


// const vendors = [
//   { name: "Sophos", logo: "https://thewealthmosaic.s3.amazonaws.com/media/Logo_Sophos.png" },
//   { name: "Fortinet", logo: "https://www.proofpoint.com/sites/default/files/pr/Proofpoint-logo-reg-K.jpg" },
//   { name: "Check Point", logo: "https://www.eplus.com/images/default-source/authors/check-point-2024-logo-color.png?sfvrsn=69ac24b1_1" },
//   { name: "Aruba", logo: "https://interworks.com/wp-content/uploads/2017/09/Aruba.png" },
//   { name: "Veeam", logo: "https://securityaffairs.com/wp-content/uploads/2023/03/veeam-software-vector-logo.png" },
//   { name: "Trend Micro", logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Trend_Micro_Logo_2023.png" },
//   { name: "Mimecast", logo: "https://cybercompare.com/wp-content/uploads/2023/10/pd_mimecast_logo-1024x298.png" },
//   { name: "Hewlett Packard", logo: "https://www.infosys.com/content/dam/infosys-web/en/about/images/hpe-logo.jpg" },
//   { name: "VMware", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/vmware_1.png" },
//   { name: "Dell Technologies", logo: "https://www.boardinfinity.com/blog/content/images/2025/02/Company-Blog-Creatives----2025-02-25T180208.318.png" },
//   { name: "Microsoft", logo: "https://image.pitchbook.com/m3KpejK5fM5YbfW4TlFQw4MgQHh1707480684076_200x200" },
//   { name: "Cisco", logo: "https://i0.wp.com/martinexsa.com/wp-content/uploads/2017/09/Cisco-logo.png?fit=271%2C190&ssl=1" },
//   { name: "Palo Alto", logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png" },
//   { name: "Nutanix", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/nutanix_logo.png" },
// ];

// const VendorsAutoScroll = () => {
//   return (
//     <>
      

//       <section className="bg-white py-28 overflow-hidden">
//         <div className="max-w-[1600px] mx-auto">

//           {/* OPTIONAL HEADING */}
//           <div className="text-center mb-20 px-6">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
//               Technology Partners
//             </h1>
//             <p className="mt-4 text-gray-600">
//               Trusted global vendors powering our solutions
//             </p>
//           </div>

//           {/* AUTO SCROLL */}
//           <div className="relative overflow-hidden">
//             <div className="flex items-center gap-5 animate-vendorsLarge whitespace-nowrap px-12">

//               {[...vendors, ...vendors].map((vendor, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-center min-w-[300px]"
//                 >
//                   <img
//                     src={vendor.logo}
//                     alt={vendor.name}
//                     className="
//                       h-24
//                       md:h-28
//                       lg:h-32
//                       xl:h-36
//                       object-contain
//                       grayscale
//                       hover:grayscale-0
//                       transition
//                       duration-500
//                     "
//                   />
//                 </div>
//               ))}

//             </div>
//           </div>

//         </div>
//       </section>

      

//       {/* 🔹 SCROLL ANIMATION */}
//       <style>{`
//         @keyframes vendorsLarge {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-vendorsLarge {
//           animation: vendorsLarge 20s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default VendorsAutoScroll;
import React from 'react'
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
import kaspersky from "../assets/Resize/kaspersky1.png";
import f5 from "../assets/Resize/f5.png";
import azure from "../assets/Resize/Microsoft_Azure.png";
import ivanti from "../assets/Resize/Ivanti.png";


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

const VendorsAutoScroll = () => (
  <section className="w-full bg-black py-20 overflow-hidden">

    {/* HEADING (UNCHANGED) */}
    <div className="text-center mb-14 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Technology Partners
      </h1>
      <p className="mt-4 text-gray-300">
        Trusted global vendors powering our solutions
      </p>
    </div>

    {/* WHITE LOGO STRIP */}
    <div className="bg-white py-10 overflow-hidden">
      <div className="flex items-center gap-14 whitespace-nowrap animate-vendors px-6 w-max">

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
    </div>

  </section>
);

export default VendorsAutoScroll;



