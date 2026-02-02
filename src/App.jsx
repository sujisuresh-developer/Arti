import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUsSection from './components/AboutUsSection'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import FAQ from './pages/FAQ'
import InfrastructureSolutions from './pages/InfrastructureSolutions'
import CyberSecuritySolutions from './components/CyberSecuritySolutions'
import ApplicationSecuritySolutions from './components/ApplicationSecuritySolutions'
import Page from './pages/Page'
import CloudSolutions from './components/CloudSolutions'
import ManagedServices from './components/ManagedServices'
import AmcServices from './components/AmcServices'


function App() {


  return (
    <>
    <ScrollToTop/>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/about' element={<AboutUsSection/>}/>
       <Route path="/infrastructure-solutions" element={<InfrastructureSolutions />} />
        <Route path="/cyber-security-solutions" element={<CyberSecuritySolutions />} />
        <Route path="/application-security-solutions" element={<ApplicationSecuritySolutions />} />
         <Route path="/cloud-solutions" element={<CloudSolutions />} />
         <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/amc-services" element={<AmcServices/>} />

       <Route path='/contact' element={<Contact/>}/>
       <Route path='/faq' element={<FAQ/>}/>
       <Route path='/page' element={<Page/>}/>
       

    </Routes>
      
    </> 
  )
}

export default App
