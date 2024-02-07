import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/Logo component.svg";
import Cta from "./CTA";
import { useState } from "react";

//Styles
import "../styles/NavBar.css";

import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="header" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home" className="header__logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
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
          <Nav className="ml-auto header__menu">
            <Link to="home" className="header__menu__link">
              Home
            </Link>
            <Link to="about" className="header__menu__link">
              Services
            </Link>
            <Link to="skills" className="header__menu__link">
              Packages
            </Link>
            <Link to="contact" className="header__menu__link">
              Contact
            </Link>
          </Nav>
          <Cta />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
