import React from 'react';
import {FaAddressBook, FaHeart, FaPhone} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";
import axios from "axios";

const Footer = () => {
    
    const [vreme, setVreme] = React.useState(<></>);

    // setTimeout(() => {
    //     axios.get('http://worldtimeapi.org/api/timezone/Europe/Belgrade').then(res => {
    //         console.log(res.data);
    //         let utcDatetime = res.data.utc_datetime;
    //         let date = new Date(utcDatetime);

    //         let hours = date.getHours();
    //         let minutes = date.getMinutes();
    //         let seconds = date.getSeconds();
    //         let day = date.getDate();
    //         let month = date.getMonth();
    //         let year = date.getFullYear();
    //         let formattedDate = <>
    //             <p className="text-center">{day}.{month}.{year}</p>
    //             <p className="text-center">{hours}:{minutes}:{seconds}</p>
    //         </>;
    //         console.log(formattedDate);

    //         setVreme(formattedDate);
    //     });
    // }, 1000);


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
                            <span>Made with love <FaHeart/></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;