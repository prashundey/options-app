import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Prashun Dey</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">About Me</Nav.Link>
                                <Nav.Link href="#link">Options Pricer</Nav.Link>
                                <NavDropdown title="Projects" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Option Pricer</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">GH 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">GH 2</NavDropdown.Item>
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
