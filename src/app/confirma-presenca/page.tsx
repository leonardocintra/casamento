import Link from "next/link";
import Image from "next/image";
import Banner from "../components/Banner";
import ButtonCasamento from "../components/ButtonCasamento";

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
          <div className="text-white xl:text-slate-800 text-6xl">
            <h2 className="mt-12 bg-slate-400 bg-opacity-30 rounded-md mx-5 md:pr-10 font-greatVibes text-7xl sm:text-9xl text-center sm:text-end">
              Marília & Lucas
            </h2>

            <div
              id="frase"
              className="xl:text-red-800 text-right text-2xl md:text-3xl p-4 italic font-extralight bg-red-300 rounded-lg shadow-md m-5 bg-opacity-40 lg:max-w-3xl md:ml-auto"
            >
              <p>
                Nosso amor é a história mais bonita que já escrevemos juntos, e
                mal podemos esperar para compartilhá-la com todos vocês no dia
                mais importante de nossas vidas.
              </p>
              <p className="mt-2 font-extrabold">
                Obrigado por fazerem parte dessa jornada incrível.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row text-4xl justify-end m-2 text-cente">
              <ButtonCasamento
                css="bg-red-700"
                value="Confirmar presença"
                href="https://wa.me/5516994327371?text=Ola, Gostaria de confirmar minha presença para o casamento de Marilia e Lucas que será no dia 17/02/2024.%0AOs nomes dos presentes são:%0A"
              />
              <ButtonCasamento
                css="bg-red-800"
                value="Lista de presentes"
                href="#lista-presente"
              />
            </div>
          </div>
        </div>
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
        <h1 className="text-center text-6xl font-vibes">Lista Presentes</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center text-center space-x-2">
          <Link href="https://www.querodecasamento.com.br/lista-de-casamento/marilia-cristina-cintra-lucas-carrijo-de-andrade" className="inline-block">
            <Image
              src="/img/magalu.jpg" // Substitua pelo caminho real da sua imagem
              alt="Magalu"
              width={200}
              height={200}
              className="object-cover rounded-md shadow-md hover:shadow-lg"
            />
          </Link>

          <Link href="/caminho-do-seu-link" className="inline-block mt-4">
            <Image
              src="/img/havan.jpg" // Substitua pelo caminho real da sua imagem
              alt="Havan"
              width={200}
              height={200}
              className="object-cover rounded-md shadow-md hover:shadow-lg"
            />
          </Link>
        </div>
      </div>

      <footer className="footer footer-center w-full p-3 bg-pink-200 text-gray-800">
        <div className="text-center">
          <p>
            2023 - Desenvolvido por{" "}
            <a
              className="font-semibold"
              href="mailto:leonardo.ncintra@outlook.com"
            >
              Leonardo Nascimento Cintra
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
