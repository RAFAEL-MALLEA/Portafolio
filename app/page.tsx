import Image from "next/image";
import Navbar from "@/components/mainnavbar";

export default function Home() {
  return (
    <>
    <main className="">

      {/* header */}
      <section>
        <Navbar />
        <div className="h-4 shadow-xl shadow-white"></div>
      </section>

      {/* body */}
      <section className="text-[#FFB366]">

        <div className=" md:flex justify-center">  

          <div className="md:flex md:flex-col md:items-center md:justify-center md:w-1/2">
            <h3 className="text-white font-extralight text-center text-3xl">!Hola, Me presento... Soy Rafael Mallea!</h3>
            <h1 className="text-yellow-400 text-center font-bold text-4xl">Desarrollador Front-End Junior</h1>
            <p className="mt-2 text-lg  text-white font-thin px-10">y ofrezco mis servicios </p>

            <button className="flex justify-center mt-5 ">
            <a className="bg-indigo-600 py-2 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950  shadow-slate-800 shadow-lg" href="#servicio">Más información</a>
            </button>
            
          </div>


          <div className="flex justify-around">
          <img src="/imagen_procreate.png" className="md:w-4/5" alt="Imagen portada desarrollador web" />
          </div>


        </div>

        <h3 className="text-center text-3xl px-10 mt-10 pt-5 pb-2 font-bold text-yellow-400">Creación de tu sitio web</h3>
        <p className="text-white text-center text-xl font-thin">¿Que es lo que incluye el servicio?</p>
        <h4 className="font-medium text-center mt-5 text-3xl text-blue-200">$1 <span className="text-yellow-400">UF</span></h4>

        <div id="servicio" className="md:flex md:justify-center flex justify-center mt-5 ">
          <ul className=" border-2 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-s-3xl rounded-br-3xl rounded-e-xl rounded-bl-xl text-white">
            <h1 className="text-center font-light mb-5 text-2xl text-yellow-400">DESARROLLO WEB</h1>
            <li><i className="bi bi-cursor pe-3"></i>Galería de imágenes</li>
            <li><i className="bi bi-cursor pe-3"></i>Diseño web <span className="font-medium text-yellow-400">ADAPTABLE</span></li>
            <li><i className="bi bi-cursor pe-3"></i>Formulario de contacto</li>
            <li><i className="bi bi-cursor pe-3"></i>Botones de contacto y Whatsapp</li>
            <li><i className="bi bi-cursor pe-3"></i>Botones a redes sociales</li>
            <li><i className="bi bi-cursor pe-3"></i>Animaciones web</li>
            <li><i className="bi bi-cursor pe-3"></i>Animaciones de scroll</li>
          </ul>
        </div>
        <div className="flex justify-center mt-5 text-center">
          <a className="bg-indigo-600 py-2 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950  " href="/contacto">Contáctame</a>
          
        </div>
      </section>
    </main>
    </>
  );
}
