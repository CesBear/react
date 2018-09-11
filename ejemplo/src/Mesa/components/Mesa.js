import React from 'react';
import '../css/mesa.css';
import Mantel from "./Mantel";

const Mesa = (props) => {
    return (
        <div className='mesa display-flex column-reverse space_around'>
            <div className='display-flex space_around align-center'>
                <Mantel/>
                <Mantel/>
                <Mantel/>
            </div>
            <div className='display-flex space_around align-center'>
                <Mantel/>
                <Mantel/>
                <Mantel/>
            </div>
        </div>
    );
};

export default Mesa;