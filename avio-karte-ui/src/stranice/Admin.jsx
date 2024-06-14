import React, {useEffect} from 'react';
import Naslov from "../komponente/Naslov";
import {Chart} from "react-google-charts";
import axiosZahtev from "../axiosZahtev";

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
            </div>
        </>
    );
};

export default Admin;