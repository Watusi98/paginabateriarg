import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-black">

      {/* Productos Destacados */}
      <section className="p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Producto 1 */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <a href="/tienda"> {/* Aquí redirige a la página de la tienda */}
          <figure>
            <img
              src="https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg"
              alt="Bateria"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              65A 12V
              <div className="badge badge-secondary">NUEVO</div>
            </h2>
            <p>Perfecta para un rendimiento confiable en automóviles medianos y pequeños.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Tendencia</div>
              <div className="badge badge-outline">Productos</div>
            </div>
          </div>
        </a>
      </div>

      {/* Producto 2 */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <a href="/tienda"> {/* Aquí redirige a la página de la tienda */}
          <figure>
            <img
              src="https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg"
              alt="Bateria"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              75A 12V
              <div className="badge badge-secondary">NUEVO</div>
            </h2>
            <p>Una opción equilibrada para autos familiares y pequeños SUV.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Tendencia</div>
              <div className="badge badge-outline">Productos</div>
            </div>
          </div>
        </a>
      </div>

      {/* Producto 3 */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <a href="/tienda"> {/* Aquí redirige a la página de la tienda */}
          <figure>
            <img
              src="https://www.bateriaspioneiro.com.br/admin/fotos_produtos/05_11_2019_djknlbdm.jpg"
              alt="Bateria"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              95A 12V
              <div className="badge badge-secondary">NUEVO</div>
            </h2>
            <p>Recomendada para SUVs, camionetas y vehículos comerciales ligeros.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Tendencia</div>
              <div className="badge badge-outline">Productos</div>
            </div>
          </div>
        </a>
      </div>
        </div>
      </section>
      {/* Stats */}
      <div className="stats shadow w-full h-180">
  <div className="stat place-items-center">
    <div className="stat-title">Baterias Entregadas</div>
    <div className="stat-value">+4.000</div>
    <div className="stat-desc">Totales</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Compradores</div>
    <div className="stat-value text-secondary">3800</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Repartos al exterior de Rio Gallegos</div>
    <div className="stat-value">360</div>
    <div className="stat-desc">↘︎ 10 (2%)</div>
  </div>
</div>
      {/* Testimonios */}
      <section className="bg-gray-800 text-white p-12 ">
        <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="italic">"Unos de los mejores servicios. Entregan en el dia."</p>
            <p className="mt-4 text-right">- Juan P.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="italic">"Estaba parada en la ria y vinieron a socorrerme,super recomiendo."</p>
            <p className="mt-4 text-right">- Maria G.</p>
          </div>
          </div>
      </section>
</div>


  );
};

export default Landing;
