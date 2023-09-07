import Banner from "./components/Banner";

export default function Home() {
  const urlImagem = "/img/marilialucas.jpg";

  return (
    <main>
      <Banner />
      <div className="flex h-screen">
        <div
          className="w-full bg-no-repeat"
          style={{ backgroundImage: `url(${urlImagem})` }}
        >
          <div className="text-white lg:text-blue-950 text-6xl text-end">
            <h2 className="mt-12 bg-slate-400 bg-opacity-30 p-3 rounded-md mx-5">Marília & Lucas</h2>
            <h3 className="mt-10 font-extralight text-3xl md:text-5xl">Data casamento: 01/10/2023</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
