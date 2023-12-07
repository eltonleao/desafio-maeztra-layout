import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import styles from "./navbar.module.css";
import Swal from "sweetalert2";

import { Minicart } from "./minicart";
import Image from "next/image";
interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
}
function NavItem({ children, href, target }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={target ? target : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

function renderNewsLetterHTML() {
  return `
  <div class="flex justify-between">
    <div class="w-full flex-1 popup-image"></div>
    <div class="flex-1 popup-content">
      <img class="paperplane mb-3" src="https://cdn.eltonleao.com/maeztra/icons/lupa.svg">
      <h4>Encontre os <br><strong>melhores produtos:</strong></h4>
    </div>
  </div>
  `;
}

export function Navbar({ isSolid = false }) {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  async function searchProduct(e: any = null) {
    if (e) e.preventDefault();
    Swal.showLoading();
    fetch(
      `https://fakestoreapi.com/products/${Math.floor(Math.random() * 20) + 1}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        Swal.fire({
          html: `${result.title} <br> 
            de: <span class="line-through">R$ ${result.price
              .toFixed(2)
              .replace(".", ",")}</span>
            <br>
            por: <b>R$ ${(result.price * 0.8).toFixed(2).replace(".", ",")}</b>
              
              `,
          imageUrl: result.image,
          showCloseButton: true,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          confirmButtonColor: "#FAA500",
          confirmButtonText: "Adicionar ao carrinho",
          // showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
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
        });
      });
  }

  function openSearch() {
    Swal.fire({
      html: renderNewsLetterHTML(),
      closeButtonHtml: "Fechar",
      width: "50rem",
      confirmButtonText: "Buscar",
      showConfirmButton: true,
      confirmButtonColor: "#FAA500",
      showCloseButton: true,
      inputPlaceholder: "Digite o que você busca",
      input: "text",
      customClass: {
        confirmButton: "search-mobile-confirm-button",
        popup: "bg-white p-0 m-0 newsletter-popup search-mobile-popup",
        closeButton: "newsletter-close-button",
        container: "p-0 m-0",
        htmlContainer: "p-0 m-0 teste42",
        input: "input-search-mobile",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        searchProduct();
      }
    });
  }

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

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
      <MTNavbar
        fullWidth
        shadow={false}
        blurred={false}
        color={"white"}
        className={`fixed top-0 z-50 border-0 ${styles.navbar} ${
          isScrolling ? styles.scrolling : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-9">
          <div className={`${styles.hamburguerAndLogo}`}>
            <IconButton
              id="navbar-mobile-menu"
              variant="text"
              color="gray"
              onClick={handleOpen}
              className={`ml-auto inline-block lg:hidden ${styles.iconHamburguer}`}
            >
              {open ? (
                <XMarkIcon
                  strokeWidth={2}
                  className="h-6 w-6 teste1"
                  color={"black"}
                />
              ) : (
                <Bars3Icon
                  strokeWidth={2}
                  className="h-6 w-6 teste2"
                  color={"black"}
                />
              )}
            </IconButton>
            <Link href={"/"}>
              <img
                className={`${styles.logo}`}
                src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png"
                alt="logo maeztra"
              />
            </Link>
          </div>
          <div className={`${styles.mGlassAndBag}`}>
            <button onClick={openSearch} className="lg:hidden text-black">
              <img
                src="https://cdn.eltonleao.com/maeztra/icons/lupa.svg"
                alt=""
              />
            </button>
            <button className={`lg:hidden text-black relative`}>
              <Minicart size={24} />
            </button>
          </div>
          <div className={`relative ${styles.searchBar_container}`}>
            <form onSubmit={searchProduct}>
              <input
                className={`${styles.searchBar}`}
                type="seach"
                placeholder="O que você busca?"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                onClick={searchProduct}
                className={`${styles.searchButton} hover:bg-transparent hover:text-orange-500 hover:border-orange-500`}
              >
                Buscar
              </button>
            </form>
          </div>
          <ul
            className={`ml-10 hidden items-center gap-6 lg:flex text-gray-900`}
          >
            <li>
              <Typography
                as="a"
                variant="small"
                className={`${styles.navItem}`}
              >
                <img
                  src="https://cdn.eltonleao.com/maeztra/icons/user.svg"
                  alt=""
                />
                <span>Minha Conta</span>
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                variant="small"
                className={`${styles.navItem}`}
              >
                <img
                  src="https://cdn.eltonleao.com/maeztra/icons/icon-heart.svg"
                  alt=""
                />
                <span>Minha Lista</span>
              </Typography>
            </li>
            <li>
              <Minicart size={20} />
            </li>
          </ul>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-blue-gray-900">
              <NavItem>
                <div className="flex gap-1">
                  <img
                    src="https://cdn.eltonleao.com/maeztra/icons/icon-dress.svg"
                    alt=""
                  />
                  <span className={`${styles.highlight}`}>Novidades</span>
                </div>
              </NavItem>
              <NavItem>Vestidos</NavItem>
              <NavItem>Roupas</NavItem>
              <NavItem>Sapatos</NavItem>
              <NavItem>Lingerie</NavItem>
              <NavItem>Acessórios</NavItem>
              <NavItem>OUTLET</NavItem>
            </ul>
          </div>
        </Collapse>
      </MTNavbar>
    </>
  );
}

export default Navbar;
