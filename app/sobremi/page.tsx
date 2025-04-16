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
      <section className="">
        <div className="flex justify-around py-20">
          
          <div className="justify-center items-center w-1/2">
          <div className="">
            <h3 className="text-white font-extralight text-center text-3xl">!Hola, Me presento... Soy Rafael Mallea!</h3>
            <h1 className="text-yellow-400 text-center font-bold text-4xl">Desarrollador Front-End Junior</h1>
          </div>
            <div className="py-12">
              <p className="text-white">Recientemente titulado en Ingeniería en Informática con sólidos conocimientos en desarrollo web y aseguramiento de calidad (QA), Apasionado por la tecnología y la optimización de procesos, con habilidades en análisis y planificación de requerimientos. <br />
                <br />Busco mi primera experiencia laboral en un ambiente dinámico donde pueda aplicar mis conocimientos y continuar mi crecimiento profesional. <br />
                <br />Mi experiencia voluntaria en Duoc UC demuestra mi dedicación a la comunidad y mi deseo de utilizar la tecnología para generar un impacto positivo. Busco continuamente expandir mis competencias en el desarrollo web, preparándome para una carrera donde la innovación y la responsabilidad social son fundamentales. <br />
                <br />Soy de la región de Valparaíso especificamente de la comuna Viña del Mar, tengo 25 años y me encuentro ofreciendo servicios de desarrollo web para tu negocio o emprendimiento donde sea que se encuentre ubicado. Ofreciendo un sitio en línea totalmente responsivo, es decir, adaptable para que pueda ser visto desde cualquier tipo de dispositivo a un precio económico.</p>
            </div>
          </div>

          <div className="justify-center items-center flex"><Image src="/sobremi/portafoliorafa.jpg" alt="" width={500} height={500} className="rounded-full"></Image></div>
        </div>
      </section>

      <section>

      </section>
    </main>
    </>
  );
}
