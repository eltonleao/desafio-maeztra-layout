"use client";

import styles from "./partners.module.css";
import Slider from "react-slick";

function Card({ image }: any) {
  return (
    <div className={`${styles.dealCard}`}>
      <img height={64} src={image} />
    </div>
  );
}

function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <section
        className={`container relative m-auto ${styles.partners}`}
        data-aos="zoon-in"
      >
        <h2 className={`${styles.title}`}>Marcas Parceiras</h2>
        <div className={`${styles.CardsContainer}`}>
          <Slider {...settings}>
            <Card image="https://i.imgur.com/Qoc0YF7.png" />
            <Card image="https://i.imgur.com/cHLLxR4.png" />
            <Card image="https://i.imgur.com/JOTNQgl.png" />
            <Card image="https://i.imgur.com/PN0nOAY.png" />
            <Card image="https://i.imgur.com/qZ1WvYA.png" />
          </Slider>
        </div>
      </section>
    </>
  );
}
export default Partners;
