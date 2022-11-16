import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const index = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="reviews__card" data-value="1">
      <h2>
        {" "}
        <span>m</span> Muhammad
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu viverra
        orci amet, justo donec non tristique.
      </p>
    </div>,
    <div className="reviews__card" data-value="1">
      <h2>
        {" "}
        <span>u</span> Ulugbek
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu viverra
        orci amet, justo donec non tristique. lorem10
      </p>
    </div>,
    <div className="reviews__card" data-value="1">
      <h2>
        {" "}
        <span>m</span> Muhammad
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu viverra
        orci amet, justo donec non tristique.
      </p>
    </div>,
    <div className="reviews__card" data-value="1">
      <h2>
        {" "}
        <span>m</span> Muhammad
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu viverra
        orci amet, justo donec non tristique.
      </p>
    </div>,
  ];

  const Carousel = () => (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableButtonsControls={true}
      disableDotsControls={true}
      paddingRight={0}
    />
  );
  return (
    <>
      <section className="container">
        <div className="reviews">
          <h2 className="reviews__title">Отзывы</h2>
          <div className="reviews__cards">
            <Carousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
