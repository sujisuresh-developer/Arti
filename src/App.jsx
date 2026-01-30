import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUsSection from './components/AboutUsSection'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import FAQ from './pages/FAQ'
import InfrastructureSolutions from './pages/InfrastructureSolutions'
import Page from './pages/Page'

function App() {


  return (
    <>
    <ScrollToTop/>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/about' element={<AboutUsSection/>}/>
       <Route path="/infrastructure-solutions" element={<InfrastructureSolutions />} />
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/faq' element={<FAQ/>}/>
       <Route path='/page' element={<Page/>}/>

    </Routes>
      
    </>
  )
}

export default App
