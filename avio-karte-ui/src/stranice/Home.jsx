import React from 'react';
import Naslov from "../komponente/Naslov";
import {Col, Image, Row} from "react-bootstrap";
import avion from '../slike/avion.jpeg';

const Home = () => {
    return (
        <>
            <Naslov naslov="Dobrodošli na sajt" poruka="FlyWithAS - Vaša krila ka svetu. Rezervišite svoj let danas i iskusite vrhunsku uslugu." />
            <div className="glavni mt-3">
                <Row>
                    <Col md={6}>
                        <Image src={avion} thumbnail />
                    </Col>
                    <Col md={6}>
                        <p>
                        Dobrodošli u FlyWithAS, vodeću avio kompaniju specijalizovanu za organizaciju letova širom sveta.
                        Na našem sajtu možete pronaći sve potrebne informacije o letovima i lako rezervisati karte. 
                        Takođe, možete saznati više o našoj kompaniji i njenim vrednostima,
                        kao i kontaktirati nas za bilo kakva pitanja ili dodatnu podršku.
                        </p>
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default Home;