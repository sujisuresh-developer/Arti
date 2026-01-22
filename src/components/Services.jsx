import { motion } from "framer-motion"

import infra from "../assets/infra.jpg"
import cyber from "../assets/cyber.jpg"
import appli from "../assets/appli.jpg"
import cloud from "../assets/cloud.jpg"
import manage from "../assets/manage.jpg"
import amc from "../assets/amc.jpg"

const services = [
    {
        title: "Managed Security Services",
        desc: "Ensure continuous operations with proactive monitoring and expert support.",
        image: manage,
    },
    {
        title: "Cloud Security Services",
        desc: "Accelerate growth with secure, scalable, and optimized cloud platforms.",
        image: cloud,
    },
    {
        title: "Infrastructure Solutions",
        desc: "Build a resilient, high-performance IT foundation that ensures uptime and scalability.",
        image: infra,
    },
    {
        title: "Application services",
        desc: "Secure applications against vulnerabilities across the entire SDLC.",
        image: appli,
    },
    {
        title: "Cyber Security",
        desc: "Protect systems, networks, and data with advanced cyber defense strategies.",
        image: cyber,
    },
    {
        title: "AMC Services",
        desc: "Prevent downtime with reliable annual maintenance and IT support services.",
        image: amc,
    },
]

/* ✅ SAME HEIGHT FOR ALL CARDS */
const Card = ({ title, desc, image }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="
      relative rounded-3xl border border-neutral-200 h-full
      bg-white/80 backdrop-blur-sm
      overflow-hidden
      transition-all duration-300
      min-h-[420px]
      group
    "
    >
        {/* 🔹 IMAGE ON HOVER */}
        <div
            className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-500
      "
        >
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-white/70" />
        </div>

        {/* 🔹 CONTENT */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                    {desc}
                </p>
            </div>

            <span className="self-end text-blue-600 text-xl">→</span>
        </div>
    </motion.div>
)

const Services = () => {
    return (

        <section className="py-28 relative overflow-hidden bg-transparent">


            {/* 🔵 BLUE ELLIPSE BACKGROUND */}
            <div className="absolute inset-0 -z-10 pointer-events-none">

                <div className="
    absolute top-1/2 -left-[35%]
    w-[900px] h-[420px]
    bg-blue-600
    opacity-60
    blur-[80px]
    rounded-full
    -translate-y-1/2
  " />

                <div className="
    absolute top-1/2 -right-[35%]
    w-[900px] h-[420px]
    bg-blue-600
    opacity-60
    blur-[80px]
    rounded-full
    -translate-y-1/2
  " />

            </div>


            <div className="max-w-7xl mx-auto px-6">

                {/* 🔹 TOP SECTION */}
                <div className="grid lg:grid-cols-3">

                    {/* LEFT TEXT */}
                    <div className="lg:col-span-1 flex flex-col justify-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
                            Our <span className="font-semibold">Services</span>
                        </h2>

                        <p className="text-neutral-600 max-w-md">
                            Comprehensive IT and cybersecurity services designed to secure,
                            optimize, and scale your business with confidence.
                        </p>
                    </div>

                    {/* RIGHT TWO BOXES */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2">
                        <Card {...services[0]} />
                        <Card {...services[1]} />
                    </div>
                </div>

                {/* 🔹 BOTTOM GRID */}
                <div className="grid">

                    {/* ROW 1 */}
                    <div className="grid lg:grid-cols-3">
                        <Card {...services[2]} />
                        <Card {...services[4]} />
                        <Card {...services[5]} />
                    </div>

                    {/* ROW 2 */}
                    <div className="grid lg:grid-cols-3">
                        <Card {...services[3]} />
                        <div />
                        <div />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services
