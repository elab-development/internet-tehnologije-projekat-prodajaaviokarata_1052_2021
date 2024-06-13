import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Navigacija from "./komponente/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./stranice/Home";
import ONama from "./stranice/ONama";
import Letovi from "./stranice/Letovi";
import Login from "./stranice/Login";
import Footer from "./komponente/Footer";

function App() {
  return (
    <>
        <Navigacija />
        <Container className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/onama" element={<ONama />} />
                    <Route path="/letovi" element={<Letovi />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
      </Container>
        <Footer />
    </>
  );
}

export default App;