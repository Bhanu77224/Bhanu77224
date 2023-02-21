import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Images/logo.png';
// import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    const istrue = 0;
    return istrue ? (
        <>
            <section className="head">
                <div className="container flexSB PaddingTB">
                    <div className="logo mt-1 mb-2" id="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </section>

            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">TimeNews</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-item p-3">
                                HOME
                            </NavLink>
                            <NavLink to="/corona" className="nav-item p-3">
                                CORONA
                            </NavLink>

                            <NavLink to="/world" className="nav-item p-3">
                                WORLD
                            </NavLink>
                            <NavLink to="/gujrat" className="nav-item p-3">
                                GUJRAT
                            </NavLink>
                            <NavLink className="nav-item p-3" to="/ahmedabad">
                                AHMEDABAD
                            </NavLink>
                            <NavLink to="/business" className="nav-item p-3">
                                BUSINESS
                            </NavLink>

                            <NavLink to="/technology" className="nav-item p-3">
                                TECHNOLOGY
                            </NavLink>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.3">
                                    <NavLink to="/technology" className="nav-item p-3">
                                        other
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    ) : (
        <>
            <section className="head">
                <div className="container flexSB PaddingTB">
                    <div className="logo mt-1 mb-2" id="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </section>

            <nav className="navbar navbar-dark navbar-expand-lg bg-black ">
                <div className="container-fluid ">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li>
                                <NavLink to="/" className="nav-item p-3">
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/corona" className="nav-item p-3">
                                    CORONA
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/world" className="nav-item p-3">
                                    WORLD
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/gujrat" className="nav-item p-3">
                                    GUJRAT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-item p-3" to="/ahmedabad">
                                    AHMEDABAD
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/business" className="nav-item p-3">
                                    BUSINESS
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/technology" className="nav-item p-3">
                                    TECHNOLOGY
                                </NavLink>
                            </li>
                            <div class="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Other
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        Food
                                        <NavLink to="/food" className="nav-item">
                                            Food
                                        </NavLink>
                                    </li>
                                    <li>
                                        Beauty
                                        <NavLink to="/beauty" className="nav-item">
                                            Beauty
                                        </NavLink>
                                    </li>
                                    <li>
                                        Entertainment
                                        <NavLink to="/entertainment" className="nav-item">
                                            Entertainment
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            {/* <Dropdown>
                                <Dropdown.Toggle className="bg-black">Other</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item to="/food">Food</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Beauty</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Entertainment</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
