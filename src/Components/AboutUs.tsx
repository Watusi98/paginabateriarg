import React from "react";

const AboutUs = () => {
  return (
    <section style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.title}>Acerca de Nosotros</h1>
          <p style={styles.text}>
            En <strong>Baterías a Domicilio RG</strong>, nos dedicamos a brindarte
            soluciones rápidas y confiables cuando más las necesitas. Con más de 6
            años de experiencia, somos expertos en el servicio de baterías a
            domicilio. Nuestro compromiso es llegar hasta donde estés, ya sea en tu
            casa o en el lugar donde te encuentres varado, para instalar la batería y
            realizar un chequeo completo del alternador, garantizando que todo
            funcione a la perfección.
          </p>
          <p style={styles.text}>
            Nuestro objetivo es hacerte la vida más fácil, con atención
            personalizada, rapidez y sin costos adicionales por el servicio en tu
            ubicación. ¡Confía en nosotros para mantener tu vehículo en marcha!
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100vh", // Abarca toda la altura de la pantalla
    backgroundImage: "url('https://media.giphy.com/media/fSRQtBAzrPokPCItuu/giphy.gif?cid=790b7611dofdciltr0zhbsq8j4xov0rl04gbgkfs1kb1cs0p&ep=v1_gifs_search&rid=giphy.gif&ct=g')", // Ruta al GIF
    backgroundSize: "cover", // El GIF cubre todo el fondo
    backgroundPosition: "center", // Centrado del GIF
    backgroundRepeat: "no-repeat", // Evita repeticiones
    position: "relative", // Para colocar la superposición
    color: "#fff",
    textAlign: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Capa semitransparente para mejor contraste
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo semitransparente para texto
    borderRadius: "10px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffcc00",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#fff",
    marginBottom: "15px",
  },
};

export default AboutUs;