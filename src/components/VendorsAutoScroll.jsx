"use client";


const vendors = [
  { name: "Sophos", logo: "https://thewealthmosaic.s3.amazonaws.com/media/Logo_Sophos.png" },
  { name: "Fortinet", logo: "https://www.proofpoint.com/sites/default/files/pr/Proofpoint-logo-reg-K.jpg" },
  { name: "Check Point", logo: "https://www.eplus.com/images/default-source/authors/check-point-2024-logo-color.png?sfvrsn=69ac24b1_1" },
  { name: "Aruba", logo: "https://interworks.com/wp-content/uploads/2017/09/Aruba.png" },
  { name: "Veeam", logo: "https://securityaffairs.com/wp-content/uploads/2023/03/veeam-software-vector-logo.png" },
  { name: "Trend Micro", logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Trend_Micro_Logo_2023.png" },
  { name: "Mimecast", logo: "https://cybercompare.com/wp-content/uploads/2023/10/pd_mimecast_logo-1024x298.png" },
  { name: "Hewlett Packard", logo: "https://www.infosys.com/content/dam/infosys-web/en/about/images/hpe-logo.jpg" },
  { name: "VMware", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/vmware_1.png" },
  { name: "Dell Technologies", logo: "https://www.boardinfinity.com/blog/content/images/2025/02/Company-Blog-Creatives----2025-02-25T180208.318.png" },
  { name: "Microsoft", logo: "https://image.pitchbook.com/m3KpejK5fM5YbfW4TlFQw4MgQHh1707480684076_200x200" },
  { name: "Cisco", logo: "https://i0.wp.com/martinexsa.com/wp-content/uploads/2017/09/Cisco-logo.png?fit=271%2C190&ssl=1" },
  { name: "Palo Alto", logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png" },
  { name: "Nutanix", logo: "https://generaltechnologies.co.in/assets/frontend/pages/img/brand_partner/nutanix_logo.png" },
];

const VendorsAutoScroll = () => {
  return (
    <>
      

      <section className="bg-white py-28 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">

          {/* OPTIONAL HEADING */}
          <div className="text-center mb-20 px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
              Technology Partners
            </h1>
            <p className="mt-4 text-gray-600">
              Trusted global vendors powering our solutions
            </p>
          </div>

          {/* AUTO SCROLL */}
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-5 animate-vendorsLarge whitespace-nowrap px-12">

              {[...vendors, ...vendors].map((vendor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[300px]"
                >
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="
                      h-24
                      md:h-28
                      lg:h-32
                      xl:h-36
                      object-contain
                      grayscale
                      hover:grayscale-0
                      transition
                      duration-500
                    "
                  />
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      

      {/* 🔹 SCROLL ANIMATION */}
      <style>{`
        @keyframes vendorsLarge {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-vendorsLarge {
          animation: vendorsLarge 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default VendorsAutoScroll;
