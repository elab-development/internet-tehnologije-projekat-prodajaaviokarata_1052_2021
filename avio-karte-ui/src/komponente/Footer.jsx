import React, {useEffect} from 'react';
import {FaAddressBook, FaHeart, FaPhone} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";
import axios from "axios";

const Footer = () => {

    const [vreme, setVreme] = React.useState("");

    useEffect(() => {
        axios.get("http://worldtimeapi.org/api/timezone/Europe/Belgrade")
            .then(res => {
                let formatedDate = new Date(res.data.datetime);
                //date format dd.mm.yyyy
                let formatedString = formatedDate.getDate() + "." + (formatedDate.getMonth() + 1) + "." + formatedDate.getFullYear();

                setVreme(formatedString);
            }).catch(err => {
            console.log(err);
        })

    }, []);


    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>FlyWithAS</h5>
                            <p><FaAddressBook/> Topolska 18 </p> <p><FaPhone/> 065 3234 233 </p> <p>
                            <FaPencil/> flywithAS@gmail.com</p>
                        </div>
                        <div className="col-md-4">
                            <h1>{vreme}</h1>
                        </div>
                    
                        <div className="col-md-4">
                        <ul>
                            <li>Jednostavna Rezervacija</li>
                            <li>Konkurentne Cene</li>
                            <li>Širok Izbor Destinacija</li>
                            <li>Sigurnost i Pouzdanost</li>
                    </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;