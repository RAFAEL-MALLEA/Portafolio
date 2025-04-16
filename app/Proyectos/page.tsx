import Image from "next/image";
import Navbar from "@/components/mainnavbar";

export default function Home() {
  return (
    <>
    <main className=""></main>

      {/* header */}
      <section>
        <Navbar />
      </section>
      
    <main className="">
    <h3 className="text-center text-3xl px-10 mt-10 pt-5 pb-2 font-bold text-yellow-400">Mis Proyectos</h3>
    <p className="text-white text-center text-xl font-thin">Te invito a revisar cada uno de los proyectos que he ido realizando a lo largo de mi carrera</p>
    
    </main>

    </>
  );
}