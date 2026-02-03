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
import QuotePage from '../components/QuotePage'
import Connect from '../components/Connect'
import IndustriesPlatformSection from '../components/IndustriesPlatformSection'









function Home({openContact}) {
  return (
    <>
     <Header openContact={openContact} />
      <Hero />
      <GlowSection />
      <WhyChooseUs />
      <QuotePage />
      <section className="relative z-20 pointer-events-auto -mt-30 w-full">
        <LayoutGridDemo />
      </section>
      <IndustriesPlatformSection/>


      
      
      <TrustedSection/>
<Connect/>


     
      <LogoScroll />
     <Footer openContact={openContact} />
    </>
  )
}

export default Home