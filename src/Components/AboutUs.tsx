import React, { CSSProperties } from "react";

const AboutUs = () => {
  return (
    <section style={styles.container}>
      <div style={overlay.container}>
        <div style={content.container}>
          <h1 style={title.container}>Acerca de Nosotros</h1>
          <p style={text.container}>
            En <strong>Baterías a Domicilio RG</strong>, nos dedicamos a brindarte
            soluciones rápidas y confiables cuando más las necesitas. Con más de 6
            años de experiencia, somos expertos en el servicio de baterías a
            domicilio. Nuestro compromiso es llegar hasta donde estés, ya sea en tu
            casa o en el lugar donde te encuentres varado, para instalar la batería y
            realizar un chequeo completo del alternador, garantizando que todo
            funcione a la perfección.
          </p>
          <p style={text.container}>
            Nuestro objetivo es hacerte la vida más fácil, con atención
            personalizada, rapidez y sin costos adicionales por el servicio en tu
            ubicación. ¡Confía en nosotros para mantener tu vehículo en marcha!
          </p>
        </div>
      </div>
    </section>
  );
};

const styles: { container: CSSProperties } = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundImage:
      "url('https://media.giphy.com/media/fSRQtBAzrPokPCItuu/giphy.gif?cid=790b7611dofdciltr0zhbsq8j4xov0rl04gbgkfs1kb1cs0p&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative", // Este es compatible con CSSProperties
    color: "#fff",
    textAlign: "center",
  },
};

const overlay: { container: CSSProperties } = {
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const content: { container: CSSProperties } = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
  },
};

const title: { container: CSSProperties } = {
  container: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffcc00",
  },
};

const text: { container: CSSProperties } = {
  container: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#fff",
    marginBottom: "15px",
  },
};

export default AboutUs;