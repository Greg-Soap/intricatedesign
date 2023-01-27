import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "./Style.scss";
import Arrow from "../../assets/images/arrow-left.svg";

const Nav = () => {
  const navigate = useNavigate();
  const [selectPage, setSelectPage] = useState("Home");
  const handleClick = (path) => {
    navigate("/");
    setSelectPage(path);
  };
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={colorChange ? "ServiceNav colorChange" : "ServiceNav"}>
      <NavLink to="/" className="nav_header">
        <img src={Arrow} alt="" />
        Back To Home
      </NavLink>
      <div className="links_content">
        <Link
          className={
            selectPage === "Contact Us" ? "Contact_Link " : "Contact_Link"
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
    </nav>
  );
};

export default Nav;
