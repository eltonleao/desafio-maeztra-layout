"use client";

import React, { use, useEffect } from "react";
import styles from "./newsletter.module.css";
import axios from "axios";
import Swal from "sweetalert2";

function NewsLetter() {
  const [email, setEmail] = React.useState("");

  function saveEmail(email: string) {
    localStorage.setItem("email", email);
    window.localStorage.setItem("isThisInLocalStorage", "true");
    window.dispatchEvent(new Event("storage"));
  }

  function signUp(e: any) {
    e.preventDefault();
    if (!email) return;
    //save email on localStorage
    saveEmail(email);
    //show loading
    Swal.showLoading();
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
            // text: "Verfique sua caixa de entrada por favor ;)",
            showConfirmButton: true,
            confirmButtonColor: "#ffcc00",
          });
          setEmail("");
        } else {
          Swal.fire({
            icon: "error",
            title: "Algo deu errado",
          });
        }
      })
      .catch((error) => {
        alert("Erro ao cadastrar e-mail!");
      });
  }

  function getEmail() {
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }

  useEffect(() => {
    getEmail();

    window.addEventListener("storage", (data) => {
      getEmail();
      // ...
    });
  }, []);

  return (
    <>
      <section className={`relative m-auto ${styles.newsletter}`}>
        <h4 className={`${styles.title}`}>Recebe Nossa Newsletter</h4>
        <div className={`${styles.submitWrapper}`}>
          <form className={`flex w-full gap-3`} onSubmit={signUp}>
            <input
              className={`${styles.input}`}
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={signUp} className={`${styles.submit}`}>
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default NewsLetter;
