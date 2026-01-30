import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
// import ClarityCTA from '../components/ClarityCTA'
import LogoScroll from '../components/LogoScroll'
import WhyChooseUs from '../components/WhyChooseUs'
// import ArtiflexComparison from '../components/ArtiflexComparison'
// import Services from '../components/Services'
import CoreSolutions from '../components/CoreSolutions'
import IndustriesWeServe from '../components/IndustriesWeServe'
import LayoutGridDemo from '../components/layout-grid-demo'
import InfiniteMovingCardsDemo from '../components/Infinite-moving-cards-demo'







function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <section className="relative z-20 pointer-events-auto">
        <LayoutGridDemo />
      </section>
  
    <CoreSolutions/>
    <WhyChooseUs/>
    <IndustriesWeServe/>
    
   
    <InfiniteMovingCardsDemo/>
     <LogoScroll/>
    <Footer/>
    </>
  )
}

export default Home