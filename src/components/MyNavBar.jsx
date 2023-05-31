import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import LOGO from '../assets/img/itechlogo.jpg';
const MyNavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        // <Navbar bg="dark" variant="dark" sticky='top'>
        //     <Container>
        //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#features">Features</Nav.Link>
        //             <Nav.Link href="#pricing">Pricing</Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>
        <>
            <Navbar bg="primary" variant="dark" expand="lg" sticky='top'>
                <Container fluid>
                    {/* <Navbar.Brand to="/">Ecommerce</Navbar.Brand> */}
                    <Navbar.Brand href="#home">
                        <img
                            src={LOGO}
                            width="120"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        // placement="start"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                <strong>Itech Termoplastica</strong>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#home">Inicio</Nav.Link>
                                <Nav.Link href="#about">Acerca de</Nav.Link>
                                <Nav.Link href="#products">Productos</Nav.Link>
                                <Nav.Link href="#contact">Contacto</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default MyNavBar;