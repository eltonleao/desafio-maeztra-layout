"use client";

import styles from "./deals.module.css";
import Slider from "react-slick";
import Image from "next/image";

function DealCard({ image, title, description }: any) {
  return (
    <div className={`${styles.dealCard}`}>
      <div>
        <img alt="" className={`${styles.dealIcon}`} height={32} src={image} />
      </div>
      <div className={`${styles.dealCardTextContainer}`}>
        <h3 className={`${styles.dealTitle}`}>{title}</h3>
        <p className={`${styles.dealText}`}>{description}</p>
      </div>
    </div>
  );
}

function Deals() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
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
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <section
        className={`container relative m-auto deals ${styles.deals}`}
        data-aos="fade-up"
      >
        <h2 className={`${styles.title}`}>Por que comprar na Maeztra?</h2>
        <div className={`${styles.dealsCardsContainer}`}>
          <Slider {...settings}>
            <DealCard
              image="https://cdn.eltonleao.com/maeztra/icons/deal1.png"
              title="Produtos importados"
              description="Produto de Alta Qualidade"
            />
            <DealCard
              image="https://cdn.eltonleao.com/maeztra/icons/deal2.png"
              title="Estoque no Brazil"
              description="Produtos mais perto de você!"
            />
            <DealCard
              image="https://cdn.eltonleao.com/maeztra/icons/deal3.png"
              title="Trocas Garantidas"
              description="Trocas em até 48 horas, vejas as regras"
            />
            <DealCard
              image="https://cdn.eltonleao.com/maeztra/icons/deal4.png"
              title="Ganhe 5% off"
              description="Pagando à vista no Cartão"
            />
            <DealCard
              image="https://cdn.eltonleao.com/maeztra/icons/deal5.png"
              title="Frete Grátis"
              description="Em compras acima de R$ 499,00"
            />
          </Slider>
        </div>
      </section>
    </>
  );
}
export default Deals;
