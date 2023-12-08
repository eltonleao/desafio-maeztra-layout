"use client";
declare global {
  interface Window {
    signUp: (e: any) => void;
  }
}
import AOS from "aos";

import "aos/dist/aos.css";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import { CategoryMenu } from "../components/categoryMenu";

import TopBar from "@/components/topbar";
import Deals from "@/components/deals";
import Partners from "@/components/partners";
import Shelf from "@/components/shelf";
import Infocard from "@/components/infocard";
import NewsLetter from "@/components/newsletter";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import React from "react";
// import ReactDOMServer from "react-dom/server";

export default function Campaign() {
  // const [email, setEmail] = React.useState("");

  function signUp(e: any = null) {
    // if (!e) return;
    // e.preventDefault();
    //get value from input #newsletter-email-signup
    //@ts-ignore
    const email = document.getElementById("newsletter-email-signup")?.value;
    if (!email) {
      alert("Digite um e-mail válido!");
      return;
    }
    //show loading
    axios
      .post("https://api.eltonleao.com/maeztra/index.php", {
        action: "signup-for-newsletter",
        data: {
          email: email,
        },
      })
      .then((response) => {
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Cadastrado com sucesso!",
            text: "Verfique sua caixa de entrada por favor ;)",
            showConfirmButton: true,
            confirmButtonColor: "#ffcc00",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "E-mail já cadastrado!",
          });
        }
      })
      .catch((error) => {
        alert("Erro ao cadastrar e-mail!");
      });
  }

  function renderNewsLetterHTML() {
    return `
    <div class="flex justify-between">
      <div class="w-full flex-1 popup-image"></div>
      <div class="flex-1 popup-content">
        <img class="paperplane mb-3" src="https://cdn.eltonleao.com/maeztrahttps://cdn.eltonleao.com/maeztra/icons/newsletter-mail-icon.svg">
        <h5>Bem Vindo à MAEZTRA</h5>
        <h4>Receba em Primeira mão<br><strong>desconto e ofertas exclusivas</strong></h4>
        <div class="w-full">
        <form onsubmit="return false;">
          <input class="margin: " id="newsletter-email-signup" required placeholder="Digite seu e-mail" type="email" value=""/>
          <button onclick="window.signUp()" class="submit-newsletter">Enviar<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><path fill="#fff" d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg></button>
        </form>
        </div>
      </div>
    </div>
    `;
  }
  useEffect(() => {
    window.signUp = signUp;
    Swal.fire({
      html: renderNewsLetterHTML(),
      closeButtonHtml: "Fechar",
      width: "50rem",
      confirmButtonText: "OK",
      showConfirmButton: false,
      confirmButtonColor: "#ffcc00",
      showCloseButton: true,
      customClass: {
        popup: "bg-white p-0 m-0 newsletter-popup",
        closeButton: "newsletter-close-button",
        container: "p-0 m-0",
        htmlContainer: "p-0 m-0 teste42",
      },
    });
  }, []);
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    //if window size change, wait 1s and reload page
    window.addEventListener("resize", () => {
      Swal.showLoading();
      window.location.reload();
    });
  }, []);
  return (
    <>
      <TopBar />
      <div className="fixtop"></div>
      <Navbar />
      <CategoryMenu />
      <Hero />
      <Deals />
      <Partners />
      <Shelf />
      <Infocard />
      <NewsLetter />
      <Footer />
    </>
  );
}
