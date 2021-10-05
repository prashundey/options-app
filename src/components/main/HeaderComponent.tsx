import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HeaderComponent.css'

export class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar className="myNav" variant="dark" expand="lg" >
                    <Container>
                        <Navbar.Brand>
                            <Link className="nav-link" to="/">Home</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/options-pricer">Option Pricer</Link>
                                <NavDropdown title="Projects" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">
                                        Option Pricer
                                     </NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.2">GH1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">GH2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Github Profile</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
