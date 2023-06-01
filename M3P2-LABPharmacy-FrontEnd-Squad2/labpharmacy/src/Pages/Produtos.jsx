import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import CadastrarProduto from "../Components/CadastrarProduto";
import ListaProdutos from "../Components/ListaProdutos";

const Produtos = () => {
  const [atualizacao, setAtualizacao] = useState("");
  const [editarProduto, setEditarProduto] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [contarEdicao, setContarEdicao] = useState(0);

  return (
    <div>
      <div>
        <Sidebar />
        <CadastrarProduto
          setAtualizacao={setAtualizacao}
          modoEdicao={modoEdicao}
          editarProduto={editarProduto}
          setModoEdicao={setModoEdicao}
          setEditarProduto={setEditarProduto}
          contarEdicao={contarEdicao}
        />
        <ListaProdutos
          atualizacao={atualizacao}
          setAtualizacao={setAtualizacao}
          setEditarProduto={setEditarProduto}
          setModoEdicao={setModoEdicao}
          contarEdicao={contarEdicao}
          setContarEdicao={setContarEdicao}
        />
      </div>
    </div>
  );
};

export default Produtos;
