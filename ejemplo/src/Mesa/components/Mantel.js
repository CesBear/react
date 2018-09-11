import React from 'react';
import '../css/mantel.css'
import Plato from "./Plato";
import Cubiertos from "./Cubiertos";

const Mantel = (props) => {
    return (
        <div className='mantel display-flex space_around align-center'>
            <Cubiertos/>
            <Plato/>
            <Cubiertos/>
        </div>
    );
};

export default Mantel;