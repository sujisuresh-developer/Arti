import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import { motion } from "framer-motion"
import infra from "../assets/infra.jpg"
import cyber from "../assets/cyber.jpg"
import appli from "../assets/appli.jpg"
import cloud from "../assets/cloud.jpg"
import manage from "../assets/manage.jpg"
import amc from "../assets/amc.jpg"
import FloatingLines from "../components/FloatingLines"
import TextGenerateEffectDemo from "../components/text-generate-effect-demo"
import faq1 from "../assets/faq1.jpg"
import faq2 from "../assets/faq2.png"
import faq3 from "../assets/faq3.png"
import faq4 from "../assets/faq4.jpeg"
import faq5 from "../assets/faq5.avif"






const faqData = [
  {
    title: "IT Infrastructure Optimization",
    image: faq1
    ,
    desc: "Optimizing your IT infrastructure is key to ensuring seamless business operations.",
    faqs: [
      { q: "Why is infrastructure optimization important?", a: "It improves performance, enhances security, and minimizes downtime." },
      { q: "Can infrastructure scale with business growth?", a: "Yes, our solutions are designed to grow with your business." }
    ]
  },
  {
    title: "Cyber Security Solutions",
    image: faq2,
    desc: "Cyber threats are constantly evolving—your defense strategy should too.",
    faqs: [
      { q: "How do Cyber Security Solutions protect my business?", a: "By identifying vulnerabilities, monitoring threats in real time, and implementing proactive controls." },
      { q: "Do you provide compliance and audit support?", a: "Yes, we support compliance through structured security frameworks." }
    ]
  },
  {
    title: "Application Security",
    image: faq3,
    desc: "Applications are critical assets but also prime targets for cyber threats.",
    faqs: [
      { q: "How do you secure applications throughout development?", a: "We embed security into the development lifecycle using secure coding, testing, and monitoring." },
      { q: "Can Application Security improve compliance?", a: "Yes, through secure development standards and assessments." }
    ]
  },
  {
    title: "Cloud Solutions",
    image: cloud,
    desc: "The cloud is the future—make the most of it with secure and scalable solutions.",
    faqs: [
      { q: "Do you support cloud migration?", a: "Yes, with complete migration and optimization services." },
      { q: "How does cloud improve scalability?", a: "Resources scale on demand with better cost control." }
    ]
  },
  {
    title: "Managed Services",
    image: faq4,
    desc: "Expert guidance is essential for strategic growth and IT stability.",
    faqs: [
      { q: "How do Managed Services help growth?", a: "Through continuous IT oversight, planning, and expert support." },
      { q: "Can Managed Services reduce costs?", a: "Yes, by improving efficiency and reducing downtime." }
    ]
  },
  {
    title: "AMC Services",
    image: faq5,
    desc: "Comprehensive IT support and maintenance to ensure business continuity.",
    faqs: [
      { q: "What does AMC include?", a: "Monitoring, maintenance, updates, and disaster recovery." },
      { q: "How does AMC improve continuity?", a: "By preventing failures and ensuring rapid response." }
    ]
  }
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <>
      <Header />

      {/* HERO */}
     
       
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
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
               
              
                      {/* CONTENT */}
                      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center -mt-15">
                        <h1 className="text-white font-extrabold leading-tight max-w-4xl
                          text-3xl
                          sm:text-4xl
                          md:text-5xl
                          lg:text-6xl
                          xl:text-7xl
                          2xl:text-8xl"
                        >
                          <TextGenerateEffectDemo
                            words=" Frequently Asked Questions."
                          />
                        </h1>
                        </div>
                        
              
              
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-28 overflow-hidden bg-[#F2F7FF]">

        {/* EMOJI BACKGROUND */}
       

        {/* WHITE SOFT OVERLAY */}
        {/* <div className="absolute inset-0  backdrop-blur-[1px]" /> */}

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-28">

          {faqData.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.9 }}
              className="grid lg:grid-cols-2 gap-14 items-start"
            >

              {/* IMAGE */}
    <div className="group rounded-2xl overflow-hidden shadow-xl">
  <img
    src={section.image}
    alt={section.title}
    className="
      w-full h-[320px] object-cover
      transition-transform duration-700 ease-out
      group-hover:scale-110
    "
  />
</div>



              {/* TEXT */}
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {section.desc}
                </p>

                {/* ACCORDION */}
                <div className="space-y-4">
                  {section.faqs.map((item, idx) => {
                    const key = `${i}-${idx}`
                    return (
                      <motion.div
                        key={key}
                        layout
                        className="border rounded-xl overflow-hidden bg-white shadow-sm"
                      >
                        <button
                          onClick={() => setOpen(open === key ? null : key)}
                          className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left hover:bg-blue-50 transition"
                        >
                          {item.q}
                          <span className="text-blue-600 text-xl">
                            {open === key ? "−" : "+"}
                          </span>
                        </button>

                        {open === key && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 py-4 text-gray-600 bg-blue-50"
                          >
                            {item.a}
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  )
}

export default FAQ
