import React from "react";
import "../styles/Slider.css";

const logos = [
  { src: "img/airties.webp", alt: "Airties Logo" },
  { src: "img/aniventi.webp", alt: "Aniventi Logo" },
  { src: "img/belediye.webp", alt: "Belediye Logo" },
  { src: "img/cimri.webp", alt: "Cimri Logo" },
  { src: "img/dgpays.webp", alt: "Dgpays Logo" },
  { src: "img/endeksa.webp", alt: "Endeksa Logo" },
  { src: "img/entertech.webp", alt: "Entertech Logo" },
  { src: "img/erciyes.webp", alt: "Erciyes Logo" },
  { src: "img/etiya.webp", alt: "Etiya Logo" },
  { src: "img/etstur.webp", alt: "Etstur Logo" },
  { src: "img/hangikredi.webp", alt: "Hangikredi Logo" },
  { src: "img/ilab.webp", alt: "İlab Logo" },
  { src: "img/invio.webp", alt: "İnvio Logo" },
  { src: "img/iskur.webp", alt: "İskur Logo" },
  { src: "img/kariyernet.webp", alt: "Kariyernet Logo" },
  { src: "img/microsoft.webp", alt: "Microsoft Logo" },
  { src: "img/mnm.webp", alt: "Mnm Logo" },
  { src: "img/neredekal.webp", alt: "Neredekal Logo" },
  { src: "img/paximum.webp", alt: "Paximum Logo" },
  { src: "img/publicis.webp", alt: "Publicis Logo" },
  { src: "img/san.webp", alt: "San Logo" },
  { src: "img/seoart.webp", alt: "Seoart Logo" },
  { src: "img/t.webp", alt: "T Logo" },
  { src: "img/tatilbudur.webp", alt: "Tatilbudur Logo" },
  { src: "img/tubisad.webp", alt: "Tubisad Logo" },
  { src: "img/yemeksepeti.webp", alt: "Yemeksepeti Logo" },
];

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide-track">
          {logos.map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        
          {logos.map((logo, index) => (
            <div className="slide" key={`${index}-duplicate`}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
