import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
} from "../assets";

const MyCarouselPetit = () => {
  /////////plusieur images  sur la pages avec les 2 fleche /////////
  const items = [
    <div
      key="1"
      style={{
        background: "black",
        height: "300px",
        width: "100%",
        padding: "25px",
      }}
    >
      <img
        height="100%"
        width="100%"
        style={{ borderRadius: "10px" }}
        src={image14}
      />
    </div>,
    <div
      key="2"
      style={{
        background: "black",
        height: "300px",
        width: "100%",
        padding: "25px",
        marginLeft: "2rem",
      }}
    >
      <img
        height="100%"
        width="100%"
        style={{ borderRadius: "10px" }}
        src={image15}
      />
    </div>,
    <div
      key="3"
      style={{
        background: "black",
        height: "300px",
        width: "100%",
        padding: "25px",
        marginLeft: "3.5rem",
      }}
    >
      <img
        height="100%"
        width="100%"
        style={{ borderRadius: "10px" }}
        src={image16}
      />
    </div>,
    <div
      key="4"
      style={{
        background: "black",
        height: "300px",
        width: "100%",
        padding: "25px",
        marginLeft: "5rem",
      }}
    >
      <img
        height="100%"
        width="100%"
        style={{ borderRadius: "10px" }}
        src={image17}
      />
    </div>,
    <div
      key="5"
      style={{
        background: "black",
        height: "300px",
        width: "100%",
        padding: "25px",
        marginLeft: "6.5rem",
      }}
    >
      <img
        height="100%"
        width="100%"
        style={{ borderRadius: "10px" }}
        src={image18}
      />
    </div>,
    <div
      key="6"
      style={{
        background: "black",
        height: "300px",
        width: "100%",
        padding: "25px",
        marginLeft: "8rem",
      }}
    >
      <img
        height="100%"
        width="100%"
        style={{ borderRadius: "10px" }}
        src={image19}
      />
    </div>,
  ];

  const responsive = {
    superLargeDesktop: {
      // > 4000px
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      // >= 1024px
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      // >= 464px
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      // < 464px
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={false}
      infinite={false}
      showDots={false}
      arrows={true}
      centerMode={true}
      ariaLabel="some label"
    >
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Carousel>
  );
};

export default MyCarouselPetit;
