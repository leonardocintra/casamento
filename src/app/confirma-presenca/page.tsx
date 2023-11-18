import Image from "next/image";
import Link from "next/link";

export default function ConfirmaPresencaPage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 sm:py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            alt="feature"
            width={1000}
            height={1000}
            className="object-cover object-center h-full w-full"
            src="/img/marilialucas.jpg"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-4xl sm:text-6xl title-font font-medium mb-3 font-greatVibes text-center">
                Confirmação de presença
              </h2>
              <p className="leading-relaxed text-base text-center">
                Obrigado por fazer parte desse momento especial em nossas vidas.
                Sua presença tornará nosso casamento ainda mais memorável!
              </p>
              <Link
                className="mt-10 block w-full rounded-md bg-green-700 px-3 py-3 text-center text-xl font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="https://wa.me/5516994327371?text=Ola, Gostaria de confirmar minha presença para o casamento de Marilia e Lucas que será no dia 17/02/2024.%0AOs nomes dos presentes são:%0A"
              >
                Confirmar presença
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Lista de presentes
              </h2>
              <p className="leading-relaxed text-base">
                Para aqueles que desejam nos presentear, sua generosidade será
                eternamente apreciada. Consulte nossa lista de presentes para
                contribuir com nosso futuro juntos.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Lista de presentes
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Nossa história
              </h2>
              <p className="leading-relaxed text-base">
                Descubra nossa história de amor aqui.
              </p>
              <Link href={"/"} className="mt-3 text-indigo-500 inline-flex items-center">
                Nossa história
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
