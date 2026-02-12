import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
// import ClarityCTA from '../components/ClarityCTA'
import LogoScroll from '../components/LogoScroll'
import WhyChooseUs from '../components/WhyChooseUs'
// import ArtiflexComparison from '../components/ArtiflexComparison'
// import Services from '../components/Services'

//import IndustriesWeServe from '../components/IndustriesWeServe'
import LayoutGridDemo from '../components/layout-grid-demo'
//import InfiniteMovingCardsDemo from '../components/Infinite-moving-cards-demo'
import GlowSection from '../components/GlowSection'
//import { FocusCards } from '../components/ui/focus-cards'
import TrustedSection from '../components/TrustedSection'
//import QuotePage from '../components/QuotePage'
//import Connect from '../components/Connect'
import IndustriesPlatformSection from '../components/IndustriesPlatformSection'









function Home({openContact}) {
  return (
    <>
     <Header openContact={openContact} />
      <Hero />
      <GlowSection />
      <WhyChooseUs />
      
      <section className="relative z-20 pointer-events-auto -mt-30 w-full">
        <LayoutGridDemo />
      </section>
      <IndustriesPlatformSection/>


      
      
      <TrustedSection/>
      {/* CTA SECTION */}
<section className="bg-gray-100 py-20">
  <div className="max-w-5xl mx-auto px-6 text-center ">

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
      Choose the right server solution <br />
      for your business
    </h2>

    <a
      href="https://wa.me/919876543210?text=Hello%20I%20am%20interested%20in%20your%20services"

      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-10 px-10 py-4 bg-blue-600 text-white rounded-xl 
                 text-lg font-semibold 
                 hover:bg-blue-800 transition duration-300"
    >
      TALK TO US
    </a>

  </div>
</section>




     
      <LogoScroll />
     <Footer openContact={openContact} />
    </>
  )
}

export default Home