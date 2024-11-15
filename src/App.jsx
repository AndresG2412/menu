import postre from "./img/postre.png"
import moto from "./img/bicicleta.png"

export default function App() {
  return (
    <div >

      <div className="md:flex flex-col-2 justify-center items-center my-16 md:my-48">
        <div className="text-center ">
          <h1 className="text-center font-bold text-7xl text-yellow-200">LOS MEJORES <br /> POSTRES </h1>
          <button className="bg-sky-400 px-8 py-2 font-bold text-2xl rounded-lg my-8 hover:bg-sky-600">PEDIR</button>
        </div>
        <img className="md:w-96 w-72 md:h-80 h-60 rounded-xl mx-auto md:mx-24 my-12 md:my-0" src={postre} alt="slider"/>
      </div>

      <div className="text-yellow-200">
        <h1 className="text-center font-bold text-5xl">MENU</h1>

        <div className="md:flex justify-between mx-12 md:mx-64 my-12">
          <div>
            <h1 className="font-bold text-3xl text-center border-b-4 ">Postres Frios</h1>
            <ul className="list-decimal pl-4 font-semibold mt-6">
              <li className="text-xl">Oreo</li>
              <li className="text-xl">Milo</li>
              <li className="text-xl">Tres Leches</li>
              <li className="text-xl">Maracuya</li>
              <li className="text-xl">Tiramisu</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-center border-b-4 md:mt-0 mt-12">Postres Calientes</h1>
            <ul className="list-decimal pl-4 font-semibold mt-6">
              <li className="text-xl">Brownis</li>
              <li className="text-xl">Malbaviscos</li>
              <li className="text-xl">Donas</li>
              <li className="text-xl">Churros</li>
            </ul>
          </div>
        </div>

        <div className="md:flex justify-between mx-12 md:mx-64 my-12">
          <div>
            <h1 className="font-bold text-3xl text-center border-b-4 ">Bebidas</h1>
            <ul className="list-decimal pl-4 font-semibold mt-6">
              <li className="text-xl">Milo</li>
              <li className="text-xl">Gaseosas</li>
              <li className="text-xl">Leche</li>
              <li className="text-xl">Leche de Fresa</li>
              <li className="text-xl">Avena</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-center border-b-4 md:mt-0 mt-12">Extras</h1>
            <ul className="list-decimal pl-4 font-semibold mt-6">
              <li className="text-xl">Chispitas de Colores</li>
              <li className="text-xl">Chispitas de Chocolate</li>
              <li className="text-xl">M&Ms</li>
              <li className="text-xl">Malvabiscos</li>
              <li className="text-xl">Cereales</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:flex md:mx-64 items-center my-24">
        <img className="md:w-72 w-56 md:h-72 h-56 mx-auto" src={moto} alt="moto_envios" />
        <h1 className="font-bold text-4xl text-yellow-200 text-center md:text-left mx-12 md:mx-0 md:ml-24 mt-8 md:mt-0">Lo enviamos a la puerta de tu casa y pagas el total al recibir!</h1>
      </div>

      <footer className="w-full bg-black md:flex text-white text-center md:pt-12 py-8 flex-wrap">
        <div className="md:w-1/3 mb-8">
          <h1 className="text-center font-bold text-4xl mb-4">Postres <br />MURDOCK</h1>
          <h3 className="md:mx-0 mx-24 mt-2">Siempre hay tiempo para endulzar un poco tu día a día</h3>
        </div>

        <div className="md:w-1/3 mb-8">
          <h1 className="text-center font-bold text-2xl mb-4">Contacto</h1>
          <ul className="font-semibold text-center text-gray-400 mt-2">
            <li className="">+57 1234567890</li>
            <li className="">correo@gmail.com</li>
            <li className="">Barrio - Neiva</li>
          </ul>
        </div>

        <div className="md:w-1/3 mb-8">
          <h1 className="text-center font-bold text-2xl mb-4">Social</h1>
          <ul className="font-semibold text-center text-gray-400 mt-2">
            <li className=""><a href="#" className="hover:text-gray-300">Facebook</a></li>
            <li className=""><a href="#" className="hover:text-gray-300">TikTok</a></li>
            <li className=""><a href="#" className="hover:text-gray-300">Instagram</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}