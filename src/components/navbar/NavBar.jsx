import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "../hamburger/BurgerMenu";
import UseMediaQuery from "../mediaquery/UseMediaQuerry";
import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const [selectPage, setSelectPage] = useState("Home");
  let isPageWide = UseMediaQuery("(min-width: 769px)");

  const handleClick = (path) => {
    navigate("/");
    setSelectPage(path);
  };
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50 || !isPageWide) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={colorChange ? "nav__component colorChange" : "nav__component"}
    >
      <div className="nav__header">
        {/* <img className="logo" src={logo} alt="" /> */}
        <h1 className="nav_title">INTRICATE <span>DS.</span></h1>
      </div>

      {isPageWide ? (
        <div className="links__content">
          <Link
            className={selectPage === "Home" ? "links selected" : "links"}
            smooth={true}
            spy={true}
            to="home"
            offset={-80}
            onClick={() => handleClick("Home")}
          >
            Home
          </Link>
          <Link
            className={selectPage === "About Us" ? "links selected" : "links"}
            smooth={true}
            spy={true}
            to="about"
            offset={-80}
            onClick={() => handleClick("About Us")}
          >
            About Us
          </Link>
          <Link
            className={
              selectPage === "Our Services" ? "links selected" : "links"
            }
            smooth={true}
            spy={true}
            to="services"
            offset={-80}
            onClick={() => handleClick("Our Services")}
          >
            Services
          </Link>

          <Link
            className={
              selectPage === "Contact Us"
                ? "links Contact-Link selected"
                : "links Contact-Link"
            }
            smooth={true}
            spy={true}
            to="contact"
            offset={-80}
            onClick={() => handleClick("Contact Us")}
          >
            Get in Touch
          </Link>
        </div>
      ) : (
        <BurgerMenu />
      )}
    </nav>
  );
};

export default NavBar;
