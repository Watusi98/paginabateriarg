import React, { createContext, useState, useContext } from "react";

// Definición del tipo para el valor del contexto
interface RecomendacionContextType {
  bateriaRecomendada: any; // Cambia "any" por el tipo exacto de tus productos si tienes un modelo definido
  setBateriaRecomendada: (bateria: any) => void; // Cambia "any" aquí también si tienes tipos
}

// Creación del contexto con un valor inicial vacío
const RecomendacionContext = createContext<RecomendacionContextType | null>(null);

// Proveedor del contexto
export const RecomendacionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bateriaRecomendada, setBateriaRecomendada] = useState<any>(null);

  return (
    <RecomendacionContext.Provider value={{ bateriaRecomendada, setBateriaRecomendada }}>
      {children}
    </RecomendacionContext.Provider>
  );
};

// Hook para consumir el contexto
export const useRecomendacion = () => {
  const context = useContext(RecomendacionContext);
  if (!context) {
    throw new Error("useRecomendacion debe usarse dentro de RecomendacionProvider");
  }
  return context;
};
