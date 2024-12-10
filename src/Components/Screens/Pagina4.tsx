import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer'
import FloatingButton from '../FloatingButton'
import Tienda from '../Tienda'
import { Route, Routes } from 'react-router-dom';


const Pagina4 = () => {

const Pagina4: React.FC = () => {
  const [baterias, setBaterias] = useState<any[]>([]);

  const traerBaterias = async () => {
    try {
      const res = await fetch('http://localhost:3000/Busqueda');
      const JSONres = await res.json();
      setBaterias(JSONres);
    } catch (error) {
      console.error('Error al traer las baterías:', error);
    }
  };

  useEffect(() => {
    traerBaterias();
  }, []);

  return (
    <div>
      <h1>Listado de Baterías</h1>
      <ul>
        {baterias.map((bateria, index) => (
          <li key={index}>{JSON.stringify(bateria)}</li>
        ))}
      </ul>
    </div>
  );
};

  return ( 
    <>
    <Navbar />
    <Tienda />
    <Footer />
    <FloatingButton />
    </>
  )
}

export default Pagina4