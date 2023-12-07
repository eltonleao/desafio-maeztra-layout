import React, { use, useEffect } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import Image from "next/image";

import styles from "./minicart.module.css";

export function Minicart({ size }: any) {
  const [openRight, setOpenRight] = React.useState(false);
  const [canShow, setCanShow] = React.useState(false);
  const [items, setItems] = React.useState([]);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  useEffect(() => {
    setCanShow(true);
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    canShow && (
      <React.Fragment>
        <Typography
          onClick={openDrawerRight}
          as="a"
          variant="small"
          className={`${styles.navItem} ${styles.cart} relative`}
        >
          <span
            className={`absolute -top-2 -right-2 bg-orange-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs font-bold ${styles.minicartQuantity}`}
          >
            {items.length}
          </span>
          <svg
            className={`${styles.minicartIcon} cursor-pointer ${styles.minicartIconHover}`}
            height={size}
            width={size}
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3755 15.4741L13.1128 3.89368C13.0864 3.65125 12.8742 3.46716 12.6211 3.46716H10.248V2.94604C10.248 1.32166 8.8757 0 7.18914 0C5.50244 0 4.1302 1.32166 4.1302 2.94604V3.46716H1.75706C1.50395 3.46716 1.29179 3.65125 1.2653 3.89368L0.00268441 15.4741C-0.011891 15.6083 0.0333562 15.7422 0.127019 15.8425C0.220809 15.9427 0.354396 16 0.494447 16H13.8836C14.0237 16 14.1573 15.9427 14.251 15.8425C14.3449 15.7422 14.39 15.6083 14.3755 15.4741ZM5.11904 2.94604C5.11904 1.8468 6.04769 0.952393 7.18914 0.952393C8.33046 0.952393 9.2591 1.8468 9.2591 2.94604V3.46716H5.11904V2.94604ZM1.0435 15.0476L2.20231 4.41956H4.1302V5.46899C4.1302 5.73193 4.35161 5.94519 4.62462 5.94519C4.89762 5.94519 5.11904 5.73193 5.11904 5.46899V4.41956H9.2591V5.46899C9.2591 5.73193 9.48052 5.94519 9.75353 5.94519C10.0265 5.94519 10.248 5.73193 10.248 5.46899V4.41956H12.1758L13.3346 15.0476H1.0435Z"
              fill="#353535"
            />
          </svg>
          <span className={`${styles.cartLabel}`}>Meu Carrinho</span>
        </Typography>

        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className={`${styles.minicart} p-4`}
          size={700}
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Seu Carrinho
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Typography color="gray" className="mb-8 pr-4 font-normal">
            {items.length} items
            {items.map((item: any) => {
              return (
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="text-left">
                      <Typography color="gray">{item.title}</Typography>
                      <Typography color="gray">
                        R$ {item.price.toFixed(2).replace(".", ",")}
                      </Typography>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex flex-col gap-2 mt-8">
              <div className="flex items-center justify-between">
                <Typography color="gray">Total</Typography>
                <Typography color="gray">
                  {items
                    .reduce((acc: number, item: any) => {
                      return acc + item.price;
                    }, 0)
                    .toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </Typography>
              </div>
            </div>
          </Typography>
          <div className="flex gap-2">
            <Button className="w-full" size="sm" onClick={closeDrawerRight}>
              Finalizar Compra
            </Button>
          </div>
        </Drawer>
      </React.Fragment>
    )
  );
}
