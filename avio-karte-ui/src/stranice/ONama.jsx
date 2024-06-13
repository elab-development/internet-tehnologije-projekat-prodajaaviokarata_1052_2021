import React from 'react';
import Naslov from "../komponente/Naslov";
import {Col, Row} from "react-bootstrap";
import Kartica from "../komponente/Kartica";

const ONama = () => {

    const onama = [
        {
            id: 1,
            ime: "Andjela Cvijanovic",
            opis: "Student Fakulteta organizacionih nauka, smer Informatika, trenutno na osnovnim studijama. Voli da putuje i upoznaje nove kulture.",
            slika: "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png"
        },
        {
            id: 2,
            ime: "Jana Jevtic",
            opis: "Student Fakulteta organizacionih nauka, smer Informatika, trenutno na osnovnim studijama. Voli da putuje i upoznaje nove kulture.",
            slika: "https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg"
        }
    ];

    return (
        <>
            <Naslov naslov="O nama" poruka="" />

            <div className="glavni mt-3">
                <Row>
                    {
                        onama.map((osoba) => (
                            <Col md={6} key={osoba.id}>
                                <Kartica ime={osoba.ime} opis={osoba.opis} slika={osoba.slika} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    );
};

export default ONama;