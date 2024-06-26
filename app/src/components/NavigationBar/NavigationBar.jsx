import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar className='p-2' bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <img src='logo.png' width="48" alt='logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/jsonplaceholder">JSON Placeholder</Nav.Link>
          <Nav.Link as={NavLink} to="/makeup">Makeup API</Nav.Link>
          <Nav.Link as={NavLink} to="/deckofcards">Deck of Cards</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;