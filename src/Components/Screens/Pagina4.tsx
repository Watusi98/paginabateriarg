import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FloatingButton from '../FloatingButton'
import Tienda from '../Tienda'
import { Route, Routes } from 'react-router-dom';

const Pagina4 = () => {
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