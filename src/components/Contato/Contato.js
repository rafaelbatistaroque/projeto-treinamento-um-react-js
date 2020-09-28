import React from "react";
import styles from "./Contato.module.css";
import foto from "../../img/contato.jpg";
import Head from "../Head/Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animarDaEsquerda`}>
      <Head title="React | Contato" descricao="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.informacoesContato}>
          <li>batista.educar@gmail.com</li>
          <li>67 99310-****</li>
          <li>Rua Perto daqui, 123</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
