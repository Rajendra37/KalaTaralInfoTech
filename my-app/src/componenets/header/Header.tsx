import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/IMG_9485.PNG"
import "./header.css"


export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  fixed={'top'} className={'position-sticky ps-0'}>
            <Container>
                <NavLink to="/KTI">
                    <img src={logo} alt="Logo" className='headerlogo' />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fixed-nav-bar">
                        {/* <Nav.Link className='text-light' href="/">Home</Nav.Link>
                        <Nav.Link className='text-light' href="/service">About</Nav.Link>
                        <Nav.Link className='text-light' href="/about">Services</Nav.Link> */}

                        <NavLink to="/KTI" className='nav-link text-light linkClass'>Home</NavLink>
                        <NavLink to="/about" className='nav-link text-light linkClass'>About</NavLink>
                        <NavLink to="/service" className='nav-link text-light linkClass'>Services</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
