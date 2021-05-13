import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
   // BrowserRouter as Router,
    Link
  } from "react-router-dom";

import logo from './LeightonIcon.png';
import "./Navbar.css";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="light" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home"><img src={logo} alt="" width="150" height="45"/></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto">
    <Link to="/home">
    <ReactBootStrap.Nav.Link href="#home" id="font1" id="font">Home</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/map">
    <ReactBootStrap.Nav.Link href="#map" id="font2" >Map</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="Favourite Places" id="collasible-nav-dropdown" id="font3">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" class="font" id="font4">Recent Favourites</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2" class="font" id="font5">Previous Favourites</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3" class="font" id="font6">Edit Favourites</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <ReactBootStrap.Navbar.Brand class="font" id="font7">Elliott Thomlison</ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;