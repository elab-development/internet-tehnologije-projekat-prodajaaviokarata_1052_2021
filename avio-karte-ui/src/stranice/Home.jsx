import React from 'react';
import Naslov from "../komponente/Naslov";
import {Col, Image, Row} from "react-bootstrap";
import avion from '../slike/avion.jpeg';

const Home = () => {
    return (
        <>
            <Naslov naslov="Dobrodošli na sajt" poruka="Ovde možete pronaći sve informacije o letovima." />
            <div className="glavni mt-3">
                <Row>
                    <Col md={6}>
                        <Image src={avion} thumbnail />
                    </Col>
                    <Col md={6}>
                        <p>
                            Mi smo FlyWithAS, avio kompanija koja se bavi organizacijom letova širom sveta.
                            Na našem sajtu možete pronaći sve informacije o letovima, kao i mogućnost kupovine karata.
                            Pored toga, možete se informisati o našoj kompaniji i kontaktirati nas ukoliko imate bilo kakvih pitanja.
                        </p>
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default Home;