
import '../scss/Menu.scss'
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu } from 'antd';

const menuStyle = {
    textDecoration: "none",
    fontSize: "17px",
    color:"#fff"
  }
  
function MenuPage() {

    const [isServiceMenu, setIsServiceMenu] = useState(false);

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
          <Menu.Item key="second">
            <NavLink to={"/second-marriage-services"} onClick={toggleMenu} style={menuStyle}>
               Second Marriage
            </NavLink>
          </Menu.Item>
        </Menu>
      );
    
  return (
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
              <NavLink to={"/packages"} onClick={toggleMenu}>
                Packages
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
  )
}

export default MenuPage
