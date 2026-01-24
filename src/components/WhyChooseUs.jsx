// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./hexagon.css";

// const data = [
//   {
//     role: "01",
//     text:
//       "Over 15 Years of Experience in delivering enterprise IT solutions.",
//   },
//   {
//     role: "02",
//     text:
//       "Certified Security Experts and ethical hackers.",
//   },
//   {
//     role: "03",
//     text:
//       "SupportGlobal Reach with presence in multiple countries..",
//   },
//   {
//     role: "04",
//     text:
//       "Customized IT Strategy tailored to your business.",
//   },
//   {
//     role: "05",
//     text:
//       "End to End Project Delivery from design to deployment.",
//   },

// ];

// export default function WhyChooseUs() {
//   const [index, setIndex] = useState(0);
//   const nextIndex = (index + 1) % data.length;

//   return (
//     <section className="py-32 bg-white">
//       <div className="max-w-6xl mx-auto px-6">

//         <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
//           Why <span className="font-semibold">Choose Us</span>
//         </h2>

//         <div className="relative flex items-center justify-center">

//           {/* 🔹 OUTSIDE BLUR SENTENCE (RIGHT SIDE) */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`outside-${nextIndex}`}
//               initial={{ x: 80, opacity: 0 }}
//               animate={{ x: 0, opacity: 0.35 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="
//                  absolute
//   left-[calc(50%+220px)]
//   w-[360px]
//   blur-[2px]     /* less blur = more readable */
//   opacity-80   /* more visible */
//   text-gray-800
//   pointer-events-none
//               "
//             >
//               {data[nextIndex].text}
//             </motion.div>
//           </AnimatePresence>

//           {/* 🔹 OCTAGON */}
//           <motion.div
//             key={index}
//             animate={{ rotate: [0, 5, 0] }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="octagon-frame z-10"
//           >
//             <div className="octagon-border">
//               <div className="octagon-inner">

//                 {/* NAV */}
//                 <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">

//                   {/* LEFT ARROW */}
//                   <button
//                     onClick={() => setIndex(i => (i === 0 ? data.length - 1 : i - 1))}
//                     className="
//       w-7 h-7
//       rounded-full
//       border border-gray-300
//       flex items-center justify-center
//       text-gray-600
//       hover:border-gray-600
//       hover:text-gray-800
//       transition
//     "
//                   >
//                     <span className="leading-none">←</span>
//                   </button>

//                   {/* DOTS */}
//                   {data.map((_, i) => (
//                     <span
//                       key={i}
//                       className={`w-2 h-2 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"
//                         }`}
//                     />
//                   ))}

//                   {/* RIGHT ARROW */}
//                   <button
//                     onClick={() => setIndex(nextIndex)}
//                     className="
//       w-7 h-7
//       rounded-full
//       border border-gray-300
//       flex items-center justify-center
//       text-gray-600
//       hover:border-gray-600
//       hover:text-gray-800
//       transition
//     "
//                   >
//                     <span className="leading-none">→</span>
//                   </button>

//                 </div>

//                 {/* 🔹 INSIDE TEXT */}
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`inside-${index}`}
//                     initial={{ x: 120, opacity: 0, filter: "blur(12px)" }}
//                     animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
//                     exit={{ x: -60, opacity: 0 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center"
//                   >
//                     <span className="mb-4 px-4 py-1 rounded bg-gray-100 text-sm">
//                       {data[index].role}
//                     </span>
//                     <p className="text-gray-800 leading-relaxed">
//                       {data[index].text}
//                     </p>
//                   </motion.div>
//                 </AnimatePresence>

//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";









export default function WhyChooseUs() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <>
     <h1 className="flex justify-center items-center text-4xl font-semibold -mt-10 py-5">
  Why Choose Us
</h1>
    <section className="relative bg-[#f2f1e8] py-20 mb-32">
    

      <div className="max-w-7xl mx-auto px-6">

        {/* STICKY WRAPPER */}
        <div className="sticky top-24 h-[75vh]">

          {/* OUTER FRAME */}
          <div className="relative h-full rounded-3xl overflow-hidden">

            {/* HALFTONE – LEFT SIDE ONLY */}
            <div
              className="
            absolute inset-y-0 left-0 w-[45%]
            bg-[radial-gradient(#00000033_1px,transparent_1px)]
            [background-size:6px_6px]
            opacity-30
            pointer-events-none
          "
            />

            {/* YELLOW PANEL */}
            <div className="relative z-10 h-full bg-blue-300 grid grid-cols-2">

              {/* LEFT – IMAGE + WORD */}
              <div className="relative flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                  alt=""
                />
               
              </div>

              {/* RIGHT – SCROLLING POINTS */}
              <div className="
  relative h-full
  overflow-y-auto
  no-scrollbar
  px-12 py-16
  space-y-24
">


                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    01
                  </h3>
                  <p className="text-lg max-w-md">
                    Over 15 Years of Experience in delivering enterprise IT solutions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    02
                  </h3>
                  <p className="text-lg max-w-md">
                    Certified Security Experts and ethical hackers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    03
                  </h3>
                  <p className="text-lg max-w-md">
                    SupportGlobal Reach with presence in multiple countries.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    04
                  </h3>
                  <p className="text-lg max-w-md">
                    Customized IT Strategy tailored to your business.
                  </p>
                </div>


                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    05
                  </h3>
                  <p className="text-lg max-w-md">
                    End to End Project Delivery from design to deployment.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

</>
  );
}


