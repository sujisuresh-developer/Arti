import React from 'react'
import ServiceHero from '../components/ServiceHero'
import LogoScroll from '../components/LogoScroll'
import Footer from '../components/Footer'
import InfraExplain from '../components/InfraExplain'

function InfrastructureSolutions() {
  return (
    <>
    <ServiceHero 
  tag="INFRASTRUCTURE SOLUTIONS"
  title="Build a reliable IT foundation that ensures performance, scalability, and business continuity"
  points={[
    "Navigate Regulations",
    "Comply Confidently",
    "Protect Your Business",
  ]}
/>

<InfraExplain/>
<LogoScroll/>
<Footer/>

    </>
  )
}

export default InfrastructureSolutions