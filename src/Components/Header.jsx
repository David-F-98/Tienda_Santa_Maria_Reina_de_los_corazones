import { NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';


const Header = () => {
   return (
    <Contenedor>
        <ContenedorLogo>
            <Logo src="../../public/Maestros del Amor.png" alt="logo" />
            <ContenedorTitulo>
                <Titulo>Maestros del amor</Titulo>
                <Subtitulo>Santa Marta de los Corazones</Subtitulo>
            </ContenedorTitulo>
        </ContenedorLogo>
        <div>
            <Menu>
                <a href='#' >Contáctame</a>
                <a href='#' >Sobre Nosotros</a>
            </Menu>
        </div>
    </Contenedor>
    );
}
 
const Contenedor = styled.div`
    padding: 2.5rem;
    display: grid;
    gap: 1.25rem;
    grid-template-columns: 1fr 1fr;
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

const ContenedorTitulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    height: 8.375rem;
    width: 6.375rem;
`;

const Titulo = styled.h1`
    font-family: "Pacifico",cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 1.875rem;
    padding-left: 1.25rem;
`;

const Subtitulo = styled.h3`
    font-family: "Pacifico",cursive;
    font-weight: 400;
    font-style: normal;
    font-size: .75rem;
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