import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuscarBateria = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [año, setAño] = useState("");
  const navigate = useNavigate();

  const handleBuscar = () => {
    // Redirige con parámetros como query string
    navigate(`/tienda?marca=${marca}&modelo=${modelo}&año=${año}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Buscar Batería</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Año"
          value={año}
          onChange={(e) => setAño(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleBuscar}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Buscar batería
        </button>
      </div>
    </div>
  );
};

export default BuscarBateria;
