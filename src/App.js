import React from "react";
import "./style.global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./components/Produtos/Produtos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contato from "./components/Contato/Contato";
import ProdutoDetalhe from "./components/ProdutoDetalhes/ProdutoDetalhe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/produto/:id" element={<ProdutoDetalhe />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
