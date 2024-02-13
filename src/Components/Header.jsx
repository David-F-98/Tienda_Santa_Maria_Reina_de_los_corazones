import { NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
   return (
    <Contenedor>
        <ContenedorLogo>
            <Logo src="../../public/Maestros del Amor.jpg" alt="logo" />
            <Titulo>Maestros del amor</Titulo>
        </ContenedorLogo>
        <div>
            <Menu>
                <a href='#' >Inicio</a>
                <a href='#' >Servicios</a>
                <a href='#' >Contáctame</a>
            </Menu>
        </div>
    </Contenedor>
    );
}
 
const Contenedor = styled.div`
    padding: 2.5rem;
    width: 95%;
    display: grid;
    gap: 1.25rem;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 2.5rem 2.5rem;
    border-radius: .625rem;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
    align-items: center;
`;

const ContenedorLogo = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 4.375rem;
    width: 4.375rem;
`;

const Titulo = styled.span`
    font-family: "Pacifico",cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 1.875rem;
    padding-left: 1.25rem;
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    border-radius: .1875rem;
 
    a {
        color: #000000;
        display: inline-block;
        padding: .9375rem 1.25rem;
    }
 
    a:hover {
        background: #ea2e2e;
        background: linear-gradient(90deg, #ea2e2e 0%, #c31212 100%);
        text-decoration: none;
        border-radius: .5rem;
        color: #ffffff;
    }
`;


export default Header;