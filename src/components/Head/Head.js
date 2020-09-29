import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.titulo;
    document
      .querySelector("meta[name='descricao']")
      .setAttribute("content", props.descricao);
  }, [props]);

  return <></>;
};

export default Head;
