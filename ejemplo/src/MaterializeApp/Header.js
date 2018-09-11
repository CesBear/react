import React from 'react';
import {Navbar, NavItem } from 'react-materialize'

const Header = (props) => {
    return (
        <div>
            <Navbar brand='Bedu' left>
                <NavItem href='/'>Principal</NavItem>
                <NavItem href='/saludar'>Saludar-Modal</NavItem>
                <NavItem href='/saludar/bedu'>Bedu</NavItem>
                <NavItem href='/saludar/bedu/mesa'>Mesa</NavItem>
                <NavItem href='/saludar/bedu/mesa/cuadros'>Cuadros</NavItem>
                <NavItem href='/saludar/bedu/mesa/cuadros/juego'>Juego</NavItem>
            </Navbar>
        </div>
    );
};
export default Header;