import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUsSection from './components/AboutUsSection'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {


  return (
    <>
    <ScrollToTop/>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/about' element={<AboutUsSection/>}/>
       <Route path='/contact' element={<Contact/>}/>

    </Routes>
      
    </>
  )
}

export default App
