import React from 'react';
import Naslov from "../komponente/Naslov";
import {Col, Row} from "react-bootstrap";
import Kartica from "../komponente/Kartica";
import axiosZahtev from "../axiosZahtev";

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

    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        //https://randomuser.me/api/

        axiosZahtev.get("https://randomuser.me/api/")
            .then(res => {
                console.log(res.data.results[0]);
                setUser(res.data.results[0]);
            }).catch(err => {
            console.log(err);
        })
    }, []);

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

                <Row className="m-3">
                    <Col>
                        <p className="mt-3">
                            Kapetan meseca - 2024 godine je bio kapetan Marko Markovic. Marko je najbolji kapetan u istoriji avio kompanije.
                            Marko je zavrsio fakultet za pilote i od tada je uvek bio najbolji u svom poslu.
                        </p>
                    </Col>
                    <Col>
                        {
                            user && (
                                <img width={500} height={600} src={user.picture.large} alt="random user" className="img img-fluid"/>
                            )
                        }
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ONama;