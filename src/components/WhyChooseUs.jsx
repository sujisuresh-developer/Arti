import {
  Target,
  Layers,
  Users,
  Award
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Tailored IT Solutions",
    desc: "Custom-built infrastructure and services designed specifically for your business size, industry, and growth objectives.",
  },
  {
    icon: Layers,
    title: "Secure & Scalable Frameworks",
    desc: "Future-ready architecture that grows with your business while maintaining the highest security standards.",
  },
  {
    icon: Users,
    title: "Dedicated Technology Partner",
    desc: "A committed team working as an extension of your organization, understanding your unique challenges.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "500+ successful implementations across global enterprises with 99.9% uptime and client satisfaction.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Artiflex IT
          </h2>
          <p className="mt-4 text-gray-600">
            We're not just another IT provider — we're your strategic technology
            partner committed to your long-term success.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex gap-6"
            >
              {/* Icon */}
              <div className="w-18 h-12 rounded-xl bg-[#1E5BFF] flex items-center justify-center text-white">
                <item.icon size={26} strokeWidth={2} />
              </div>

              {/* Content */}
              <div>
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

export default WhyChooseUs;
