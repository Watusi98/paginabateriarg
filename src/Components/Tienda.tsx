import React, { useState } from "react";
import { FaEye } from "react-icons/fa"; // Importa el ícono del ojo
import { useLocation } from "react-router-dom";
import { useRecomendacion } from "../context/RecomendacionContext";
import { FaCarBattery } from "react-icons/fa6";

const Tienda = () => {
  const { bateriaRecomendada, marca, modelo } = useRecomendacion();
  const [selectedImage, setSelectedImage] = useState<string>(""); // Estado para la imagen seleccionada}

  console.log(bateriaRecomendada)
  const whatsappNumber = "2966503488"; // Reemplaza con tu número de WhatsApp
  const products = [
    {
      id: 1,  
      image: "https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg",
      newImage: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/468441440_1302772117817035_834408877290086733_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5quy7yR5mrEQ7kNvgEGbHXp&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=ArRyS-zpxJLt4e9REI0BShm&oh=00_AYA2REp1o9TG5Fypf6Y2XfWF-L2_GBfSgPrL1WGGB8OlFQ&oe=674C6445",
      title: "Batería 35A",
      description: "12V-35A",
    },
    {
      id: 2,
      image: "https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg",
      newImage: "https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/468442087_1302778887816358_3694876644580719129_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oYow52rFBXUQ7kNvgF4DBBm&_nc_zt=23&_nc_ht=scontent.fmdz4-1.fna&_nc_gid=A70JtUNLwK8Ao8S9Ha5SJV8&oh=00_AYABGRLfSnvVibQkd9UkLmcQAOcWFw9H0lmTTcXBaZywag&oe=674C50C8",
      title: "Batería 50A",
      description: "12V-50A",
    },
    {
      id: 3,
      image: "https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg",
      newImage: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/468527694_1302779357816311_7462579532968860013_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_eZM6F-wJgcQ7kNvgG0l4ZI&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=AF5kjKqk56oNsQWacOHDbYG&oh=00_AYBNNw1MgutnJXJsbobpQVBJcX1gvEmhqWT534kowxOsCA&oe=674C6B38",
      title: "Batería 65A",
      description: "12V-65A",
    },
    {
      id: 4,
      image: "https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg",
      newImage: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/468592449_1302779574482956_6781100187679252988_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZNr0sSp5qPwQ7kNvgHekNpd&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=APvAXot2ZDj7QafIdodNp4s&oh=00_AYCvQgrJJgB1wEhgXzoba9W0TPXPhrF5R8zkbd4SqUZ0Ig&oe=674C3FAF",
      title: "Batería 75A",
      description: "12V-75A",
    },
    {
      id: 5,
      image: "https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg",
      newImage:"https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/468592449_1302779574482956_6781100187679252988_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZNr0sSp5qPwQ7kNvgHekNpd&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=APvAXot2ZDj7QafIdodNp4s&oh=00_AYCvQgrJJgB1wEhgXzoba9W0TPXPhrF5R8zkbd4SqUZ0Ig&oe=674C3FAF",
      title: "Batería 95A",
      description: "12V-95A",
    },
    {
      id: 6,
      image: "https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg",
      newImage:"https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/468368250_1302780131149567_3138838260910948865_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=H1O1yras7jUQ7kNvgH1zg8_&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=APR5kAWulaAO954aa2ayIdY&oh=00_AYCJGh8CCBVO2UzHBDp9PEUwvGy23ZJ9wgXZ8nRxzu8DBw&oe=674C6776",
      title: "Batería 100A",
      description: "12V-100A",
    },
    {
      id: 7,
      image: "https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg",
      newImage:"https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/468368250_1302780131149567_3138838260910948865_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=H1O1yras7jUQ7kNvgH1zg8_&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=APR5kAWulaAO954aa2ayIdY&oh=00_AYCJGh8CCBVO2UzHBDp9PEUwvGy23ZJ9wgXZ8nRxzu8DBw&oe=674C6776",
      title: "Batería 110A",
      description: "12V-110A",
    },
    {
     id: 8,
     image: "https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg",
     newImage:"https://scontent.fmdz1-2.fna.fbcdn.net/v/t39.30808-6/468442282_1302780484482865_6340948068909815369_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHTgFwRIjNVzbIV3So5n3QgoQgpEtyVI9yhCCkS3JUj3DPIuk4t0ECaxXgPdRNnbqzsPxVrk3_vbi-PSxHHQbeU&_nc_ohc=ZcY_2gH4UnIQ7kNvgEXx6gu&_nc_zt=23&_nc_ht=scontent.fmdz1-2.fna&_nc_gid=AEuAa2mmuGIQ-69fcXW7IYK&oh=00_AYBoC0nxHfnyWoHYOhfMuOuT1PQFkR7EwFj4sgQ2nU6Sfw&oe=6757578C",
     title: "Batería 180A",
     description: "12V-180A",
    },
];
const handleImageClick = (imageUrl: string) => {
  setSelectedImage(imageUrl); // Cambia la imagen seleccionada
};
return (
  <div className="bg-black py-8 pt-20 relative">
    {/* Fondo GIF */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://media.giphy.com/media/fSRQtBAzrPokPCItuu/giphy.gif?cid=790b7611dofdciltr0zhbsq8j4xov0rl04gbgkfs1kb1cs0p&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Fondo GIF"
        className="w-full h-full object-cover opacity-30"
      />
    </div>

    {/* Contenido */}
    {bateriaRecomendada && (
      <div className="relative text-center mb-8 pt-20">
        {/* Título */}
        <h2 className="text-white text-lg mb-6">
          Batería Recomendada para su {marca} {modelo}: {bateriaRecomendada}
        </h2>

        {/* Tarjeta con la batería */}
        <div className="bg-base-100 shadow-xl border-4 border-white p-3 max-w-xs mx-auto flex flex-col items-center justify-center rounded-lg">
          {/* Imagen */}
          <figure className="px-5 pt-8">
            <img
              src={bateriaRecomendada.image}
              alt={bateriaRecomendada.title}
              className="rounded-xl w-full"
            />
          </figure>

          {/* Detalles de la batería */}
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-black text-white mt-4">
            <h2 className="text-lg font-semibold mb-2">{bateriaRecomendada.title}</h2>
            <p className="text-sm mb-4">{bateriaRecomendada.description}</p>
            <FaCarBattery className="text-9xl text-yellow mb-4" />
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20para%20mi%20vehiculo:%20${marca},${modelo}%20la%20${bateriaRecomendada}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            >
              Consultar Stock
            </a>
          </div>
        </div>
      </div>
    )}
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow-xl border-4 border-white p-3 bg-center max-w-xs mx-auto"
            >
              <figure className="px-5 pt-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-xl w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-lg">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <div className="card-actions flex justify-between w-full">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20el%20producto:%20${product.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm"
                  >
                    Consultar Stock
                  </a>
                  <button
                    className="btn btn-outline btn-secondary text-sm flex items-center gap-2"
                    onClick={() => setSelectedImage(product.newImage)} // Mostrar la nueva imagen
                  >
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black py-8 pt-20">
      

    </div>
      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedImage("")} // Cerrar modal al hacer clic en el fondo
        >
          <div
            className="bg-white p-8 rounded-lg relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer clic dentro del modal
          >
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="rounded-lg w-full h-auto"
            />
            <button
              className="absolute top-2 right-2 btn btn-sm btn-error"
              onClick={() => setSelectedImage("")} // Cerrar modal
            >
              ✕
            </button>
          </div>
        </div>



      )}
      <h1>{bateriaRecomendada}</h1>
    </div>
  );
};

export default Tienda;