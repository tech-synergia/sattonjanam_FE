import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './Components/RegisterPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import ServiceCard from './Components/ServiceCard'
import Success from './Components/Success'

import ContactUsPage from './Pages/ContactUsPage'
import HomePage from './Pages/HomePage.jsx'
import AdminPanel from './Components/AdminPanel'
import LoginPage from './Components/LoginPage'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/contact' element={<ContactUsPage/>} />
            <Route path='/adminpanel' element={<AdminPanel/>} />

        </Routes>
       
       
        
       
       
       
        {/* <ServiceCard/>
        <Success/> */}
        
    </BrowserRouter>
  )
}

export default App
