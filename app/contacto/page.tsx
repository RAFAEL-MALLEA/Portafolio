import Image from "next/image";
import Navbar from "@/components/mainnavbar";

export default function Home() {
  return (
    <>
    <main className="">
      {/* header */}
      <section>
        <Navbar />
      </section>

        <section>
            <h3 className="text-yellow-400 text-center font-bold text-4xl py-10">Enviame un mensaje!</h3>
        </section>

      <section className=" py-5 p-5 ">
            
            <div className="justify-center items-center flex">
                <form className="border border-blue-400 rounded-tl-3xl rounded-br-3xl  rounded-tr-xl rounded-bl-xl shadow-2xl shadow-blue-400 p-5 md:w-3/5 ">
                    <label className="text-white block ">Nombre</label>
                        <input type="text" name="name" className="w-full rounded-md p-1 text-amber-50" placeholder="Ingresa tu nombre" required />
                    <label className="text-white block ">Apellido</label>
                        <input type="text" name="name" className="w-full rounded-md p-1 text-amber-50" placeholder="Ingresa tu apellido" required />
                    <label className="text-white block ">Email</label>
                        <input type="text" name="email" className="w-full rounded-md p-1 text-amber-50" placeholder="example@gmail.com" required />
                    <label className="text-white block ">Número de contacto</label>
                        <input type="text" name="phone" className="w-full rounded-md p-1 text-amber-50" placeholder="+(56) 9 ********" required />
                    <label className="text-white block ">Descripcion</label>
                        <textarea name="message" className="w-full rounded-md p-1 text-amber-50" placeholder="Escribe tu mensaje" required></textarea>
                    <div className="flex justify-center">
                        <button type="submit" name="submit" className="text-white bg-blue-600 shadow-slate-800 shadow-md w-full rounded-3xl py-1 text-lg hover:bg-blue-800">Enviar</button>
                    </div>
                </form>
                </div>
            </section>
            </main>
    </>
  );
}
