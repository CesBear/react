import React from 'react';
import { Parallax } from 'react-materialize';

const Principal = () => {
    return (
        <div>
            <Parallax imageSrc="/img/city.jpg"/>
            <div className="section  teal lighten-5">
                <div className="row container">
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                </div>
            </div>
            <Parallax imageSrc="/img/city.jpg"/>
        </div>
    );
};

export default Principal;