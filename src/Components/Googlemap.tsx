import React from "react";

const GoogleMap = () => {
  return (
     <div style={container.container}>
      {/* Sección del cuadro lateral */}
      <div style={styles.sidebar}>
        <div style={styles.overlay}>
          <h2 style={styles.title}>Entregas a Domicilio</h2>
          <p style={styles.text}>
            En <strong>Baterías a Domicilio RG</strong>, llegamos a donde nos
            necesites. Ya sea en tu casa, trabajo o en la carretera, nuestro
            equipo está listo para asistirte. 🚗🔋
          </p>
          <p style={styles.text}>
            Ofrecemos:
            <ul>
              <li>🚚 Entrega rápida y confiable.</li>
              <li>🔧 Instalación de la batería en el momento.</li>
              <li>🔍 Chequeo completo del alternador.</li>
            </ul>
          </p>
          <p style={styles.text}>
            ¡Confía en nosotros para mantener tu vehículo en marcha, donde sea
            que estés!
          </p>
        </div>
      </div>

      {/* Sección del mapa */}
      <div style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1yH7qD13M2pfqpy3qFsN5JYu7FbUNMBU&ehbc=2E312F"
          width="100%"
          height="96%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

const container: { container: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
};

const sidebar2 = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  sidebar: {
    width: "30%", // Lateral ocupa un 30% del espacio
    position: "relative", // Para posicionar la superposición
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    backgroundImage: "url('https://media.giphy.com/media/e9lgW40xfPRgmHj9Bt/giphy.gif')", // Fondo GIF
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Superposición oscura
    width: "100%",
    height: "100%",
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#ffcc00",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "10px",
    color: "#fff",
  },
  mapContainer: {
    width: "70%", // Mapa ocupa un 70% del espacio
    height: "100%",
  },
};

export default GoogleMap;
