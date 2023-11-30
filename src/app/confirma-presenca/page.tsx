import Image from "next/image";
import Banner from "../components/Banner";
import ButtonCasamento from "../components/ButtonCasamento";

export default function Home() {
  const urlImagem = "/img/marilialucas.jpg";

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-violet-200 to-pink-200">
      <main
        className="flex-grow bg-no-repeat pb-5"
        style={{ backgroundImage: `url(${urlImagem})` }}
      >
        <Banner />

        <div className="mt-10 bg-opacity-40 p-8">
          <div className="flex justify-center flex-col sm:flex-row text-white text-2xl">
            <ButtonCasamento
              css="bg-gradient-to-r from-blue-800 to-indigo-900"
              value="Confirmar presença"
              href="https://wa.me/5516994327371?text=Ola, Gostaria de confirmar minha presença para o casamento de Marilia e Lucas que será no dia 17/02/2024.%0AOs nomes dos presentes são:%0A"
            />
            <ButtonCasamento
              css="bg-gradient-to-r from-emerald-500 to-emerald-900"
              value="Lista de presentes"
              href="https://www.querodecasamento.com.br/lista-de-casamento/marilia-cristina-cintra-lucas-carrijo-de-andrade"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center px-4">
            <div className="text-3xl text-white mt-5 mb-7">
              <div>
                <h2 className="text-center">17 de Fevereiro ás 15:45h</h2>
              </div>
              <div className="mt-2">
                <h2 className="font-greatVibes sm:text-7xl">
                  Mosteiro Cisterciense de Claraval
                </h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <Image
                  src={"/img/mosteiro.jpg"}
                  alt="mosteiro de claraval"
                  className="rounded-xl shadow-lg shadow-orange-300"
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
      </main>

      <footer className="footer w-full p-3 bg-pink-200 text-gray-800 flex items-center justify-center">
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
    </div>
  );
}
