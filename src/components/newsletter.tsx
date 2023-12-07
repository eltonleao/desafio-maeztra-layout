"use client";

import React from "react";
import styles from "./newsletter.module.css";
import axios from "axios";
import Swal from "sweetalert2";

function NewsLetter() {
  const [email, setEmail] = React.useState("");

  function signUp(e: any) {
    e.preventDefault();
    if (!email) return;
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
            text: "PS: verfique sua caixa de entrada por favor ;)",
            showConfirmButton: false,
            timer: 3000,
          });
          setEmail("");
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

  return (
    <>
      <section className={`relative m-auto ${styles.newsletter}`}>
        <h4 className={`${styles.title}`}>Recebe Nossa Newsletter</h4>
        <div className={`${styles.submitWrapper}`}>
          <form className={`flex w-full gap-3`} onSubmit={signUp}>
            <input
              className={`${styles.input}`}
              placeholder="Digite seu e-mail"
              type="text"
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
