import Image from "next/image";
import Navbar from "@/components/mainnavbar";

export default function Home() {
  return (
    <>
    
      {/* header */}
      <section>
        <Navbar />
      </section>
      
    <main className="">
    <h3 className="text-center text-3xl px-10 mt-10 pt-5 pb-2 font-bold text-yellow-400">Mis Certificaciones</h3>
    <p className="text-white text-center text-xl font-thin">Aqui podras encontrar las certificaciones que he obtenido durante mi aprendizaje en el mundo del desarrollo web y aprendizaje de tecnologias</p>
    

    <div className="flex justify-center">
    
        <div className="border-2 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-s-3xl m-3 text-white flex h-[250px] w-[450] justify-center items-center">
            <div>
                <img src="/certificaciones/udemy.png" className="" alt="Imagen portada desarrollador web" />
            </div>
            <div className="flex-col p-3">
                <p>Certificacion de curso Full Stack Node.js React TS NestJS Next.js Creando Proyectos</p><br />
                <a className="bg-indigo-600 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950 py-1" href="https://www.udemy.com/certificate/UC-91f802d0-5caa-43e5-89ff-c1917d2bd8ed/">Visualizar</a>
            </div>
        </div>

        <div className="border-2 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-s-3xl m-3 text-white flex h-[250px] w-[450] justify-center items-center">
            <div>
                <img src="/certificaciones/udemy.png" className="" alt="Imagen portada desarrollador web" />
            </div>
            <div className="flex-col">
                <p>Certificacion de curso de desarrollo web con HTML, CSS y JavaScript</p><br />
                <a className="bg-indigo-600 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950 py-1" href="https://www.udemy.com/certificate/UC-6d04840e-699d-4616-9331-f0dc859b3c26/">Visualizar</a>
            </div>
        </div>

        <div className="border-2 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-s-3xl m-3 text-white flex h-[250px] w-[450] justify-center items-center">
            <div>
                <img src="/certificaciones/toeic.png" className="" alt="Imagen portada desarrollador web" />
            </div>
            <div className="flex-col p-3">
                <p>Certificacion de curso de nivelacion ingles Toeic</p><br />
                {/* <a className="bg-indigo-600 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950 py-1" href="https://www.linkedin.com/in/rafael-alejandro-mallea-ramirez-6915ab223/details/certifications/">Visualizar</a> */}
            </div>
        </div>


    </div>



{/* segunda fila */}



    <div className="flex justify-center p-3">
    
        <div className="border-2 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-s-3xl m-3 text-white flex h-[250px] w-[450] justify-center items-center">
            <div>
                <img src="/certificaciones/cisco.png" className="" alt="Imagen portada desarrollador web" />
            </div>
            <div className="flex-col ">
                <p>Certificacion de curso Python essencial 1</p><br />
                {/* <a className="bg-indigo-600 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950 py-1" href="https://www.udemy.com/certificate/UC-91f802d0-5caa-43e5-89ff-c1917d2bd8ed/">Visualizar</a> */}
            </div>
        </div>

        <div className="border-2 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-s-3xl m-3 text-white flex h-[250px] w-[450] justify-center items-center">
            <div>
                <img src="/certificaciones/Duoc.png" className="" alt="Imagen portada desarrollador web" />
            </div>
            <div className="flex-col ">
                <p>Certificacion de ingenieria en informatica Duoc UC</p><br />
                {/* <a className="bg-indigo-600 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950 py-1 " href="blob:https://experienciavivo.duoc.cl/eb192792-7848-40a9-95d8-dcba921893d5">Visualizar</a> */}
            </div>
        </div>

        {/* <div className="border-2 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-s-3xl m-3 text-white flex h-[250px] w-[450]">
            <div>
                <img src="/certificaciones/cisco.png" className="" alt="Imagen portada desarrollador web" />
            </div>
            <div className="flex-col ">
                <p>Certificacion de ingenieria en informatica Duoc UC</p><br />
                <a className="bg-indigo-600 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950 py-1" href="blob:https://experienciavivo.duoc.cl/eb192792-7848-40a9-95d8-dcba921893d5">Visualizar</a>
            </div>
        </div> */}


    </div>
    </main>

    </>
  );
}