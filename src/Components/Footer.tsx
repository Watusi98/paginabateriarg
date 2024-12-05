import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Footer fijo */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor: '#202123',
          color: '#fff',
          textAlign: 'center',
          padding: '10px',
          boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <p>Copyright © {new Date().getFullYear()} - Creado por Agustin Silva</p>
      </footer>

      {/* Botón flotante */}
      <button
  onClick={scrollToTop}
  style={{
    position: "fixed",
    bottom: "70px",
    left: "20px",
    backgroundColor: "#FFFF00", // Fondo para mejor contraste
    color: "#000000", // Flecha
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Sombra más pronunciada
    cursor: "pointer",
    fontSize: "24px", // Flecha más grande
    fontWeight: "bold", // Flecha más gruesa
    transition: "transform 0.3s, background-color 0.3s", // Animación suave
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#FFFF00")} // Cambio de color al pasar el cursor
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
  aria-label="Scroll to top"
> 
  ↑
</button>

    </div>
  );
};

export default Footer;
