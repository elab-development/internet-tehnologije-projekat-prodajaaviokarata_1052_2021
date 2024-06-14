import axios from "axios";

const axiosZahtev = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    timeout: 30000,
});

let token = window.sessionStorage.getItem('token');

if (token) {
    axiosZahtev.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axiosZahtev;