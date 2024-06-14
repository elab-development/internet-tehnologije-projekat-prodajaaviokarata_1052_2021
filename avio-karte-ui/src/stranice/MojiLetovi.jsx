import React from 'react';
import Naslov from "../komponente/Naslov";
import axiosZahtev from "../axiosZahtev";
import {Col, Row, Table} from "react-bootstrap";

const MojiLetovi = () => {

    let user = JSON.parse(window.sessionStorage.getItem('user'));

    const [letovi, setLetovi] = React.useState([]);
    const [url, setUrl] = React.useState("/rezervacije-korisnika/" + user.id);
    const [links, setLinks] = React.useState([]);
    const [linksUpdated, setLinksUpdated] = React.useState(false);

    React.useEffect(() => {
        axiosZahtev(url)
            .then(res => {
                setLetovi(res.data.podaci.data);
                if (!linksUpdated) {
                    setLinks(res.data.podaci.links);
                    setLinksUpdated(true);
                }
            }).catch(err => {
            console.log(err);
        })

    }, [url]);


    return (
        <>
            <Naslov naslov="Moji letovi" poruka="" />

            <div className="mt-3">
                <Row>
                   <Col>
                       <Table hover>
                           <thead>
                           <tr>
                               <th>ID</th>
                               <th>Let ID</th>
                               <th>Vreme rezervacije</th>
                               <th>Status</th>
                           </tr>
                           </thead>
                           <tbody>
                           {
                               letovi && letovi.map(lett => {
                                      return (
                                          <tr key={lett.id}>
                                              <td>{lett.id}</td>
                                              <td>{lett.let_id}</td>
                                              <td>{lett.vreme_rezervacije}</td>
                                              <td>{lett.status}</td>
                                          </tr>
                                      )
                                 })
                           }
                           </tbody>
                       </Table>
                   </Col>
                </Row>

                <Row>
                    <Col>
                        {
                            links && links.map(link => {

                                let label = link.label;

                                if (label === "&laquo; Previous") {
                                    label = "Prethodna";
                                }

                                if (label === "Next &raquo;") {
                                    label = "Sledeća";
                                }

                                return (
                                    <button key={link.url} onClick={() => {
                                        setUrl(link.url);
                                    }} className="btn btn-primary m-2">{label}</button>
                                )
                            })
                        }
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default MojiLetovi;