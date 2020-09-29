import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProdutoDetalhe.module.css";
import Head from "../Head/Head";

const ProdutoDetalhe = () => {
  let { id } = useParams();
  const [produtoDetalhe, setProdutoDetalhe] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  React.useEffect(() => {
    async function obterProduto(url) {
      try {
        setLoading(true);
        let resposta = await fetch(url);
        let respostaJson = await resposta.json();
        setProdutoDetalhe(respostaJson);
      } catch (error) {
        setErro(`Occoreu um erro: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    obterProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (erro) return <div>{erro}</div>;
  if (produtoDetalhe === null) return <h2>Nenhum produto encontrado</h2>;

  return (
    <section className={`${styles.produtoDetalhe} animarDaEsquerda`}>
      <Head
        titulo={`React | ${produtoDetalhe.nome}`}
        descricao={`React | ${produtoDetalhe.nome}`}
      />

      <div>
        {produtoDetalhe.fotos.map((cadaFoto) => (
          <img key={cadaFoto.src} src={cadaFoto.src} alt={cadaFoto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produtoDetalhe.nome}</h1>
        <span className={styles.precoProduto}>R$ {produtoDetalhe.preco}</span>
        <p className={styles.descricaoProduto}>{produtoDetalhe.descricao}</p>
      </div>
    </section>
  );
};

export default ProdutoDetalhe;
