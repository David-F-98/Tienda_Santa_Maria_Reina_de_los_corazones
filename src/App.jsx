import { useState } from 'react'
import React from 'react';
import Header from './Components/Header';
import Anuncios from './Components/Anuncios';
import SobreNosotros from './Components/SobreNosotros';
import Servicios from './Components/Servicios';
import Contactame from './Components/Contactame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Anuncios/>
        <SobreNosotros/>
        <Servicios/>
        <Contactame/>
      </main>
      <Whathsapp href="https://wa.me/573192481784?text=Hola me gustaría tener más información acerca de sus servicios!!" target='_blank'>
        <FontAwesomeIcon icon={faWhatsapp} style={{color: "#02ac3a",}} />
      </Whathsapp>
    </>
    
  )
}
 const Whathsapp = styled.a`
    position: fixed;
    width: 3.4375rem;
    height: 3.4375rem;
    line-height: 3.4375rem;
    bottom: 1.875rem;
    right: 1.875rem;
    font-size: 2.6rem;
    background: #ffffff;
    border-radius: 3.125rem;
    text-align: center;
    box-shadow: 0 0 .625rem rgba(0,0,0,0.3);
    z-index: 100;

 `;
export default App
