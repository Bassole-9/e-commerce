import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = () => {
  /////////une images sur la pages avec les 2 fleche /////////
  const images = [
    {
      src: "https://img.freepik.com/psd-gratuit/vue-chemise-hawaienne-porte-vetements_23-2150819229.jpg?t=st=1730824005~exp=1730827605~hmac=5705473193ed4e0facf0b8ef03ebd9cbdf1c336d09f5d991f33ad4b227f1d40b&w=2000",
      alt: "Image 1",
    },
    {
      src: "https://img.freepik.com/photos-gratuite/rendu-nature-morte-affichage-vestes_23-2149745032.jpg?t=st=1730824100~exp=1730827700~hmac=b01b7642a458e28845481eeeca43d272bf732e44e33203280eefb037b5c1d067&w=2000",
      alt: "Image 2",
    },
    {
      src: "https://img.freepik.com/photos-gratuite/femme-commercante-joyeuse-emotive-utilise-telephone-mobile-pour-payer-ligne-detient-carte-credit-se-dresse-entre-chandails-jaunes-cintres_273609-32759.jpg?t=st=1730824435~exp=1730828035~hmac=1e9a09eec07295411b51e5ed77c31408fb42e1180ad62953a20c02a75dd327ad&w=2000",
      alt: "Image 3",
    },
    {
      src: "https://img.freepik.com/photos-premium/appareils-numeriques-modernes_1108533-17764.jpg?w=2000",
      alt: "Image 4",
    },
    {
      src: "https://img.freepik.com/photos-gratuite/chaussures-cuir-fond-bois_1203-7618.jpg?t=st=1730824931~exp=1730828531~hmac=bfec3e998084cdf96ea11cba89977ebd74ba63b6e8e8910909d5be2fe5f6a5ed&w=2000",
      alt: "Image 5",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1, // Une image visible à la fois
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // Une image visible à la fois
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Une image visible à la fois
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Une image visible à la fois
    },
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true} // Auto défilement activé
      infinite={true} // Boucle infinie
      showDots={false} // Afficher les points de navigation
      arrows={false} // Flèches de navigation
      centerMode={false} // Désactive le mode centré
      autoPlaySpeed={5000} // Vitesse du défilement en ms (2 secondes)
      transitionDuration={500} // Durée de la transition (en ms)
      containerClass="carousel-container"
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
