import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {FaPlane} from "react-icons/fa";

const Navigacija = () => {

    let token = window.sessionStorage.getItem('token');
    let ulogovan = token !== null;
    let user = JSON.parse(window.sessionStorage.getItem('user'));
    let admin = user !== null && user.role === "admin";


    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><FaPlane/> FlyWithAS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/onama">O nama</Nav.Link>
                        <Nav.Link href="/letovi">Letovi</Nav.Link>
                        {
                            ulogovan && (
                                <Nav.Link href="/moji-letovi">Moji letovi</Nav.Link>
                            )
                        }
                        {
                            admin && (
                                <Nav.Link href="/admin">Admin</Nav.Link>
                            )
                        }
                        {
                            !ulogovan && (
                                <Nav.Link href="/login">Login</Nav.Link>
                            )
                        }

                        {
                            ulogovan && (
                                <Nav.Link onClick={() => {
                                    window.sessionStorage.removeItem('token');
                                    window.sessionStorage.removeItem('user');
                                    window.location = "/";
                                }} href="#">Logout</Nav.Link>
                            )
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigacija;