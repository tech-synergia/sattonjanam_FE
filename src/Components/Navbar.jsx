import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import logo from "../assets/logo.png";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";


function Navbar() {
  // Initialize state for the dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navbar">
      <div className="content-container">
        <div className="logoContent">
            <div className="logo-title">
              <img src={logo} alt="logo" />
            </div>
            <div className="contact">
                <p className="phone"><i className="bi bi-telephone-fill"></i> +91-11-47094491</p>
                <p className="phone"><i class="bi bi-phone"></i> +91-9599991982</p>
                <p><i class="bi bi-envelope-fill"></i> contact@wedgatematrimony.com</p>
            </div>
        </div>
        <div className="content">
          <ul className={`links ${isMenuOpen ? "open" : ""}`} style={{zIndex: "3"}}>
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
               Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/service"} onClick={toggleMenu}>
                Services
              </NavLink>
            </li>
           
            <li>
              <NavLink to={"/successStories"} onClick={toggleMenu}>
                Success Stories
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={toggleMenu}>
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/career"} onClick={toggleMenu}>
                Career
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={toggleMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/weddingPhotography"} onClick={toggleMenu}>
                Wedding Photography
              </NavLink>
            </li>
            <li>
              <NavLink to={"/astrologer"} onClick={toggleMenu}>
                Astrologer
              </NavLink>
            </li>
            <li>
              <NavLink to={"/terms&conditions"} onClick={toggleMenu}>
               Terms and Condition
              </NavLink>
            </li>
            <li>
              <NavLink to={"/privacy"} onClick={toggleMenu}>
               Privacy Policy
              </NavLink>
            </li>
          </ul>
          <div className="nav-btn" onClick={toggleMenu}>
            <MenuOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

