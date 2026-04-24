import MapaConcellos from "./MapaConcellos";

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen bg-white "> {/* Contenedor padre */}

      <header className="bg-[#0c2151] p-4 md:p-6 border-b border-[#cbd5e1] flex justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#FCCE10]">Juego de Geografía</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-2 md:p-4 bg-white w-full max-w-7xl mx-auto">
        {/* El MapaEspaña estará ahora centrado verticalmente en el espacio sobrante */}

        <MapaConcellos />
      </main>

      <footer className="bg-[#0c2151] text-right text-[#FCCE10] p-3 select-none">Juego de Geografía</footer>
    </div>

  );
}
