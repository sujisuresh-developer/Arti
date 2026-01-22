import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ClarityCTA from '../components/ClarityCTA'
import LogoScroll from '../components/LogoScroll'
import WhyChooseUs from '../components/WhyChooseUs'
import ArtiflexComparison from '../components/ArtiflexComparison'
import Services from '../components/Services'

function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <ClarityCTA/>
    <LogoScroll/>
    <ArtiflexComparison/>
    <Services/>
    <WhyChooseUs/>
    <Footer/>
    </>
  )
}

export default Home