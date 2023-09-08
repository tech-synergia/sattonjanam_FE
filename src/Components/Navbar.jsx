// import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import logo from '../assets/sattonjanamLogo.svg'
import React, { useState, useContext } from "react";
import { GlobalContext } from '../GlobalContext';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Navbar() {
  const context = useContext(GlobalContext)
  const [isAdmin] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;
  const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
  const [user] = context.useAuth.user ? context.useAuth.user : false;
  const navigate = useNavigate()

  const adminRoute = () => {
    return (
        <ul className="navbar-nav">
              <NavLink to={`/adminpanel`} className="dropdown-item"><button>Admin Panel</button></NavLink>
              <NavLink to={`/`} onClick={logoutUser} className="dropdown-item"><button>Logout</button></NavLink>
              <NavLink to={`/enquireform`} className="nav-link" onClick={toggleMenu}><button>Enquire Now</button></NavLink>
   </ul>
    )
  }

  const userRoute = () => {
    return (
        <ul className="navbar-nav">
             <NavLink to={`/userdetails`} className="dropdown-item"><button>User Profile</button></NavLink>
             <NavLink to={`/`} onClick={logoutUser} className="dropdown-item"><button>Logout</button></NavLink>
             <NavLink to={`/enquireform`} className="nav-link" onClick={toggleMenu}><button>Enquire Now</button></NavLink>   
            
        </ul>
    )
  }

  const commonRoute = () => {
    return (
        <ul className={`navbar-nav ${isMenuOpen ? "open" : ""}`}>
            <NavLink to={`/login`} className="nav-link" onClick={toggleMenu}><button>Login</button></NavLink>
            <NavLink to={`/register`} className="nav-link" onClick={toggleMenu}><button>Register</button></NavLink>
            <NavLink to={`/enquireform`} className="nav-link" onClick={toggleMenu}><button>Enquire Now</button></NavLink>
        </ul>
    )
  }

  const logoutUser = async () => {
    if(window.confirm(`Are you sure to logout?`)) {
      try {
        const res = await axios.get(`https://sattonjanam-be.onrender.com/api/v1/logout`)
        localStorage.clear()
        // toast.success(res.data.msg)
        console.log(res.data.msg)
        setIsAdmin(false)
        setUser(false)
        setIsLogged(false)
        setIsUser(false)
        navigate(`/`)
        window.location.reload()
      } catch (err) {
        window.location.reload()
            console.log(err.response.data.msg)
      }
    } else {
        console.log('logout terminated')
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div id="navbar">
        <div className="logoContent">
            <div className="logo-title">
              <NavLink to={'/'}>
                <img src={logo} alt="logo"/>
              </NavLink>
            </div>
            <div className="contact">
                <p className="phone"><i className="bi bi-telephone-fill"></i> 9773643677</p>
                <p><i className="bi bi-envelope-fill"></i> info@sattonjanam.com</p>

                  {
                    isLogged ? (
                        <React.Fragment>
                                {
                                    isAdmin ? adminRoute() : null
                                }
                                {
                                    isUser ? userRoute() : null
                                }
                        </React.Fragment>
                    ) : commonRoute()
                }
            </div>
        </div>
      </div>
   
  );
}

export default Navbar;

