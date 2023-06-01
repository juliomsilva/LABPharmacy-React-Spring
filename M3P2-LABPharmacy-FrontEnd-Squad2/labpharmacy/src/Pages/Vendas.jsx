import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ListaVendas from "../Components/ListaVendas";
import CadastroVendas from "../Components/CadastroVendas";

const Vendas = () => {
  const [atualizacao, setAtualizacao] = useState("");
  return (
    <>
      <Sidebar></Sidebar>
      <CadastroVendas
        setAtualizacao={setAtualizacao}
        atualizacao={atualizacao}
      ></CadastroVendas>
      <ListaVendas
        setAtualizacao={setAtualizacao}
        atualizacao={atualizacao}
      ></ListaVendas>
    </>
  );
};

export default Vendas;
