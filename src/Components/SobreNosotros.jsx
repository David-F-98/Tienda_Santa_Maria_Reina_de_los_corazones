import React from 'react';
import styled from 'styled-components';
import vela from '../img/vela.jpg';

const SobreNosotros = () => {
    return (  
        <ContenedorInicio>
            <Titulo>Sobre Nosotros</Titulo>
            <ContenedorTexto>
                <Parrafo>Somos un equipo de profesionales dedicados a brindar servicios de asesoría y orientación espiritual para ayudarte a mejorar tu vida amorosa, tu salud y tu bienestar. Nuestra misión es ofrecerte soluciones efectivas y personalizadas, basadas en el conocimiento ancestral de la magia, la astrología, el tarot y la numerología. Queremos acompañarte en tu proceso de transformación personal, guiándote hacia el equilibrio, la armonía y la felicidad.</Parrafo>
                <Vela src={vela} alt=""/>
            </ContenedorTexto>
        </ContenedorInicio>
    );
}
 
const ContenedorInicio = styled.div`
    margin: 2.5rem;
`;

const Titulo = styled.h2`
    font-family: "Asul", serif;
    font-weight: 700;
    font-size: 2.5rem;
    font-style: normal;
    text-align: center;
    padding: 0 0 1.875rem;
`;

const ContenedorTexto = styled.div`
    display: flex;
    align-items: center;
`;

const Parrafo = styled.p`
    padding-right: 6.25rem;
`;

const Vela = styled.img`
    width: 600px;
    height: 400px;
`;
export default SobreNosotros;