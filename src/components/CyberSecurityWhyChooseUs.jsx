import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./hexagon.css";

const data = [
  {
    role: "Ethical Hacking & Penetration Testing",
    text:
      "Proactively identify vulnerabilities through ethical hacking and penetration testing before attackers can exploit them.",
  },
  {
    role: "Cloud, Network & Web Security",
    text:
      "Comprehensive security controls to protect cloud environments, enterprise networks, and web applications from modern threats.",
  },
  {
    role: "Threat Detection & SIEM",
    text:
      "Advanced SIEM, PAM, NDR, and DMARC implementations to monitor, detect, and respond to threats in real time.",
  },
  {
    role: "Data Protection & Privacy",
    text:
      "Robust data leak prevention initiatives and privacy controls to safeguard sensitive business and customer data.",
  },
  {
    role: "Security Awareness & Training",
    text:
      "Employee security training programs that strengthen human resilience against phishing, social engineering, and insider threats.",
  },
];



export default function CyberSecurityWhyChooseUs() {
  const [index, setIndex] = useState(0);
  const nextIndex = (index + 1) % data.length;

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

         <h2 className="text-4xl md:text-5xl font-bold text-black text-center tracking-tight mb-6">
  Choose the Best <span className="font-extrabold">Cyber Security Solutions</span>
</h2>

<p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
  Comprehensive security services designed to protect your business from
  modern cyber threats while reducing long-term risk and maintenance costs.
</p>


        <div className="relative flex items-center justify-center">

          {/* 🔹 OUTSIDE BLUR SENTENCE (RIGHT SIDE) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`outside-${nextIndex}`}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="
               hidden md:block

                 absolute
  left-[calc(50%+220px)]
  w-[360px]
  blur-[2px]     /* less blur = more readable */
  opacity-80   /* more visible */
  text-gray-800
  pointer-events-none
              "
            >
              {data[nextIndex].text}
            </motion.div>
          </AnimatePresence>

          {/* 🔹 OCTAGON */}
          <motion.div
            key={index}
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="octagon-frame z-10"
          >
            <div className="octagon-border">
              <div className="octagon-inner">

                {/* NAV */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">

                  {/* LEFT ARROW */}
                  <button
                    onClick={() => setIndex(i => (i === 0 ? data.length - 1 : i - 1))}
                    className="
      w-7 h-7
      rounded-full
      border border-gray-300
      flex items-center justify-center
      text-gray-600
      hover:border-gray-600
      hover:text-gray-800
      transition
    "
                  >
                    <span className="leading-none">←</span>
                  </button>

                  {/* DOTS */}
                  {data.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"
                        }`}
                    />
                  ))}

                  {/* RIGHT ARROW */}
                  <button
                    onClick={() => setIndex(nextIndex)}
                    className="
      w-7 h-7
      rounded-full
      border border-gray-300
      flex items-center justify-center
      text-gray-600
      hover:border-gray-600
      hover:text-gray-800
      transition
    "
                  >
                    <span className="leading-none">→</span>
                  </button>

                </div>

                {/* 🔹 INSIDE TEXT */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`inside-${index}`}
                    initial={{ x: 120, opacity: 0, filter: "blur(12px)" }}
                    animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ x: -60, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center"
                  >
                    <span className="mb-4 px-4 py-1 rounded bg-gray-100 text-sm">
                      {data[index].role}
                    </span>
                    <p className="text-gray-800 leading-relaxed">
                      {data[index].text}
                    </p>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
