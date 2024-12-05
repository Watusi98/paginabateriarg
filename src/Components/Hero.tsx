import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>

<div className="carousel w-full pt-40">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://scontent.fmdz1-2.fna.fbcdn.net/v/t39.30808-6/309502898_772345807526338_9053266418863358510_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF_0R8VAv9Ei09qMUxgIXnsdvfUD6arDOl299QPpqsM6eHCbdDmT3ZiJRJfzYytjRdqdmIiNOljxgbCEOYdgPRH&_nc_ohc=cv_-OBqSsWkQ7kNvgHZh2ZV&_nc_zt=23&_nc_ht=scontent.fmdz1-2.fna&_nc_gid=AbgY7zFb-IeSbLWTDZlR2Lq&oh=00_AYBEmGFkJi-otT9YdlEH4zyzfo4xL-QT3TkR_jXCNfbSww&oe=67577228"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
      <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-4 text-5xl font-bold">¡Las mejores baterías al mejor precio!</h1>
      <p className="mb-4">
      Entrega a domicilio rápida y confiable
      </p>
      <button
    className="btn btn-primary"
    onClick={() => (window.location.href = "/Busqueda")}
  >
    Busca tu batería
  </button>
    </div>
  </div>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://scontent.fmdz1-2.fna.fbcdn.net/v/t39.30808-6/309502898_772345807526338_9053266418863358510_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF_0R8VAv9Ei09qMUxgIXnsdvfUD6arDOl299QPpqsM6eHCbdDmT3ZiJRJfzYytjRdqdmIiNOljxgbCEOYdgPRH&_nc_ohc=cv_-OBqSsWkQ7kNvgHZh2ZV&_nc_zt=23&_nc_ht=scontent.fmdz1-2.fna&_nc_gid=AbgY7zFb-IeSbLWTDZlR2Lq&oh=00_AYBEmGFkJi-otT9YdlEH4zyzfo4xL-QT3TkR_jXCNfbSww&oe=67577228"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://scontent.fmdz1-2.fna.fbcdn.net/v/t39.30808-6/309502898_772345807526338_9053266418863358510_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF_0R8VAv9Ei09qMUxgIXnsdvfUD6arDOl299QPpqsM6eHCbdDmT3ZiJRJfzYytjRdqdmIiNOljxgbCEOYdgPRH&_nc_ohc=cv_-OBqSsWkQ7kNvgHZh2ZV&_nc_zt=23&_nc_ht=scontent.fmdz1-2.fna&_nc_gid=AbgY7zFb-IeSbLWTDZlR2Lq&oh=00_AYBEmGFkJi-otT9YdlEH4zyzfo4xL-QT3TkR_jXCNfbSww&oe=67577228"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://scontent.fmdz1-2.fna.fbcdn.net/v/t39.30808-6/309502898_772345807526338_9053266418863358510_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF_0R8VAv9Ei09qMUxgIXnsdvfUD6arDOl299QPpqsM6eHCbdDmT3ZiJRJfzYytjRdqdmIiNOljxgbCEOYdgPRH&_nc_ohc=cv_-OBqSsWkQ7kNvgHZh2ZV&_nc_zt=23&_nc_ht=scontent.fmdz1-2.fna&_nc_gid=AbgY7zFb-IeSbLWTDZlR2Lq&oh=00_AYBEmGFkJi-otT9YdlEH4zyzfo4xL-QT3TkR_jXCNfbSww&oe=67577228"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </>
  )
}

export default Hero