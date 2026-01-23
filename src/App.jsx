import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUsSection from './components/AboutUsSection'

function App() {


  return (
    <>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/about' element={<AboutUsSection/>}/>
    </Routes>
      
    </>
  )
}

export default App
