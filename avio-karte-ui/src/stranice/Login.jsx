import React from 'react';
import Naslov from "../komponente/Naslov";
import useForm from "../useForm";
import axiosZahtev from "../axiosZahtev";

const Login = () => {
    const [poruka, setPoruka] = React.useState("");
    const [prikaziRegistraciju, setPrikaziRegistraciju] = React.useState(false);
    const {formData, handleChange} = useForm({
        korisnickoIme: "",
        lozinka: "",
        ime: ""
    });


    const login = () => {

        let data = {
            email: formData.korisnickoIme,
            password: formData.lozinka
        }

        axiosZahtev.post("/login", data)
            .then(res => {
               let token = res.data.podaci.token;
               let user = res.data.podaci.user;
               window.sessionStorage.setItem('token', token);
                window.sessionStorage.setItem('user', JSON.stringify(user));
                window.location = "/";
            }).catch(err => {
            setPoruka("Neuspesno logovanje");
        })
    }
    const registracija = () => {
        let data = {
            email: formData.korisnickoIme,
            password: formData.lozinka,
            name: formData.ime
        }

        axiosZahtev.post("/register", data)
            .then(res => {
                setPoruka("Uspesno ste se registrovali, sada se možete ulogovati");
            }).catch(err => {
            setPoruka("Neuspesna registracija");
        })
    }

    return (
        <>
            <Naslov naslov="Login stranica" poruka={poruka} />

            <div className="glavni mt-3">
                {
                    !prikaziRegistraciju && (
                        <>
                            <form className="mt-3 mb-3">
                                <div className="form-group">
                                    <label htmlFor="korisnickoIme">Korisničko ime</label>
                                    <input onChange={handleChange} type="text" className="form-control" id="korisnickoIme"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lozinka">Lozinka</label>
                                    <input onChange={handleChange} type="password" className="form-control" id="lozinka"/>
                                </div>
                                <button onClick={login} type="button" className="btn btn-primary mt-3">Login</button>
                            </form>
                            <button onClick={() => setPrikaziRegistraciju(true)} className="btn btn-link">Nemate nalog? Registrujte se.</button>
                        </>
                    )
                }

                {
                    prikaziRegistraciju && (
                        <>
                            <form className="mt-3 mb-3">
                                <div className="form-group">
                                    <label htmlFor="korisnickoIme">Ime</label>
                                    <input onChange={handleChange} type="text" className="form-control"
                                           id="ime"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="korisnickoIme">Korisničko ime</label>
                                    <input onChange={handleChange} type="text" className="form-control"
                                           id="korisnickoIme"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lozinka">Lozinka</label>
                                    <input onChange={handleChange} type="password" className="form-control"
                                           id="lozinka"/>
                                </div>
                                <button onClick={registracija} type="button" className="btn btn-primary mt-3">Registruj se
                                </button>
                            </form>
                            <button onClick={() => setPrikaziRegistraciju(false)} className="btn btn-link">Već imate
                                nalog? Prijavite se.
                            </button>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default Login;