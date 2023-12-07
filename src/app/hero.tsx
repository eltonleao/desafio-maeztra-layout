"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./hero.module.css";

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

function Banner({ desktopIMG, mobileIMG }: any) {
  return (
    <div className={`${styles.slide}`}>
      <img className={`m-auto ${styles.dektopIMG}`} src={desktopIMG} alt="" />
      <img className={`m-auto ${styles.mobileIMG}`} src={mobileIMG} alt="" />
      <div className={`container ${styles.sliderContentContainer}`}>
        <h3>Promoções de Outono</h3>
        <p>Confiras os melhores looks para combinar com você nesse Outono</p>
        <button>Conferir</button>
      </div>
    </div>
  );
}

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
  };

  return (
    <header className={`${styles.hero} hero`} data-aos="fade-down">
      <Slider {...settings} className={`${styles.slider}`}>
        <Banner
          desktopIMG="https://i.imgur.com/ftECh3G.png"
          mobileIMG="/img/banner1-mobile.png"
        />
        <Banner
          desktopIMG="https://i.imgur.com/ftECh3G.png"
          mobileIMG="/img/banner1-mobile.png"
        />
        <Banner
          desktopIMG="https://i.imgur.com/ftECh3G.png"
          mobileIMG="/img/banner1-mobile.png"
        />
        <Banner
          desktopIMG="https://i.imgur.com/ftECh3G.png"
          mobileIMG="/img/banner1-mobile.png"
        />
        <Banner
          desktopIMG="https://i.imgur.com/ftECh3G.png"
          mobileIMG="/img/banner1-mobile.png"
        />
        <Banner
          desktopIMG="https://i.imgur.com/ftECh3G.png"
          mobileIMG="/img/banner1-mobile.png"
        />
        <Banner
          desktopIMG="https://i.imgur.com/ftECh3G.png"
          mobileIMG="/img/banner1-mobile.png"
        />
      </Slider>
    </header>
  );
}
