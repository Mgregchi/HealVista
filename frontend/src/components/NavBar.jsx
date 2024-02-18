import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/Logo component.svg";
import Cta from "./CTA";
import { useState } from "react";
import { Link as RLink } from "react-router-dom";

//Styles
import "../styles/NavBar.css";

import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="header"
      expanded={expanded}
      fixed="top"
    >
      <Container>
        <RLink to="/">
          <Navbar.Brand href="#home" className="header__logo">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </RLink>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="header__toggle"
          onClick={toggleNavbar}
        >
          {expanded ? <FaTimes size={30} /> : <FaBarsStaggered size={30} />}
        </Navbar.Toggle>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="navbar__collapse"
        >
          <Nav className="ml-auto header__menu ms-auto">
            <Link
              to="hero"
              className="header__menu__link"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="services"
              className="header__menu__link"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              to="payment__plan"
              className="header__menu__link"
              spy={true}
              smooth={true}
              offset={-5}
              duration={500}
              onClick={handleLinkClick}
            >
              Packages
            </Link>
            <Link
              to="footer"
              className="header__menu__link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Cta />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
