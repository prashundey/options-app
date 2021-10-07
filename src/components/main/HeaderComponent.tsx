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
                                    <NavDropdown.Item href="https://github.com/prashundey/options-app">Options FrontEnd</NavDropdown.Item>
                                    <NavDropdown.Item href="https://github.com/prashundey/options-backend">Options Backend</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="https://github.com/prashundey/todo-webapp">Todo WebApp</NavDropdown.Item>
                                    <NavDropdown.Item href="https://github.com/prashundey/JDBC">SQL Query GUI</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
