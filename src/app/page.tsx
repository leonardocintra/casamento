import Link from "next/link";
import Banner from "./components/Banner";
import Navbar from "./components/Nav/Navbar";
import { BiLogoInstagram } from "react-icons/bi";
import Image from "next/image";

export default function Home() {
  const urlImagem = "/img/marilialucas.jpg";

  return (
    <main className="bg-red-50">
      <Banner />
      <div id="home" className="flex h-screen">
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
              <h3>Nosso casamento será: 17/02/2024</h3>
              <h3>Local: Mosteiro de Claraval</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="nossa-historia" className="p-5 mt-2 bg-pink-100 m-3 rounded-xl">
        <h1 className="text-center text-6xl font-vibes">Nossa História</h1>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
            <Image
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              width={1000}
              height={1000}
              src="/img/ML1.jpeg"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Nossa verdadeira história esta só começando ...
              </h1>
              <p className="mb-8 leading-relaxed">
                Quando nossos caminhos se cruzaram, eu era apenas um simples
                agricultor da roça e ela uma dedicada professora da cidade. A
                vida nos uniu, nossas histórias se entrelaçaram e hoje, diante
                de todos, vamos celebrar nosso amor, mostrando que as diferenças
                podem se transformar em uma bela sinfonia.
              </p>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              Os noivos
            </h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    O dia em que a conheci foi o início de um capítulo
                    inesquecível da minha vida. Um encontro casual, um sorriso
                    que iluminou meu mundo e uma conversa que nunca terminou.
                    Hoje, estou prestes a casar com a mulher que mudou meu
                    destino para sempre, e mal posso esperar para escrever o
                    resto dessa história juntos.
                  </p>
                  <Link
                    href={"https://www.instagram.com/lucascarrijoa/"}
                    className="inline-flex items-center"
                  >
                    <Image
                      alt="testimonial"
                      src="/img/lucao.jpeg"
                      width={200}
                      height={200}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Lucas Carrijo
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <BiLogoInstagram /> @lucascarrijoa
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    Nosso encontro foi como um conto de fadas moderno. Através
                    de amigos em comum, nossos olhares se cruzaram e o mundo
                    inteiro desapareceu naquele momento mágico. Hoje, estou
                    prestes a casar com o homem dos meus sonhos, a melhor
                    história que já vivi.
                  </p>
                  <Link
                    href={"https://www.instagram.com/marilia.cintra/"}
                    className="inline-flex items-center"
                  >
                    <Image
                      alt="testimonial"
                      src="/img/marilia.jpeg"
                      width={200}
                      height={200}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Marília Cintra
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <BiLogoInstagram /> @marilia.cintra
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="casamento" className="p-5 mt-2 bg-green-200 m-3 rounded-xl">
        <h1 className="text-center text-6xl font-vibes text-red-800">
          O Casamento
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="sm:text-2xl text-sky-950 mt-5 mb-7">
            <div>
              <h2 className="text-center">17 de Fevereiro ás 15:45h</h2>
            </div>
            <div className="mt-2">
              <h2 className="font-greatVibes text-2xl sm:text-7xl">
                Mosteiro Cisterciense de Claraval
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mb-5">
            <div className="sm:w-1/3">
              <Image
                src={"/img/mosteiro.jpg"}
                alt="mosteiro de claraval"
                className="rounded-xl shadow-xl shadow-orange-200"
                width={720}
                height={720}
              />
            </div>
            <div className="m-2 sm:w-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.9029427447746!2d-47.28441116216148!3d-20.39889100223928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0bcd79920fd85%3A0x18be5cc6d5779b3b!2sMosteiro%20Cisterciense%20de%20Claraval!5e0!3m2!1spt-BR!2sbr!4v1698356716189!5m2!1spt-BR!2sbr"
                className="rounded-md w-full h-64 sm:h-full shadow-2xl shadow-slate-700"
                style={{
                  border: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div id="lista-presente" className="p-5 mt-2 bg-blue-100 m-3 rounded-xl">
        <h1 className="text-center text-6xl font-vibes">Lista Presente</h1>
        <div className="text-center">
          <ul>
            <li>Magazine Luizia (Petista compre aqui)</li>
            <li>Havan (Biroleides comprem aquii)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
