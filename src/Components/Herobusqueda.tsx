import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecomendacion } from "../context/RecomendacionContext";

async function POST(url: string, data: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    throw error;
  }
}

const HeroBusqueda = () => {
  const [formData, setFormData] = useState({ marca: "", modelo: "", año: "" });
  const [vehiculos, setVehiculos] = useState<{ marca: string; modelos: string[] }[]>([]);
  const navigate = useNavigate();
  const { setBateriaRecomendada } = useRecomendacion();

  const añosVehiculos = Array.from({ length: 2024 - 1990 + 1 }, (_, i) => 1990 + i);

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const response = await fetch("http://localhost:3000/vehiculos");
        const data = await response.json();
        setVehiculos(data);
      } catch (error) {
        console.error("Error al obtener los datos de vehículos:", error);
      }
    };

    fetchVehiculos();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "marca" && { modelo: "", año: "" }),
      ...(name === "modelo" && { año: "" }),
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await POST("http://localhost:3000/Busqueda", formData);
      console.log("Respuesta del servidor:", response);
      if (response.bateria) {
        setBateriaRecomendada(response.bateria);
        navigate("/Tienda", { state: { bateria: response.bateria } });
      } else {
        alert("No se encontró una batería recomendada.");
      }
    } catch (error) {
      alert("Hubo un problema al enviar los datos. Intenta nuevamente.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Encuentra la batería ideal para tu vehículo</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          name="marca"
          value={formData.marca}
          onChange={handleInputChange}
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 w-64"
        >
          <option value="">Selecciona una marca</option>
          {vehiculos.map(({ marca }) => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>
        <select
          name="modelo"
          value={formData.modelo}
          onChange={handleInputChange}
          disabled={!formData.marca}
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 w-64"
        >
          <option value="">Selecciona un modelo</option>
          {vehiculos
            .find((v) => v.marca === formData.marca)
            ?.modelos.map((modelo) => (
              <option key={modelo} value={modelo}>
                {modelo}
              </option>
            ))}
        </select>
        <select
          name="año"
          value={formData.año}
          onChange={handleInputChange}
          disabled={!formData.modelo}
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 w-64"
        >
          <option value="">Selecciona un año</option>
          {añosVehiculos.map((año) => (
            <option key={año} value={año}>
              {año}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="p-3 bg-gray-100 hover:bg-yellow-400 text-black font-semibold py-2 px-8 rounded-md mt-8"
      >
        Buscar
      </button>
    </section>
  );
};

export default HeroBusqueda;
