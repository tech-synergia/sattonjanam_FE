import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './Components/RegisterPage'
import ContactUsPage from './Pages/ContactUsPage'
import HomePage from './Pages/HomePage.jsx'
import AdminPanel from './Components/AdminPanel'
import LoginPage from './Components/LoginPage'
import ServicesPage from './Pages/ServicesPage'
import SuccessStoryPage from './Pages/SuccessStoryPage'
import AboutUsPage from './Pages/AboutUsPage'
import ProfileCard from './Components/ProfileCard'



function App() {
  
  return (
    <BrowserRouter>

        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/service' element={<ServicesPage/>} />
            <Route path='/successStories' element={<SuccessStoryPage/>} />
            <Route path='/about' element={<AboutUsPage/>} />
            <Route path='/contact' element={<ContactUsPage/>} />
            <Route path='/adminpanel' element={<AdminPanel/>} />
            <Route path='/profileCard' element={<ProfileCard/>}/>
        </Routes>
        
    </BrowserRouter>
  )
}

export default App
