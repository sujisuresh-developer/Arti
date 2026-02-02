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
import { FocusCards } from '../components/ui/focus-cards'
import TrustedSection from '../components/TrustedSection'
import QuotePage from '../components/QuotePage'

import {
  Zap,
  Building2,
  Heart,
  TrendingUp
} from "lucide-react";
import Connect from '../components/Connect'

const industries = [
  {
    title: "Energy & Utilities",
    desc: "Smart grid management and secure operational technology infrastructure for energy providers.",
    image: "https://images.unsplash.com/photo-1758797899821-46e9aa667409?w=600&auto=format&fit=crop&q=60",
    icon: Zap,
  },
  {
    title: "Financial Services",
    desc: "Compliance-ready infrastructure and advanced security for banking and fintech operations.",
    image: "https://plus.unsplash.com/premium_photo-1673208585690-fe33159386bd?w=600&auto=format&fit=crop&q=60",
    icon: Building2,
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant systems ensuring patient data security and seamless healthcare delivery.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    icon: Heart,
  },
  {
    title: "Enterprise & SaaS",
    desc: "Scalable cloud architecture and DevOps for high-growth technology companies.",
    image: "https://media.istockphoto.com/id/1193382680/photo/group-of-successful-real-estate-agents-standing-in-building-in-construction-process-and.jpg?s=612x612&w=0&k=20&c=_wHDLkSWl57reV90aC5t14Sk7ENl51uq09cwOJpfWFE=",
    icon: TrendingUp,
  },
];








function Home({openContact}) {
  return (
    <>
     <Header openContact={openContact} />
      <Hero />
      <GlowSection />
      <WhyChooseUs />
      <QuotePage />
      <section className="relative z-20 pointer-events-auto">
        <LayoutGridDemo />
      </section>


      
      <section className="relative z-30 bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Industries We Serve
            </h2>
            <p className="mt-4 text-gray-600">
              Deep expertise across critical sectors, delivering industry-specific
              solutions that meet regulatory and operational demands.
            </p>
          </div>

          {/* CARDS */}
          <FocusCards cards={industries} />
        </div>
      </section>
      <TrustedSection/>
<Connect/>


     
      <LogoScroll />
     <Footer openContact={openContact} />
    </>
  )
}

export default Home