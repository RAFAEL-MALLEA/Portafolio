import React from "react";

const Navbar = () =>{
    return(
        <>
            <header className="bg-[#001220] py-7 hidden lg:block text-[#2D2926]">
            <nav>
                    <div className="flex justify-between px-16 md:flex-col xl:flex-row">
                        <div className="flex font-bold text-2xl text-center justify-center open-sauce-one text-amber-100">Rafael Mallea</div>
                        <div className="flex gap-4 justify-center text-amber-100">
                        <button className="border-b"><a href="/" className="hover:text-foreground/80 text-foreground/160">Home</a></button>
                        <button className="border-b"><a href="/sobremi" className="hover:text-foreground/80 text-foreground/160">Sobre mi</a></button>
                        <button className="border-b"><a href="/certificaciones" className="hover:text-foreground/80 text-foreground/160">Certificaciones</a></button>
                        <button className="border-b"><a href="/hobbie" className="hover:text-foreground/80 text-foreground/160">Hobbie</a></button>
                        <button className="border-b"><a href="/contacto" className="hover:text-foreground/80 text-foreground/160">contacto</a></button>
                        <button className="border-b"><a href="/Proyectos" className="hover:text-foreground/80 text-foreground/160">Proyectos</a></button>
                        </div>
                    </div>
                    
            </nav>
            </header>
        </>
    )
}

export default Navbar