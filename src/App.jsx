import { useState } from 'react'
import React from 'react';
import Header from './Components/Header';
import Anuncios from './Components/Anuncios';
import Inicio from './Components/Inicio';
import Servicios from './Components/Servicios';
import Contactame from './Components/Contactame';


function App() {
  return (
    <>
      <Header/>
      <main>
        <Anuncios/>
        <Inicio/>
        <Servicios/>
        <Contactame/>
      </main>
    </>
    
  )
}

export default App
