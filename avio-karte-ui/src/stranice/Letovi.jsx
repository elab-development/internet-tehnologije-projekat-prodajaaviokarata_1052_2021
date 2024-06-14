import React, {useEffect} from 'react';
import axiosZahtev from "../axiosZahtev";
import Naslov from "../komponente/Naslov";
import {Col, Row, Table} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Letovi = () => {

    const [letovi, setLetovi] = React.useState([]);
    const [filtriraniLetovi, setFiltriraniLetovi] = React.useState([]);
    const [aerodromi, setAerodromi] = React.useState([]);
    const [izabraniDatum, setIzabraniDatum] = React.useState(new Date());
    const [aerodromOd, setAerodromOd] = React.useState("");
    const [aerodromDo, setAerodromDo] = React.useState("");


    const pretraziLetove = () => {
        let letoviFiltrirani = letovi.filter(lett => {
            let datum = new Date(lett.vreme_polaska);
            return datum.getDate() === izabraniDatum.getDate() && datum.getMonth() === izabraniDatum.getMonth() && datum.getFullYear() === izabraniDatum.getFullYear();
        });

        if (aerodromOd !== "") {
            letoviFiltrirani = letoviFiltrirani.filter(lett => {
                return lett.aerodrom_polazak.id == aerodromOd;
            });
        }

        if (aerodromDo !== "") {
            letoviFiltrirani = letoviFiltrirani.filter(lett => {
                return lett.aerodrom_dolazak.id == aerodromDo;
            });
        }

        setFiltriraniLetovi(letoviFiltrirani);
    }

    useEffect(() => {
        axiosZahtev.get("/aerodromi")
            .then(res => {
                console.log(res.data);
                setAerodromi(res.data.podaci);
            }).catch(err => {
            console.log(err);
        })
    }, []);


    useEffect(() => {
        axiosZahtev.get("/letovi")
            .then(res => {
                console.log(res.data);
                let letoviSvi = res.data.podaci;
                //filter bt date today
                let letoviFiltrirani = letoviSvi.filter(lett => {
                    let datum = new Date(lett.vreme_polaska);
                    let danas = new Date();
                    return datum.getDate() === danas.getDate() && datum.getMonth() === danas.getMonth() && datum.getFullYear() === danas.getFullYear();
                });

                //sort by vreme polaska

                letoviFiltrirani.sort((a, b) => {
                    let vremeA = new Date(a.vreme_polaska);
                    let vremeB = new Date(b.vreme_polaska);
                    return vremeA - vremeB;
                });

                setLetovi(letoviSvi);
                setFiltriraniLetovi(letoviFiltrirani);
            }).catch(err => {
            console.log(err);
        })
    }, []);


    return (
        <>
            <Naslov naslov="Letovi" poruka="Prikaz svih letova."/>

            <div className="mt-3">
                <Row className="m-5 p-3 filter">
                    <Col md={3}>
                        <select onChange={
                            (e) => {
                                setAerodromOd(e.target.value);
                            }
                        } className="form-control" name="aerodrom_od" >
                            <option value="">Izaberite aerodrom polaska</option>
                            {
                                aerodromi && aerodromi.map(aerodrom => (
                                    <option key={aerodrom.id} value={aerodrom.id}>{aerodrom.naziv}</option>
                                ))
                            }
                        </select>
                    </Col>
                    <Col md={3}>
                        <select onChange={
                            (e) => {
                                setAerodromDo(e.target.value);
                            }
                        } className="form-control" name="aerodrom_do" >
                            <option value="">Izaberite aerodrom dolaska</option>
                            {
                                aerodromi && aerodromi.map(aerodrom => (
                                    <option key={aerodrom.id} value={aerodrom.id}>{aerodrom.naziv}</option>
                                ))
                            }
                        </select>
                    </Col>
                    <Col md={3}>
                        <DatePicker
                            selected={izabraniDatum}
                            onChange={(date) => {
                                setIzabraniDatum(date);
                            }
                            }
                            dateFormat="dd-MM-yyyy"
                        />
                    </Col>
                    <Col md={3}>
                        <button onClick={pretraziLetove} className="btn btn-primary">Pretraži</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table hover>
                            <thead className="table-dark">
                            <tr>
                                <th>Aerodrom polaska</th>
                                <th>Aerodrom dolaska</th>
                                <th>Avio kompanija</th>
                                <th>Vreme polaska</th>
                                <th>Vreme dolaska</th>
                                <th>Broj karata</th>
                                <th>Cena karte</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                filtriraniLetovi && filtriraniLetovi.map((lett, index) => {
                                    return (
                                        <tr key={lett.id}>
                                            <td>{lett.aerodrom_polazak.naziv}</td>
                                            <td>{lett.aerodrom_dolazak.naziv}</td>
                                            <td>{lett.avio_kompanija.naziv_kompanije}</td>
                                            <td>{lett.vreme_polaska}</td>
                                            <td>{lett.vreme_dolaska}</td>
                                            <td>{lett.broj_karata}</td>
                                            <td>{lett.cena_karte} &euro;</td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>


        </>
    );
};

export default Letovi;