import React from "react";
import styles from "./footer.module.css";

import Image from "next/image";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";

function Icon({ id, open }: any) {
  if (open && id == open) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="7"
        viewBox="0 0 448 512"
      >
        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
      </svg>
    );
  } else {
    return (
      <svg
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.8 4.944V3.024H3.504V0.335999H5.424V3.024H8.16V4.944H5.424V7.664H3.504V4.944H0.8Z"
          fill="#353535"
        />
      </svg>
    );
  }
}

export function Footer() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  return (
    <footer className={`${styles.footer}`}>
      <div className={`container relative m-auto ${styles.menu}`}>
        <ul className={`${styles.info}`}>
          <li>
            <span className={`${styles.title}`}>Informações</span>
          </li>
          <li>Prazo de Envio</li>
          <li>Trocas e Devoluções</li>
          <li>Promoções e Cupons</li>
        </ul>
        <ul className={`${styles.account}`}>
          <li>
            <span className={`${styles.title}`}>Minha Conta</span>
          </li>
          <li>Minha Conta</li>
          <li>Meus Pedidos</li>
          <li>Cadastre-se</li>
        </ul>
        <ul className={`${styles.wheretofind}`}>
          <li>
            <span className={`${styles.title}`}>Onde nos Encontrar</span>
          </li>
          <li>Lojas</li>
          <li>Endereço</li>
        </ul>
      </div>
      <div>
        <div className={`${styles.menuMobile} container m-auto`}>
          <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                className={`${styles.titleMobile} border-b-0`}
                onClick={() => handleOpen(1)}
              >
                Informações
              </AccordionHeader>
              <AccordionBody>
                <ul className={`${styles.info}`}>
                  <li>Prazo de Envio</li>
                  <li>Trocas e Devoluções</li>
                  <li>Promoções e Cupons</li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                className={`${styles.titleMobile} border-b-0`}
                onClick={() => handleOpen(2)}
              >
                Minha Conta
              </AccordionHeader>
              <AccordionBody>
                <ul className={`${styles.account}`}>
                  <li>Minha Conta</li>
                  <li>Meus Pedidos</li>
                  <li>Cadastre-se</li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                className={`${styles.titleMobile} border-b-0`}
                onClick={() => handleOpen(3)}
              >
                Onde nos Encontrar
              </AccordionHeader>
              <AccordionBody>
                <ul className={`${styles.wheretofind}`}>
                  <li>Lojas</li>
                  <li>Endereço</li>
                </ul>
              </AccordionBody>
            </Accordion>
          </>
        </div>
      </div>
      <div className={`${styles.bottom} `}>
        <div className={`container m-auto flex w-full ${styles.content}`}>
          <div className={`${styles.socialMedia}`}>
            <Link
              target="_blank"
              href={"https://www.facebook.com/maeztraconsultoria/"}
            >
              <img src=".//icons/facebook.svg" alt="" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/maeztra/"}
            >
              <img src=".//icons/linkedin.svg" alt="" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/maeztra_consultoria/"}
            >
              <img src=".//icons/instagram.svg" alt="" />
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@maeztra"}>
              <img src=".//icons/youtube.svg" alt="" />
            </Link>
          </div>
          <div className={`${styles.paymentMethods} flex gap-1`}>
            <img src=".//icons/visa.svg" alt="" />
            <img src=".//icons/mastercard.svg" alt="" />
            <img src=".//icons/visa.svg" alt="" />
            <img src=".//icons/mastercard.svg" alt="" />
          </div>
          <div className={`${styles.poweredby} flex gap-5 items-center	`}>
            <div className="flex flex-col items-center gap-1">
              <span>Powered by</span>
              <img src=".//img/vtex.png" alt="" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span>Developed by</span>
              <img width={100} src=".//img/maeztra-footer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
function setOpen(arg0: any) {
  throw new Error("Function not implemented.");
}
