import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './Components/RegisterPage'
import Navbar from './Components/Navbar'
import CarouselBanner from './Components/CarouselBanner'
import Footer from './Components/Footer'
import ConnectWithUs from './Components/ConnectWithUs'
import ServiceCard from './Components/ServiceCard'
import Success from './Components/Success'
import ContactForm from './Components/ContactForm'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/register' element={<RegisterPage/>} />

        </Routes>
        <Navbar/>
        <CarouselBanner/>
        <ConnectWithUs/>
        <ServiceCard/>
        <Success/>
        <ContactForm/>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
