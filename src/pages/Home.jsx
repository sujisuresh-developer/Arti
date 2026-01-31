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
import InfiniteMovingCardsDemo from '../components/Infinite-moving-cards-demo'
import GlowSection from '../components/GlowSection'
import { FocusCards } from '../components/ui/focus-cards'
import {
  Zap,
  Building2,
  Heart,
  TrendingUp
} from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?w=600&auto=format&fit=crop&q=60",
    icon: Heart,
  },
  {
    title: "Enterprise & SaaS",
    desc: "Scalable cloud architecture and DevOps for high-growth technology companies.",
    image: "https://media.istockphoto.com/id/1302546439/photo/cloud-computing-data-center-server-rack.jpg",
    icon: TrendingUp,
  },
];








function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <GlowSection/>
    <section className="relative z-20 pointer-events-auto">
        <LayoutGridDemo />
      </section>
  
   
    <WhyChooseUs/>
    <FocusCards cards={industries} />
   
    <InfiniteMovingCardsDemo/>
     <LogoScroll/>
    <Footer/>
    </>
  )
}

export default Home