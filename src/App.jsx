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
import CommonBanner from './Components/CommonBanner'
import Home from './Components/hOME.JSX'
import ContactUs from './Components/ContactUs'
import AboutInfo from './Components/AboutInfo'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/contact' element={<ContactUs/>} />

        </Routes>
        <Navbar/>
        <CommonBanner/>
        <CarouselBanner/>
        <AboutInfo/>
        <ConnectWithUs/>
        <ServiceCard/>
        <Success/>
        <ContactForm/>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
