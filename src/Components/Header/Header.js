import React from 'react';
import './Header.css'
import { Button, Col, Container,  Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
const Header = () => {

    return (
        <Container>
            <Row>
                <Navbar expand="lg">
                    <Col xs={12} md={6}>
                        <Navbar.Brand to="/home" >
                            <img
                                src={logo}
                                width="130"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav activeKey="/home">
                                <Nav.Item>
                                    <Link className='link-style' to="/home">Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='link-style' eventKey="/donation">Donation</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='link-style' to="/successRegister">Events</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='link-style' eventKey="/blogs">Blogs</Link>
                                </Nav.Item>
                                <Link className='link-style' to='/registerForm'><Button variant='primary'>Register</Button></Link>
                                <Link className='link-style' to="/volunteerRegList"><Button variant='dark'>Admin</Button></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Navbar>
            </Row>
        </Container>
    );
};

export default Header;