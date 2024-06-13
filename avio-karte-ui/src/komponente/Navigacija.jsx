import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {FaPlane} from "react-icons/fa";

const Navigacija = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><FaPlane/> FlyWithAS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/onama">O nama</Nav.Link>
                        <Nav.Link href="/letovi">Letovi</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigacija;