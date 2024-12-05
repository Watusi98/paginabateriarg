import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecomendacion } from "../context/RecomendacionContext";


const HeroBusqueda = () => {
  const [formData, setFormData] = useState({ marca: "", modelo: "", año: "" });
  const navigate = useNavigate(); // Para redirigir
  const { setBateriaRecomendada } = useRecomendacion();
  
type DatosVehiculos = {
  [marca: string]: string[]; // Las claves son de tipo string (marcas), y los valores son arreglos de modelos
};

type DatosBaterias = {
  [marca: string]: {
    [modelo: string]: {
      [año: string]: string; // Nombre o código de la batería
    };
  };
};

// Datos para marcas y modelos
const datosVehiculos: DatosVehiculos = {
  AlfaRomeo: ["Giulia","Stelvio","Tonale (híbrido)"

  ],
  Audi: ["A1","A3","A4","A5","A6","Q3","Q5","Q7","Q8","RS 3"

  ],
  BMW: ["Serie 1","Serie 2","Serie 3","Serie 4","Serie 5","Serie 7","X1","X3","X5","X6","X7","Z4"

  ],
  Chevrolet: ["Aveo", "Camaro", "Captiva", "Celta", "Chevrolet C10", "Chevrolet C20", "Colorado", "Corvette", "Cruze", "Malibu", "Onix", "S10",
     "Spark", "Suburban", "Tahoe", "Trax", "Traverse","Spin","Trailblazer", "Tracker", "Montana"
    ],
  Citroen: ["Berlingo", "C1", "C3", "C4", "C5", "C5 Aircross", "C6", "DS4", "Evasion", "Jumpy", "Saxo", "SpaceTourer", "Xantia", "Xsara"

  ],
  Dodge: ["Journey","RAM 1500","RAM 2500","Renegade"

  ],
  Fiat: ["500", "600", "1600", "Abarth", "Argo", "Bravo", "Cinquecento", "Cronos", "Doblo", "Fiorino", "Idea", "Linea", "Mobi", "Palio", "Punto",
     "Qubo", "Seicento", "Siena", "Strada", "Tempra", "Tipo", "Toro", "Uno"
    ],
  Ford: ["Bronco", "Edge", "Escort", "F-150", "F100", "F4000", "F150", "Fiesta", "Focus", "Galaxy", "Kuga", "Maverick", "Mondeo", "Mustang",
     "Ranger", "S-MAX", "Transit", "WindStar", "Ka", "Ka", "Laser", "Orion", "Taunus", "Torino", "Verona", "Explorer", "Escape"
    ],
  Honda: ["Accord", "Civic", "City", "CR-V", "Fit", "HR-V", "Jazz", "Legend", "Odyssey", "Passport", "Pilot", "Prelude", "Ridgeline", "Stream", "Vigor"

  ],
  Iveco: ["Cursor", "Daily", "Eurocargo", "Eurotech", "Massif", "PowerStar", "S-Way", "Stralis", "Trakker", "TurboDaily", "X-Way"

  ],
  Jeep: ["Compass","Cherokee","Grand Cherokee","Wrangler"

  ],
  Kia: ["Seltos","Sportage","Niro (eléctrico)","Sorento","Stinger"

  ],
  MercedesBenz: ["Actros", "Clase A", "Clase B", "Clase C", "Clase E", "CLA", "CLK", "GLA", "GLB", "GLC", "GLE", "SLS AMG", "SL", "Sprinter",
     "Viano", "Vito"
    ],
  Mitsubishi: ["L200","Outlander","Montero"

  ],
  Nissan: ["Altima", "Cube", "Frontier", "Juke", "Kicks", "March", "Maxima", "Murano", "Navara", "Pathfinder", "Sentra", "Skyline", "Titan",
     "Versa", "X-Trail", "Tiida"
    ],
  Peugeot: ["106", "2008", "205", "206", "207", "3008", "306", "307", "308", "4008", "405", "406", "407", "5008", "504", "508", "607", "806",
     "Boxer", "Expert", "Hoggar", "Partner", "RCZ", "Rifter"
    ],
  Renault: ["Clio", "Duster", "Espace", "Kangoo", "Laguna", "Logan", "Megane", "Oroch", "R12", "R18", "R19", "R21", "R4", "R6", "R9", "Sandero",
     "Scenic", "Symbol", "Twingo", "Trafic"
    ],
  Scania: ["Citywide", "Griffin", "Interlink", "OmniExpress", "Serie G", "Serie P", "Serie R", "Serie S", "Streamline", "Touring", "V8"

  ],
  Toyota: ["Avensis", "Camry", "Celica", "C-HR", "Corolla", "Fortuner", "Hiace", "Hilux", "Land Cruiser", "Noah", "Prius", "RAV4", "Supra",
     "Tacoma", "Tundra", "Yaris"
    ],
  Volkswagen: ["Amarok", "Atlas", "Beetle", "Fox", "Golf", "Gol", "Gol Trend", "ID.4", "Jetta", "Polo", "Passat", "Saveiro", "Sharan",
     "Tiguan", "T-Cross", "Touareg", "Transporter", "Up!", "Virtus"
    ],
  Volvo: ["XC40","XC60","XC90","V60"

  ],
  Suzuki: ["Alto", "APV", "Baleno", "Carry", "Celerio", "Dzire", "Ertiga", "Esteem", "Grand Vitara", "Ignis", "Jimny", "Kizashi",
     "Liana", "Samurai", "S-Cross", "Swift", "Verona", "Wagon R+", "XL7", "SX4"
    ]
};

// Datos para baterías
const datosBaterias: DatosBaterias = {
  AlfaRomeo: {
    Giulia: generarBaterias("Batería 65A"),
    Stelvio: generarBaterias("Batería 65A"),
    Tonale: generarBaterias("Batería 75A"),
  },
  Audi: {
    A1: generarBaterias("Batería 65A"),
    A3: generarBaterias("Batería 65A"),
    A4: generarBaterias("Batería 75A"),
    A5: generarBaterias("Batería 75A"),
    A6: generarBaterias("Batería 75A"),
    Q3: generarBaterias("Batería 75A"),
    Q5: generarBaterias("Batería 95A"),
    Q7: generarBaterias("Batería 95A"),
    Q8: generarBaterias("Batería 95A"),
    RS3: generarBaterias("Batería 95A"),
  },
  BMW: {
    Serie1: generarBaterias("Batería 75A"),
    Serie2: generarBaterias("Batería 75A"),
    Serie3: generarBaterias("Batería 75A"),
    Serie4: generarBaterias("Batería 75A"),
    Serie5: generarBaterias("Batería 95A"),
    Serie7: generarBaterias("Batería 95A"),
    X1: generarBaterias("Batería 95A"),
    X3: generarBaterias("Batería 95A"),
    X5: generarBaterias("Batería 95A"),
    X6: generarBaterias("Batería 95A"),
    X7: generarBaterias("Batería 95A"),
    Z4: generarBaterias("Batería 95A"),
  },
  Dodge: {
    Journey: generarBaterias("Batería 65A"),
    RAM1500: generarBaterias("Batería 95A"),
    RAM2500: generarBaterias("Batería 95A"),
  },
  Jeep: {
    Compass: generarBaterias("Batería 75A"),
    Cherokee: generarBaterias("Batería 75A"),
    GrandCherokee: generarBaterias("Batería 95A"),
    Wrangler: generarBaterias("Batería 95A"),
    Renegade: generarBaterias("Batería 65A"),
  },
  Kia: {
    Seltos: generarBaterias("Batería 75A"),
    Sportage: generarBaterias("Batería 100A"),
    Niro: generarBaterias("Batería 95A"),
    Sorento: generarBaterias("Batería 100A"),
    Stinger: generarBaterias("Batería 95A"),
  },
  Mitsubishi: {
    L200: generarBaterias("Batería 95A"),
    Outlander: generarBaterias("Batería 95A"),
    Montero: generarBaterias("Batería 95A"),
  },
  Ram: {
    RAM1500: generarBaterias("Batería 95Ah"),
    RAM2500: generarBaterias("Batería 95Ah"),
  },
  Volvo: {
    XC40: generarBaterias("Batería 75A"),
    XC60: generarBaterias("Batería 95A"),
    XC90: generarBaterias("Batería 95A"),
    V60: generarBaterias("Batería 75A"),
  },
  Toyota: {
    Corolla: generarBaterias("Batería 50A"),
    Hilux: generarBaterias("Batería 110A"),
    RAV4: generarBaterias("Batería 110A"),
    Camry: generarBaterias("Batería 95A"),
    "Land Cruiser": generarBaterias("Batería 95A"),
    Prius: generarBaterias("Batería 50A"),
    Yaris: generarBaterias("Batería 50A"),
    Fortuner: generarBaterias("Batería 95A"),
    Avensis: generarBaterias("Batería 65A"),
    Tacoma: generarBaterias("Batería 100A"),
    "C-HR": generarBaterias("Batería 75A"),
    Tundra: generarBaterias("Batería 95A"),
    Supra: generarBaterias("Batería 65A"),
    Celica: generarBaterias("Batería 65A"),
    Etios: generarBaterias("Batería 50A"),
    Noah: generarBaterias("Batería 50A"),
    Hiace: generarBaterias("Batería 75A"),
  },
  Ford: {
    Fiesta: generarBaterias("Batería 50A"),
    Focus: generarBaterias("Batería 75A"),
    Ranger: generarBaterias("Batería 95A"),
    EcoSport: generarBaterias("Batería 50A"),
    Explorer: generarBaterias("Batería 95A"),
    "F-150": generarBaterias("Batería 95A"),
    Mustang: generarBaterias("Batería 95A"),
    Escape: generarBaterias("Batería 75A"),
    Mondeo: generarBaterias("Batería 65A"),
    Bronco: generarBaterias("Batería 95A"),
    Edge: generarBaterias("Batería 75A"),
    Galaxy: generarBaterias("Batería 65A"),
    Transit: generarBaterias("Batería 95A"),
    Kuga: generarBaterias("Batería 75A"),
    "S-MAX": generarBaterias("Batería 95A"),
    Ka: generarBaterias("Batería 50A"),
    F100: generarBaterias("Batería 95A"),
    F4000: generarBaterias("Batería 110A"),
    Maverick: generarBaterias("Batería 95A"),
    Torino: generarBaterias("Batería 75A"),
    Escort: generarBaterias("Batería 65A"),
  },
  Chevrolet: {
    Onix: generarBaterias("Batería 50A"),
    Cruze: generarBaterias("Batería 65A"),
    S10: generarBaterias("Batería 95A"),
    Spark: generarBaterias("Batería 35A"),
    Malibu: generarBaterias("Batería 75A"),
    Silverado: generarBaterias("Batería 95A"),
    Trax: generarBaterias("Batería 65A"),
    Equinox: generarBaterias("Batería 65A"),
    Captiva: generarBaterias("Batería 75A"),
    Traverse: generarBaterias("Batería 95A"),
    Colorado: generarBaterias("Batería 95A"),
    Aveo: generarBaterias("Batería 50A"),
    Tahoe: generarBaterias("Batería 95A"),
    Suburban: generarBaterias("Batería 95A"),
    Camaro: generarBaterias("Batería 95A"),
    Corvette: generarBaterias("Batería 95A"),
    Corsa: generarBaterias("Batería 65A"),
    Celta: generarBaterias("Batería 65A"),
    C10: generarBaterias("Batería 95A"),
    C20: generarBaterias("Batería 95A"),
    Trailblazer: generarBaterias("Batería 95A"),
    Tracker: generarBaterias("Batería 75Ah"),
    Montana: generarBaterias("Batería 95A"),
  },
    Fiat: {
      Palio: generarBaterias("Batería 65A"),
      Cronos: generarBaterias("Batería 65A"),
      Toro: generarBaterias("Batería 75A"),
      Strada: generarBaterias("Batería 65A"),
      "500": generarBaterias("Batería 50A"),
      Ducato: generarBaterias("Batería 95A"),
      Uno: generarBaterias("Batería 65A"),
      Argo: generarBaterias("Batería 65A"),
      Mobi: generarBaterias("Batería 50A"),
      Siena: generarBaterias("Batería 65A"),
      Punto: generarBaterias("Batería 50A"),
      Linea: generarBaterias("Batería 50A"),
      Fiorino: generarBaterias("Batería 65A"),
      Tempra: generarBaterias("Batería 65A"),
      Tipo: generarBaterias("Batería 65A"),
      Doblo: generarBaterias("Batería 65A"),
      Bravo: generarBaterias("Batería 65A"),
      "600": generarBaterias("Batería 75A"),
      "1600": generarBaterias("Batería 50A"),
      Idea: generarBaterias("Batería 65A"),
      Abarth: generarBaterias("Batería 50A"),
      Seicento: generarBaterias("Batería 50A"),
      Qubo: generarBaterias("Batería 50A"),
    },
    Peugeot: {
      "208": generarBaterias("Batería 50A"),
      "3008": generarBaterias("Batería 75A"),
      Partner: generarBaterias("Batería 75A"),
      "2008": generarBaterias("Batería 75A"),
      "508": generarBaterias("Batería 75A"),
      Expert: generarBaterias("Batería 95A"),
      "5008": generarBaterias("Batería 95A"),
      Rifter: generarBaterias("Batería 75A"),
      "206": generarBaterias("Batería 65A"),
      "207": generarBaterias("Batería 65A"),
      "307": generarBaterias("Batería 65A"),
      "308": generarBaterias("Batería 65A"),
      "406": generarBaterias("Batería 65A"),
      "407": generarBaterias("Batería 75A"),
      "607": generarBaterias("Batería 75A"),
      "806": generarBaterias("Batería 95A"),
      "504": generarBaterias("Batería 95A"),
      "408": generarBaterias("Batería 75A"),
      Hoggar: generarBaterias("Batería 65A"),
      Boxer: generarBaterias("Batería 95A"),
      RCZ: generarBaterias("Batería 65A"),
    },
    Citroën: {
      C3: generarBaterias("Batería 50A"),
      C4: generarBaterias("Batería 65A"),
      Berlingo: generarBaterias("Batería 75A"),
      "C5 Aircross": generarBaterias("Batería 75A"),
      C1: generarBaterias("Batería 50A"),
      C6: generarBaterias("Batería 75A"),
      Jumpy: generarBaterias("Batería 75A"),
      SpaceTourer: generarBaterias("Batería 95A"),
      Xsara: generarBaterias("Batería 65A"),
      Saxo: generarBaterias("Batería 50A"),
      Xantia: generarBaterias("Batería 65A"),
      Evasion: generarBaterias("Batería 65A"),
      C15: generarBaterias("Batería 50A"),
      C8: generarBaterias("Batería 75A"),
      C5: generarBaterias("Batería 65A"),
      DS4: generarBaterias("Batería 50A"),
    },
    Honda: {
      Civic: generarBaterias("Batería 35A"),
      "CR-V": generarBaterias("Batería 35A"),
      "HR-V": generarBaterias("Batería 65A"),
      Accord: generarBaterias("Batería 35A"),
      Pilot: generarBaterias("Batería 35A"),
      Fit: generarBaterias("Batería 35A"),
      Ridgeline: generarBaterias("Batería 35A"),
      Odyssey: generarBaterias("Batería 35A"),
      Prelude: generarBaterias("Batería 35A"),
      Legend: generarBaterias("Batería 35A"),
      Element: generarBaterias("Batería 35A"),
      Passport: generarBaterias("Batería 35A"),
      Stream: generarBaterias("Batería 35A"),
      City: generarBaterias("Batería 35A"),
      Jazz: generarBaterias("Batería 35A"),
      Vigor: generarBaterias("Batería 35A"),
    },
    Iveco: {
      Daily: generarBaterias("Batería 110A"),
      Eurocargo: generarBaterias("Batería 110A"),
      Stralis: generarBaterias("Batería 180A"),
      Trakker: generarBaterias("Batería 180A"),
      "S-Way": generarBaterias("Batería 180A"),
      PowerStar: generarBaterias("Batería 180A"),
      TurboDaily: generarBaterias("Batería 110A"),
      "X-Way": generarBaterias("Batería 110A"),
      Massif: generarBaterias("Batería 110A"),
      Eurotech: generarBaterias("Batería 110A"),
      Cursor: generarBaterias("Batería 110A"),
    },
    MercedesBenz: {
      "Clase A": generarBaterias("Batería 65A"),
      "Clase B": generarBaterias("Batería 75A"),
      "Clase C": generarBaterias("Batería 75A"),
      "Clase E": generarBaterias("Batería 95A"),
      Sprinter: generarBaterias("Batería 110A"),
      Vito: generarBaterias("Batería 95A"),
      GLC: generarBaterias("Batería 95A"),
      Actros: generarBaterias("Batería 180A"),
      GLA: generarBaterias("Batería 95A"),
      GLB: generarBaterias("Batería 95A"),
      GLE: generarBaterias("Batería 95A"),
      "SLS AMG": generarBaterias("Batería 95A"),
      CLK: generarBaterias("Batería 95A"),
      CLA: generarBaterias("Batería 75A"),
      SL: generarBaterias("Batería 95A"),
      Viano: generarBaterias("Batería 95A"),
    },
    Nissan: {
      Versa: generarBaterias("Batería 50A"),
      "X-Trail": generarBaterias("Batería 65A"),
      Frontier: generarBaterias("Batería 65A"),
      March: generarBaterias("Batería 50A"),
      Altima: generarBaterias("Batería 65A"),
      Kicks: generarBaterias("Batería 50A"),
      Pathfinder: generarBaterias("Batería 95A"),
      Sentra: generarBaterias("Batería 50A"),
      Skyline: generarBaterias("Batería 35A"),
      Juke: generarBaterias("Batería 50A"),
      Titan: generarBaterias("Batería 75A"),
      Navara: generarBaterias("Batería 65A"),
      Murano: generarBaterias("Batería 65A"),
      Cube: generarBaterias("Batería 35A"),
      Maxima: generarBaterias("Batería 65A"),
      Tiida: generarBaterias("Batería 65A"),
    },
    Renault: {
      Kwid: generarBaterias("Batería 50A"),
      Duster: generarBaterias("Batería 65A"),
      Logan: generarBaterias("Batería 65A"),
      Sandero: generarBaterias("Batería 65A"),
      Oroch: generarBaterias("Batería 65Ah"),
      Kangoo: generarBaterias("Batería 75A"),
      Captur: generarBaterias("Batería 65A"),
      Clio: generarBaterias("Batería 65A"),
      Twingo: generarBaterias("Batería 50A"),
      Megane: generarBaterias("Batería 75A"),
      Scenic: generarBaterias("Batería 75A"),
      Laguna: generarBaterias("Batería 95A"),
      Safrane: generarBaterias("Batería 65A"),
      Espace: generarBaterias("Batería 65A"),
      Symbol: generarBaterias("Batería 65A"),
      Trafic: generarBaterias("Batería 95A"),
      "R19": generarBaterias("Batería 75A"),
      "R12": generarBaterias("Batería 65A"),
      "R18": generarBaterias("Batería 75A"),
      "R9": generarBaterias("Batería 65A"),
      "R11": generarBaterias("Batería 65A"),
      "R4": generarBaterias("Batería 50A"),
      "R6": generarBaterias("Batería 50A"),
      "R21": generarBaterias("Batería 65A"),
    },
    Scania: {
      "Serie P": generarBaterias("Batería 180A"),
      "Serie G": generarBaterias("Batería 180A"),
      "Serie R": generarBaterias("Batería 180A"),
      "Serie S": generarBaterias("Batería 180A"),
      Streamline: generarBaterias("Batería 180A"),
      Griffin: generarBaterias("Batería 180A"),
      V8: generarBaterias("Batería 220A"),
      Interlink: generarBaterias("Batería 180A"),
      Citywide: generarBaterias("Batería 180A"),
      Touring: generarBaterias("Batería 180A"),
      Irizar: generarBaterias("Batería 180A"),
      OmniExpress: generarBaterias("Batería 180A"),
    },
    Volkswagen: {
      Gol: generarBaterias("Batería 65A"),
      Tiguan: generarBaterias("Batería 75A"),
      Amarok: generarBaterias("Batería 95A"),
      Jetta: generarBaterias("Batería 65A"),
      Polo: generarBaterias("Batería 65A"),
      Virtus: generarBaterias("Batería 65A"),
      Touareg: generarBaterias("Batería 75A"),
      Passat: generarBaterias("Batería 95A"),
      Golf: generarBaterias("Batería 75A"),
      Beetle: generarBaterias("Batería 65A"),
      "T-Cross": generarBaterias("Batería 65A"),
      Atlas: generarBaterias("Batería 95A"),
      "ID.4": generarBaterias("Batería 75A"),
      Transporter: generarBaterias("Batería 95A"),
      Fox: generarBaterias("Batería 65A"),
      Sharan: generarBaterias("Batería 65A"),
      "Up!": generarBaterias("Batería 50A"),
      "Gol Trend": generarBaterias("Batería 65A"),
      Saveiro: generarBaterias("Batería 65A"),
    },
    Suzuki: {
      Alto: generarBaterias("Batería 35A"),
      Baleno: generarBaterias("Batería 35A"),
      Celerio: generarBaterias("Batería 35A"),
      Swift: generarBaterias("Batería 35A"),
      Ignis: generarBaterias("Batería 65A"),
      Dzire: generarBaterias("Batería 35A"),
      SX4: generarBaterias("Batería 65A"),
      Ertiga: generarBaterias("Batería 65A"),
      Vitara: generarBaterias("Batería 65A"),
      GrandVitara: generarBaterias("Batería 65A"),
      Jimny: generarBaterias("Batería 35A"),
      "S-Cross": generarBaterias("Batería 65A"),
      Kizashi: generarBaterias("Batería 65A"),
      XL7: generarBaterias("Batería 75Ah"),
      Carry: generarBaterias("Batería 35A"),
      Samurai: generarBaterias("Batería 35A"),
      Esteem: generarBaterias("Batería 65A"),
      Forenza: generarBaterias("Batería 65A"),
      Verona: generarBaterias("Batería 65A"),
      "Wagon R+": generarBaterias("Batería 35A"),
      APV: generarBaterias("Batería 65A"),
      Liana: generarBaterias("Batería 35A"),
    }
  };

function generarBaterias(base: string): { [año: string]: string } {
  const años = Array.from({ length: 2024 - 1990 + 1 }, (_, i) => (1990 + i).toString());
  return años.reduce((acc, año) => {
    acc[año] = `${base} (${año})`;
    return acc;
  }, {} as { [año: string]: string });
}
  const obtenerBateria = () => {
    const { marca, modelo, año } = formData;
    if (!marca || !modelo || !año) return "Selecciona todos los campos.";
    return `${marca} ${modelo} ${año}`;
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    // Actualizar el estado basado en el campo modificado
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "marca" && { modelo: "", año: "" }), // Reinicia modelo y año si cambia la marca
      ...(name === "modelo" && { año: "" }), // Reinicia año si cambia el modelo
    }));
  };
  const añosVehiculos = Array.from({ length: 2024 - 1990 + 1 }, (_, i) => 1990 + i);
  const handleBuscarBateria = () => {
    const bateria = obtenerBateria();
    if (bateria !== "Selecciona todos los campos.") {
      navigate("/Tienda", { state: { bateria } }); // Redirige a Tienda
    } else {
      alert("Por favor, completa todos los campos.");
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
          {Object.keys(datosVehiculos).map((marca) => (
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
          className={`p-3 rounded-md bg-gray-800 text-white border border-gray-600 w-64 ${
            !formData.marca && "opacity-50 cursor-not-allowed"
          }`}
        >
          <option value="">Selecciona un modelo</option>
          {formData.marca &&
            datosVehiculos[formData.marca]?.map((modelo) => (
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
          className={`p-3 rounded-md bg-gray-800 text-white border border-gray-600 w-64 ${
            !formData.modelo && "opacity-50 cursor-not-allowed"
          }`}
        >
          <option value="">Selecciona un año</option>
          {añosVehiculos.map((año) => (
            <option key={año} value={año}>
              {año}
            </option>
          ))}
        </select>
      </div>
      <div>
      <button
        onClick={handleBuscarBateria}
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
      >
        Buscar Batería
      </button>
    </div>
    </section>
    
  );
};

export default HeroBusqueda;
