import React, {useEffect} from 'react';
import Naslov from "../komponente/Naslov";
import {Chart} from "react-google-charts";
import axiosZahtev from "../axiosZahtev";
import {Col, Row, Table} from "react-bootstrap";

const Admin = () => {
    const [poruka, setPoruka] = React.useState("");
    const [data, setData] = React.useState([]);
    const [options, setOptions] = React.useState({
        title: 'Broj polazaka po aerodromima',
        is3D: true
    });

    useEffect(() => {
        axiosZahtev.get("/grafik")
            .then(res => {
                let podaci = res.data.podaci;
                let data = [["Aerodrom", "Broj polazaka"]];
                podaci.forEach(p => {
                    data.push([p.naziv, parseInt(p.broj_letova)]);
                });
                setData(data);
            }).catch(err => {
            setPoruka("Greska pri ucitavanju podataka");
        })
    }, []);

    const [noveRezervacije, setNoveRezervacije] = React.useState([]);

    useEffect(() => {
        axiosZahtev.get("/nove-rezervacije")
            .then(res => {
                setNoveRezervacije(res.data.podaci);
            }).catch(err => {
            console.log(err);
        })
    }, []);

    const potrvdiRezervaciju = (id) => {
        axiosZahtev.get("/rezervacije/" + id + "/potvrdi")
            .then(res => {
                console.log(res.data);
                window.location = "/admin";
            }).catch(err => {
                console.log(err);
        })
    }

    const odbijRezervaciju = (id) => {
        axiosZahtev.get("/rezervacije/" + id + "/otkazi")
            .then(res => {
                console.log(res.data);
                window.location = "/admin";
            }).catch(err => {
                console.log(err);
        })
    }

    return (
        <>
            <Naslov naslov="Admin panel" poruka={poruka} />

            <div className="mt-3">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
                <Row>
                    <Col>
                        <Table hover>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Let ID</th>
                                <th>Vreme rezervacije</th>
                                <th>Status</th>
                                <th>Akcije</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                noveRezervacije && noveRezervacije.map(lett => {
                                    return (
                                        <tr key={lett.id}>
                                            <td>{lett.id}</td>
                                            <td>{lett.let_id}</td>
                                            <td>{lett.vreme_rezervacije}</td>
                                            <td>{lett.status}</td>
                                            <td>
                                                <button role="button" onClick={() => {
                                                    potrvdiRezervaciju(lett.id)
                                                }} className="btn btn-success m-1">Potvrdi</button>
                                                <button role="button" onClick={() => {
                                                    odbijRezervaciju(lett.id)
                                                }} className="btn btn-danger m-1">Odbij</button>
                                            </td>
                                        </tr>
                                    )
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

export default Admin;