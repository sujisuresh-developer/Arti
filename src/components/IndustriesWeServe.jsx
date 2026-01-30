import {
  Zap,
  Building2,
  Heart,
  TrendingUp
} from "lucide-react";

const industries = [
  {
    title: "Energy & Utilities",
    desc: "Smart grid management and secure operational technology infrastructure for energy providers.",
    image: "https://images.unsplash.com/photo-1758797899821-46e9aa667409?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVuZXJneSUyMHNtb2tlfGVufDB8fDB8fHww",

    icon: Zap,
  },
  {
    title: "Financial Services",
    desc: "Compliance-ready infrastructure and advanced security for banking and fintech operations.",
    image: "https://plus.unsplash.com/premium_photo-1673208585690-fe33159386bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jaWFsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    icon: Building2,
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant systems ensuring patient data security and seamless healthcare delivery.",
    image: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    icon: Heart,
  },
  {
    title: "Enterprise & SaaS",
    desc: "Scalable cloud architecture and DevOps for high-growth technology companies.",
    image: "https://media.istockphoto.com/id/1302546439/photo/cloud-computing-data-center-server-rack-connection-in-neural-network-technology.jpg?s=612x612&w=0&k=20&c=o3kHvcMgztxboP0yQ_yY2AKeWzNXJi60jBG6dpE6_JA=",
    icon: TrendingUp,
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Industries We Serve
          </h2>
          <p className="mt-4 text-gray-600">
            Deep expertise across critical sectors, delivering industry-specific
            solutions that meet regulatory and operational demands.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Image */}
              <div className="relative h-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
                  <item.icon className="text-[#1E5BFF]" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;
