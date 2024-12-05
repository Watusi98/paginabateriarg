import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    
    <nav className="fixed w-full bg-black p-4 flex justify-between items-center z-50">
      {}
      <div onClick={() => (window.location.href = "/Index")}>
  <img
    className="w-20 h-20 cursor-pointer"
    src="https://scontent.fmdz1-2.fna.fbcdn.net/v/t39.30808-1/310959755_772345810859671_8004337757043736459_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGuWwComCGYt0kk2JxaOXoQGX_aYMClijIZf9pgwKWKMn2whxIFExn6aUUV4_fAYackD9CjitBL06B3DwKXuuz_&_nc_ohc=MINHADGIlMUQ7kNvgFTzWDx&_nc_zt=24&_nc_ht=scontent.fmdz1-2.fna&_nc_gid=AY8kcwLlGebtliGcZ8otURz&oh=00_AYClZ2MqoEeW9YbtXKgEu1WuqAMSDJgutgF-j8Ew39rqnA&oe=67577A72"
    alt="Logo Baterías a Domicilio RG"
  />
</div>

      <div className="flex justify-around w-1/3
    ">
        <Link className="text-white text-xl" to={'/Index'}> Inicio </Link>
        <Link className="text-white text-xl" to={'/Busqueda'}> Baterias para su vehiculo </Link>
        <Link className="text-white text-xl" to={'/Mapa'}> Mapa de Cobertura </Link>
        <Link className="text-white text-xl" to={'/Tienda'}> Tienda </Link>
      </div>
    </nav>
  );
};

export default Navbar