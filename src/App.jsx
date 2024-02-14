import { useState } from 'react'
import React from 'react';
import Header from './Components/Header';
import Anuncios from './Components/Anuncios';
import SobreNosotros from './Components/SobreNosotros';
import Servicios from './Components/Servicios';
import Contactame from './Components/Contactame';


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
    </>
    
  )
}

export default App
