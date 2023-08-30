import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext'
import RegisterPage from '../Components/RegisterPage'
import ContactUsPage from '../Pages/ContactUsPage'
import HomePage from '../Pages/HomePage.jsx'
import AdminPanel from '../Components/AdminPanel'
import LoginPage from '../Components/LoginPage'
import ServicesPage from '../Pages/ServicesPage'
import SuccessStoryPage from '../Pages/SuccessStoryPage'
import AboutUsPage from '../Pages/AboutUsPage'
import ProfileCard from '../Components/ProfileCard'
import ProtectedRoute from './ProtectedRoute'


function MainRoute() {
    const context = useContext(GlobalContext)

    const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
    const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
    const [isAdmin] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;
  return (
    <BrowserRouter>

        <Routes>
            <Route path={'/'} element={<HomePage/>} />
            <Route path={'/login'} element={<LoginPage/>} />
            <Route path={'/register'} element={<RegisterPage/>} />
            <Route path={'/service'} element={<ServicesPage/>} />
            <Route path={'/successStories'} element={<SuccessStoryPage/>} />
            <Route path={'/about'} element={<AboutUsPage/>} />
            <Route path={'/contact'} element={<ContactUsPage/>} />
            <Route path={'/profileCard'} element={<ProfileCard/>}/>
            <Route path={'/adminpanel'} element={<AdminPanel/>} />

            {
                isLogged && isUser ? (
                    <Route element={<ProtectedRoute/>}>
                        <Route path={'/profileCard'} element={<ProfileCard/>}/>
                    </Route>
                ) : null
            }
            {
                isLogged && isAdmin ? (
                    <Route element={<ProtectedRoute/>}>
                        <Route path={'/adminpanel'} element={<AdminPanel/>} />
                    </Route>
                ) : null
            }
            
                      
        </Routes>
        
    </BrowserRouter>
  )
}

export default MainRoute
