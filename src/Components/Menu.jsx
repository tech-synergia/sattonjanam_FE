import "../scss/Menu.scss";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "antd";

const menuStyle = {
  textDecoration: "none",
  fontSize: "17px",
  color: "#fff",
};

function MenuPage() {
  const [isServiceMenu, setIsServiceMenu] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const serviceDropdown = (
    <Menu
      style={{
        backgroundColor: "rgb(164, 63, 63)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "relative",
        left: "-17px",
        top: "-4px",
      }}
    >
      <Menu.Item key="hindu">
        <a
          href={"/hindu-matrimonial-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          Hindu Matrimonial Services
        </a>
      </Menu.Item>
      <Menu.Item key="punjabi">
        <a
          href={"/punjabi-matrimonial-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          Punjabi Matrimonial Services
        </a>
      </Menu.Item>
      <Menu.Item key="sikh">
        <a
          href={"/sikh-matrimonial-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          Sikh Matrimonial Services
        </a>
      </Menu.Item>
      <Menu.Item key="jain">
        <a
          href={"/jain-matrimonial-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          Jain Matrimonial Services
        </a>
      </Menu.Item>
      <Menu.Item key="aggarwal">
        <a
          href={"/agarwal-matrimonial-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          Aggarwal-gupta-baniya Matrimonial Services
        </a>
      </Menu.Item>
      <Menu.Item key="elite">
        <a
          href={"/elite-matrimonial-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          Elite Matrimonial Services
        </a>
      </Menu.Item>
      <Menu.Item key="NRI">
        <a
          href={"/nri-matrimonial-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          NRI Matrimonial Services
        </a>
      </Menu.Item>
      <Menu.Item key="late">
        <a
          href={"/late-marriage-matrimonial-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          Late Marriage Matrimonial Services
        </a>
      </Menu.Item>

      <Menu.Item key="re-marriage">
        <a
          href={"/re-marriage-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          Re-Marriage Services
        </a>
      </Menu.Item>
      <Menu.Item key="wedding">
        <NavLink to={"/wedding"} onClick={toggleMenu} style={menuStyle}>
          Wedding Event Services
        </NavLink>
      </Menu.Item>
      <Menu.Item key="second">
        <a
          href={"/second-marriage-services"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          Second Marriage
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="navbarContent">
      <ul
        className={`links ${isMenuOpen ? "open" : ""}`}
        style={{ zIndex: "3" }}
      >
        <li>
          <NavLink to={"/"} onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <a
            href={"/service"}
            onMouseEnter={() => setIsServiceMenu(true)}
            onMouseLeave={() => setIsServiceMenu(false)}
          >
            <Dropdown
              overlay={serviceDropdown}
              open={isServiceMenu}
              placement="bottomLeft"
            >
              <span>
                Services{" "}
                <i
                  className="bi bi-caret-down-fill"
                  style={{ fontSize: "12px" }}
                ></i>
              </span>
            </Dropdown>
          </a>
        </li>

        <li>
          <a href={"/successStories"} onClick={toggleMenu}>
            Success Stories
          </a>
        </li>

        <li>
          <a href={"/wedding"} onClick={toggleMenu}>
            Wedding Event Services
          </a>
        </li>

        <li>
          <a href={"/astrologer"} onClick={toggleMenu}>
            Astrologer
          </a>
        </li>
        <li>
          <a href={"/packages"} onClick={toggleMenu}>
            Packages
          </a>
        </li>
        <li>
          <a href={"/about"} onClick={toggleMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href={"/contact"} onClick={toggleMenu}>
            Contact us
          </a>
        </li>
      </ul>
      <div className="nav-btn" onClick={toggleMenu}>
        <MenuOutlined />
      </div>
    </div>
  );
}

export default MenuPage;
