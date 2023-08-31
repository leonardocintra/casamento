import Banner from "./components/Banner";

export default function Home() {
  const urlImagem = "/img/marilialucas.jpg";

  return (
    <main>
      <Banner />
      <div className="flex flex-col md:flex-row md:h-screen">
        <div
          className={`md:w-2/3 md:h-screen bg-cover bg-center ${
            urlImagem ? `hidden md:block` : `md:w-full`
          }`}
          style={{ backgroundImage: `url(${urlImagem})` }}
        />
        <div className="flex-1 flex flex-col justify-center p-8">
          <div className="text-4xl font-bold mb-4 text-gray-800">
            Marília & Lucas
          </div>
          <div className="text-xl text-gray-600">
            Data do Casamento: 10 de Outubro de 2023 às 20:00
          </div>
        </div>
      </div>
    </main>
  );
}
