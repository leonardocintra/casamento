import Image from "next/image";

export default function Carrossel() {
  function renderImage(src: string) {
    return (
      <div className="carousel-item">
        <Image
          src={src}
          className="rounded-box"
          width={300}
          height={300}
          alt="foto lucas e marilia"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="carousel carousel-center p-2 space-x-3 bg-neutral rounded-box bg-transparent">
        {renderImage("/img/casal/1.jpg")}
        {renderImage("/img/casal/2.jpg")}
        {renderImage("/img/casal/3.jpg")}
        {renderImage("/img/casal/4.jpg")}
        {renderImage("/img/casal/5.jpg")}
        {renderImage("/img/casal/6.jpg")}
        {renderImage("/img/casal/7.jpg")}
        {renderImage("/img/marilialucas.jpg")}
      </div>
    </div>
  );
}
