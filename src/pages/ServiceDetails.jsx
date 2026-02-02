import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "../components/Header"
import logo from "../assets/final.png"
import Footer from "../components/Footer"
import FloatingLines from "../components/FloatingLines"
import VendorsAutoScroll from "../components/VendorsAutoScroll"
import TextGenerateEffectDemo from "../components/text-generate-effect-demo"

gsap.registerPlugin(ScrollTrigger)

const serviceGroups = [
  {
    items: [
      "Dedicated Server",
      "Hosting",
      "Telecom Infrastructure Solutions",
      "Cloud Computing Services",
    ],
  },
  {
    items: [
      "DDoS Attacks Testing",
      "Website Hacking Testing",
      "Wireless Network Penetration Testing",
      "Social Engineering",
    ],
  },
  {
    items: [
      "Cybersecurity",
      "Vulnerability Assessment",
      "Compliance Assistance",
      "Penetration Testing",
    ],
  },
  {
    items: [
      "IAAS",
      "PAAS",
      "SAAS",
      "Virtual Private Servers",
      "Managed IT Infrastructure",
      "SOC",
    ],
  },
  {
    items: [
      "Managed Cloud Service",
      "Managed Email Security",
      "Managed Services Network & Security",
      "IT Maintenance",
      "24/7 Remote & On-Site Support",
      "Security & Compliance Management",
      "Backup & Disaster Recovery Solutions",
    ],
  },
]

const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sd-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".sd-left", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        stagger: 0.15,
        ease: "power3.out",
      })

      gsap.fromTo(
        ".sd-pill",
        { opacity: 0 },
        { opacity: 1, duration: 1.8, delay: 1, ease: "power2.out" }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[100vh] bg-[#020617] overflow-hidden flex items-center justify-center">

        {/* FLOATING LINES BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <FloatingLines
            linesGradient={["#4f6cff", "#2F4BC0", "#0008fa"]}
            animationSpeed={1}
            interactive
            bendRadius={5}
            bendStrength={-0.5}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/80 z-10" />

        {/* HERO CONTENT */}
        <div className="relative z-20 px-6 text-center">
          {/* <h1 className="text-white font-bold leading-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Our Services
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300
            text-sm sm:text-base">
            Enterprise-grade infrastructure, cloud, cybersecurity, and managed
            services built to scale securely.
          </p> */}
           <h1
                      className="text-white font-bold leading-tight max-w-4xl
                        text-3xl
                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl
                        xl:text-7xl"
                    >
                      <TextGenerateEffectDemo
                        words=" Our Services."
                      />
                    </h1>
          
                    {/* SUBTITLE */}
                     <p className="mt-6 max-w-3xl mx-auto text-gray-300
            text-sm sm:text-base">
                     Enterprise-grade infrastructure, cloud, cybersecurity, and managed
            services built to scale securely.
          
                    </p>
        </div>

        {/* BOTTOM FADE */}
        
        
      </section>

      {/* ================= EXISTING SERVICES SECTION (UNCHANGED) ================= */}
      <section
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-[#fdfdfd] via-blue-50 to-[#fdfdfd]"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">

         

          <div className="grid md:grid-cols-3 gap-16">

            <div className="md:col-span-1 space-y-8 ms-8">
             

              <img
                src={logo}
                alt="Artiflex IT"
                className="h-40 mx-auto w-60"
              />
            </div>

            <div className="md:col-span-2 space-y-12 sd-pills">
              {serviceGroups.map((group, index) => (
                <div key={index} className="border-t pt-8">
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="sd-pill px-4 py-2 rounded-full border text-sm font-semibold
                          text-black bg-[#fdfdfd] cursor-pointer transition
                          hover:-translate-y-1 hover:shadow-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <VendorsAutoScroll/>

      <Footer />
    </>
  )
}

export default ServiceDetails
