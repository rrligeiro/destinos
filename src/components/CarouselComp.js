import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import ribeirao from "../images/ribeirao.jpg";
import rio from "../images/rio.jpg";
import bh from "../images/belohorizonte.jpg";

function CarouselComp(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          onClick={() => props.addCity("Rio de Janeiro, RJ, Brasil")}
          style={{ cursor: "pointer" }}
          className="d-block w-100"
          src={rio}
          alt="First slide"
          rounded
          overflow="hidden"
        />
        <Carousel.Caption>
          <h3>Rio de Janeiro</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          onClick={() => props.addCity("Ribeirão Preto, Estado de São Paulo, Brasil")}
          style={{ cursor: "pointer" }}
          className="d-block w-100"
          src={ribeirao}
          alt="First slide"
          rounded
          overflow="hidden"
        />
        <Carousel.Caption>
          <h3>Ribeirão Preto</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          onClick={() => props.addCity("Belo Horizonte - Minas Gerais, Brasil")}
          style={{ cursor: "pointer" }}
          className="d-block w-100"
          src={bh}
          alt="First slide"
          rounded
          overflow="hidden"
        />

        <Carousel.Caption>
          <h3>Belo Horizonte</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
