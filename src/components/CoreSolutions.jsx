import {
    Server,
    Shield,
    Lock,
    Cloud,
    Settings,
    Headphones
} from "lucide-react";

const services = [
    {
        icon: Server,
        title: "Infrastructure Solutions",
        desc: "Build robust, scalable network architectures that power your enterprise operations with reliability.",
    },
    {
        icon: Shield,
        title: "Cyber Security Solutions",
        desc: "Comprehensive threat protection, monitoring, and incident response to safeguard your business.",
    },
    {
        icon: Lock,
        title: "Application Security",
        desc: "End-to-end security for your applications, from development to deployment and beyond.",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        desc: "Seamless cloud migration, optimization, and management across IaaS, PaaS, SaaS, and VPS platforms.",
    },
    {
        icon: Settings,
        title: "AMC Services",
        desc: "Proactive annual maintenance contracts ensuring your IT systems run smoothly year-round.",
    },
    {
        icon: Headphones,
        title: "Managed Services",
        desc: "24/7 IT support and optimization so you can focus on growing your core business.",
    },
];

const CoreSolutions = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Core IT Solutions for <br /> Modern Enterprises
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Comprehensive technology services designed to accelerate your digital
                        transformation and secure your infrastructure.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                <item.icon size={24} strokeWidth={2} />
                            </div>

                            {/* Title */}
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CoreSolutions;
