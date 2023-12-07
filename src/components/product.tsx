"use client";

import React from "react";
import styles from "./shelf.module.css";
import Swal from "sweetalert2";
import Image from "next/image";

function Product({ color = "DEAC71" }: any) {
  const [sku, setSku] = React.useState(color);

  async function addToCart() {
    Swal.fire({
      toast: true,
      html: `Produto adicionado ao carrinho!`,
      icon: "success",
      showConfirmButton: false,
      position: "top-end",
      timer: 2000,
      timerProgressBar: true,
    });
  }

  return (
    <div className={` ${styles.productCard} `}>
      <img
        className={`${styles.productImage}`}
        src={`https://cdn.eltonleao.com/maeztra/img/product1-${sku}.png`}
        alt=""
      />
      {/* <img src="https://cdn.eltonleao.com/maeztra/img/product1.png" alt="" /> */}
      <div className={`${styles.skuContainer}`}>
        <div
          style={{ backgroundColor: "#DEAC71" }}
          className={`${styles.sku} ${sku === "DEAC71" && styles.selected}`}
          onMouseEnter={() => setSku("DEAC71")}
        ></div>
        <div
          style={{ backgroundColor: "#D37164" }}
          className={`${styles.sku} ${sku === "D37164" && styles.selected}`}
          onMouseEnter={() => setSku("D37164")}
        ></div>
        <div
          style={{ backgroundColor: "#6497D3" }}
          className={`${styles.sku} ${sku === "6497D3" && styles.selected}`}
          onMouseEnter={() => setSku("6497D3")}
        ></div>
        <div
          style={{ backgroundColor: "#3C3B79" }}
          className={`${styles.sku} ${sku === "3C3B79" && styles.selected}`}
          onMouseEnter={() => setSku("3C3B79")}
        ></div>
      </div>
      {/* valor */}
      <div className={`flex flex-col ${styles.productInfo}`}>
        <span className={`${styles.productPrice}`}>R$ 500,00</span>
        <span className={`${styles.productName}`}>Faux Suede Mini Skirt</span>
        <span className={`${styles.productDescription}`}>
          A faux suede mini skirt featuring exposed button-front closures and
          panel seam construction.
        </span>
        <button onClick={addToCart} className={`${styles.addToCartBtn}`}>
          Adicionar
        </button>
      </div>
    </div>
  );
}
export default Product;
