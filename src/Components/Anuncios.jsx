import React from 'react';
import img1 from './../img/1.jpg';
import img2 from './../img/2.jpg';
import img3 from './../img/3.jpg';
import styled from 'styled-components';

const Anuncios = () => {
    return ( 
      <ContenedorPrincipal>
        <ContenedorSlideShow>
            <Slide>
                <a href="#">
                    <img src={img1} alt="" />
                </a>
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img2} alt="" />
                </a>
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img3} alt="" />
                </a>
            </Slide>
        </ContenedorSlideShow>
        <Controles>
            <Boton >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
            </Boton>
            <Boton $derecho={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
            </Boton>
        </Controles>
      </ContenedorPrincipal>
     );
}

const ContenedorPrincipal = styled.div`
    position: relative;
`;

const ContenedorSlideShow = styled.div`
    display: flex;
    flex-wrap: nowrap;

`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: all.3s ease all;
    z-index: 10;
    max-height: 31.25rem;
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 3.125rem;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover{
        background: rgba(0,0,0,.2);
        path{
            fill: #ffffff
        }
    }

    ${props => props.$derecho ? 'right: 0': 'left:0'}

`;
export default Anuncios;