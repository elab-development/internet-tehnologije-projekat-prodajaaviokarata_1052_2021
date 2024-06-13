import React from 'react';
import PropTypes from 'prop-types';

const Naslov = props => {
    const { naslov, poruka } = props;
    return (
        <>
            <div className="naslov">
                <h1>{naslov}</h1>
                <p>{poruka}</p>
            </div>
        </>
    );
};

Naslov.propTypes = {
    naslov: PropTypes.string.isRequired,
    poruka: PropTypes.string.isRequired
};

export default Naslov;