import React from "react";
import { Link } from "react-router-dom";
import Head from "../Head/Head";
import styles from "./Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((resposta) => resposta.json())
      .then((resultadoProdutos) => setProdutos(resultadoProdutos));
  }, []);

  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} animarDaEsquerda`}>
      <Head titulo="React | Produtos" descricao="React | Produtos" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1 className={styles.nomeProduto}>{produto.nome}</h1>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
