import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "../Styles/css/nav.css";
import Logo from "../Assets/images/logo/logo2r.png";
import { useLocation } from "react-router-dom";

const NavigationMenu = ({ menu }) => {
  const location = useLocation();
  const show = !["login", "admin", "signup"].includes(location.pathname.replace("/", ""));
  return show ? (
    <>
      <a href="/">
        <img src={Logo} className="logo-image" alt="Logo" />
      </a>
      <Menu right noOverlay pageWrapId={"page-wrap"} outerContainerId={"App"}>
        {menu?.map((item, i) => (
          <div key={`menu-item-${i}`} className="menu-item">
            <span className="menu-bar"></span>
            <a href={item.pathname}>{item.name}</a>
          </div>
        ))}
      </Menu>
    </>
  ) : null;
};

export default NavigationMenu;
