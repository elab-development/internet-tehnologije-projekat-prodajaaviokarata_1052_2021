import React from 'react';
import PropTypes from 'prop-types';
import {Card} from "react-bootstrap";

const Kartica = props => {
    const { ime, opis, slika } = props;
    return (
        <>
            <Card>
                <Card.Img variant="top" src={slika} />
                <Card.Body>
                    <Card.Title>{ime}</Card.Title>
                    <Card.Text>
                        {opis}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

Kartica.propTypes = {
    ime: PropTypes.string.isRequired,
    opis: PropTypes.string.isRequired,
    slika: PropTypes.string.isRequired
};

export default Kartica;