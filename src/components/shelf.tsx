"use client";

import React from "react";
import styles from "./shelf.module.css";
import Slider from "react-slick";
import ProductItem from "./product";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
  nextArrow: (
    <SampleNextArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
};

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const skus = ["DEAC71", "D37164", "6497D3", "3C3B79"];
function Shelf() {
  return (
    <>
      <section
        className={`container relative m-auto shelf ${styles.shelf}`}
        data-aos="fade-up"
      >
        <h2 className={`${styles.title}`}>As Mais Pedidas</h2>
        <div className={`${styles.CardsContainer}`}>
          <Slider {...settings}>
            {
              // eslint-disable-next-line react/jsx-key
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                //random color
                <ProductItem
                  key={item}
                  color={skus[Math.floor(Math.random() * skus.length)]}
                />
              ))
            }
          </Slider>
        </div>
      </section>
    </>
  );
}
export default Shelf;
