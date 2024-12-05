import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pagina1 from '../Components/Screens/Pagina1'
import Pagina2 from '../Components/Screens/Pagina2'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FloatingButton from '../Components/FloatingButton'
import Pagina3 from '../Components/Screens/Pagina3'
import Pagina4 from '../Components/Screens/Pagina4'
import { RecomendacionProvider } from "../context/RecomendacionContext";


const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <RecomendacionProvider>
   <Routes>
        <Route element={<Pagina1 />} path="/Index" />
        <Route element={<Pagina2 />} path="/Busqueda" />
        <Route element={<Pagina3 />} path="/Mapa" />
        <Route element={<Pagina4 />} path="/Tienda" />
        <Route element={<Pagina1 />} path="/" />
        <Route element={<div>Página no encontrada</div>} path="*" />
</Routes>
</RecomendacionProvider>
      <FloatingButton/>
      <Footer/>
      </>
  )
}


export default AppRouter