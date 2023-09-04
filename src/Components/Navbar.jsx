// import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import logo from "../assets/websiteLogo.svg";
import React, { useState, useContext } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { GlobalContext } from '../GlobalContext';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Menu, Dropdown } from 'antd';


const menuStyle = {
  textDecoration: "none",
  fontSize: "17px",
  color:"#fff"
}

function Navbar() {
  const context = useContext(GlobalContext)
  const [isAdmin] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;
  const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
  const [user] = context.useAuth.user ? context.useAuth.user : false;
  const navigate = useNavigate()

  const [isServiceMenu, setIsServiceMenu] = useState(false);

  const adminRoute = () => {
    return (
        <ul className="navbar-nav">
              <NavLink to={`/adminpanel`} className="dropdown-item"><button>Admin Panel</button></NavLink>
              <NavLink to={`/`} onClick={logoutUser} className="dropdown-item"><button>Logout</button></NavLink>
          
   </ul>
    )
  }

  const userRoute = () => {
    return (
        <ul className="navbar-nav">
             <NavLink to={`/userdetails`} className="dropdown-item"><button>User Profile</button></NavLink>
             <NavLink to={`/`} onClick={logoutUser} className="dropdown-item"><button>Logout</button></NavLink>
                
            
        </ul>
    )
  }

  const commonRoute = () => {
    return (
        // <ul className="navbar-nav">
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

  const serviceDropdown = (
    <Menu style={{ backgroundColor: "rgb(177, 110, 145)", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Menu.Item key="hindu">
        <NavLink to={"/hindu-matrimonial-services"} onClick={toggleMenu} style={menuStyle}>
          Hindu Matrimonial Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="punjabi">
        <NavLink to={"/punjabi-matrimonial-services"} onClick={toggleMenu} style={menuStyle}>
          Punjabi Matrimonial Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="sikh">
        <NavLink to={"/sikh-matrimonial-services"} onClick={toggleMenu} style={menuStyle}>
          Sikh Matrimonial Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="jain">
        <NavLink to={"/jain-matrimonial-services"} onClick={toggleMenu} style={menuStyle}>
          Jain Matrimonial Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="aggarwal">
        <NavLink to={"/agarwal-matrimonial-services"} onClick={toggleMenu} style={menuStyle}>
          Aggarwal-gupta-baniya Matrimonial Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="elite">
        <NavLink to={"/elite-matrimonial-services"} onClick={toggleMenu} style={menuStyle}>
          Elite Matrimonial Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="NRI">
        <NavLink to={"/nri-matrimonial-services"} onClick={toggleMenu} style={menuStyle}>
          NRI Matrimonial Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="late">
        <NavLink to={"/late-marriage-matrimonial-services"} onClick={toggleMenu} style={menuStyle}>
          Late Marriage Matrimonial Services
        </NavLink>
      </Menu.Item>

      <Menu.Item key="re-marriage">
        <NavLink to={"/re-marriage-services"} onClick={toggleMenu} style={menuStyle}>
          Re-Marriage Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="wedding">
        <NavLink to={"/wedding"} onClick={toggleMenu} style={menuStyle}>
          Wedding Event Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="astrologer">
        <NavLink to={"/astrologer"} onClick={toggleMenu} style={menuStyle}>
          Astrologer
        </NavLink>
      </Menu.Item>
      <Menu.Item key="second">
        <NavLink to={"/second-marriage-services"} onClick={toggleMenu} style={menuStyle}>
           Second Marriage
        </NavLink>
      </Menu.Item>
    </Menu>
  );


  return (
    <div id="navbar">
      {/* <div className="contentContainer"> */}
        <div className="logoContent">
            <div className="logo-title">
              <NavLink to={'/'}>
                <img src={logo} alt="logo"/>
              </NavLink>
            </div>
            <div className="contact">
                <p className="phone"><i className="bi bi-telephone-fill"></i> 9773643677</p>
                <p><i className="bi bi-envelope-fill"></i> www.sattonjanam.com</p>
                <p><i className="bi bi-envelope-fill"></i> Support@sattonjanam.com</p>

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
        <div className='navbarContent'>
          <ul className={`links ${isMenuOpen ? "open" : ""}`} style={{zIndex: "3"}}>
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
               Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/service"} 
               onMouseEnter={() => setIsServiceMenu(true)}
               onMouseLeave={() => setIsServiceMenu(false)}>
                <Dropdown overlay={serviceDropdown} open={isServiceMenu} placement="bottomLeft">
                <span>Services <i className="bi bi-caret-down-fill" style={{fontSize: "12px"}}></i></span>
                </Dropdown>
              </NavLink>
            </li>
           
            <li>
              <NavLink to={"/successStories"} onClick={toggleMenu}>
                Success Stories
              </NavLink>
            </li>

            <li>
              <NavLink to={"/wedding"} onClick={toggleMenu}>
                Wedding Event Services
              </NavLink>
            </li>

            <li>
              <NavLink to={"/astrologer"} onClick={toggleMenu}>
                Astrologer
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={toggleMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={toggleMenu}>
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="nav-btn" onClick={toggleMenu}>
            <MenuOutlined />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Navbar;

