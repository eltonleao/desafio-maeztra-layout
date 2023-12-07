"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import styles from "./categoryMenu.module.css";

export function CategoryMenu() {
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`mx-auto flex items-center justify-center ${
          styles.categoryMenu
        } ${isScrolling ? styles.scrolling : ""}`}
      >
        <ul
          className={`ml-10 hidden items-center flex justify-center m-auto ${styles.itemsContainer}`}
        >
          <li className={`${styles.itemContainer}`}>
            <Typography
              as="a"
              variant="small"
              className={`${styles.navItem} cursor-pointer hover:text-orange-500 hover:font-semibold`}
            >
              <img src=".//icons/icon-dress.svg" alt="" />
              <span className={`${styles.highlight}`}>Novidades</span>
            </Typography>
          </li>
          <li className={`${styles.itemContainer}`}>
            <Typography
              as="a"
              variant="small"
              className={`${styles.navItem} cursor-pointer hover:text-orange-500 hover:font-semibold	`}
            >
              <span>Vestidos</span>
            </Typography>
          </li>
          <li className={`${styles.itemContainer}`}>
            <Typography
              as="a"
              variant="small"
              className={`${styles.navItem} cursor-pointer hover:text-orange-500 hover:font-semibold	`}
            >
              <span>Roupas</span>
            </Typography>
          </li>
          <li className={`${styles.itemContainer}`}>
            <Typography
              as="a"
              variant="small"
              className={`${styles.navItem} cursor-pointer hover:text-orange-500 hover:font-semibold`}
            >
              <span>Sapatos</span>
            </Typography>
          </li>
          <li className={`${styles.itemContainer}`}>
            <Typography
              as="a"
              variant="small"
              className={`${styles.navItem} cursor-pointer hover:text-orange-500 hover:font-semibold`}
            >
              <span>Lingerie</span>
            </Typography>
          </li>
          <li className={`${styles.itemContainer}`}>
            <Typography
              as="a"
              variant="small"
              className={`${styles.navItem} cursor-pointer hover:text-orange-500 hover:font-semibold`}
            >
              <span>Acessórios</span>
            </Typography>
          </li>
          <li className={`${styles.itemContainer}`}>
            <Typography
              as="a"
              variant="small"
              className={`${styles.navItem} cursor-pointer hover:text-orange-500 hover:font-semibold`}
            >
              <span>OUTLET</span>
            </Typography>
          </li>
        </ul>
      </div>
    </>
  );
}
