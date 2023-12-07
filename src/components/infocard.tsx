"use client";

import React from "react";
import styles from "./infocard.module.css";

function Infocard() {
  return (
    <>
      <section
        className={`container relative m-auto infocard ${styles.infocard}`}
      >
        <div className={`${styles.textContent}`}>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </p>
        </div>
        <div className={`${styles.imgDesktop}`}></div>
        <img
          className={`${styles.imgMobile} lg:hidden`}
          src="https://i.imgur.com/1vLCv01.png"
          alt=""
        />
      </section>
    </>
  );
}
export default Infocard;
