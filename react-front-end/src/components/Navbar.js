import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
   // BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">MiCasa</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto">
    <Link to="/home">
    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/map">
    <ReactBootStrap.Nav.Link href="#map">Map</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="Favourite Places" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Recent Favourites</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Previous Favourites</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Edit Favourites</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <ReactBootStrap.Navbar.Brand >Elliott Thomlison</ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;