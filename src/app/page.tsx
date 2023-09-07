import Banner from "./components/Banner";
import Navbar from "./components/Nav/Navbar";

export default function Home() {
  const urlImagem = "/img/marilialucas.jpg";

  return (
    <main className="bg-red-50">
      <Banner />
      <div className="flex h-screen">
        <div
          className="w-full bg-no-repeat"
          style={{ backgroundImage: `url(${urlImagem})` }}
        >
          <Navbar />
          <div className="text-white xl:text-slate-800 text-6xl">
            <h2 className="mt-12 bg-slate-400 bg-opacity-30 rounded-md mx-5 md:pr-10 font-greatVibes text-7xl text-center sm:text-end">
              Marília & Lucas
            </h2>
            <div
              id="frase"
              className="xl:text-red-700 text-right text-2xl md:text-3xl p-4 italic font-extralight bg-red-300 rounded-lg shadow-md m-5 bg-opacity-40 lg:max-w-3xl md:ml-auto"
            >
              Nosso amor é a história mais bonita que já escrevemos juntos, e
              mal podemos esperar para compartilhá-la com todos vocês no dia
              mais importante de nossas vidas. Obrigado por fazerem parte dessa
              jornada incrível.
            </div>

            <div className="mt-10 font-extralight text-3xl md:text-5xl m-5 text-right md:p-10">
              <h3>Nosso casamento será: 01/10/2023</h3>
              <h3>Local: Mosteiro de Claraval</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
