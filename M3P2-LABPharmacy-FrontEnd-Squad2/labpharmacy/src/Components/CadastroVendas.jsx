import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TrataUsuarioRequest from "../Service/trataUsuarioRequest";
import { Button } from "@material-ui/core";
import { Grid, TextField, Typography } from "@material-ui/core";
import TrataProdutosRequest from "../Service/TrataProdutosRequest";
import TrataVendasRequest from "../Service/TrataVendasRequest";

const CadastroVendas = ({ atualizacao, setAtualizacao }) => {
  const [vendedor, setVendedor] = useState([]);
  const [produto, setProduto] = useState([]);
  const [comprador, setComprador] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [atualiza, setAtualiza] = useState(false);
  const [total, setTotal] = useState(0);
  const [selectedOptionComprador, setSelectedOptionComprador] = useState("");
  const [novaVenda, setNovaVenda] = useState({
    comprador: "",
    vendedor: "",
    produtoVendido: "",
    precoUnitarioVendido: 0,
    quantidadeProdutoVendido: 0,
    enderecoVenda: "",
    dataHoraVenda: new Date().toISOString().slice(0, 19).replace("T", " "),
    precoTotalVenda: 0,
    formaPagamento: "Cartão de crédito",
  });
  const request = new TrataUsuarioRequest();
  const requestProdutos = new TrataProdutosRequest();
  const requestVendas = new TrataVendasRequest();

  async function carregarDados() {
    const dados = await request.getUsuario();
    setUsuarios(dados.data.data);
  }
  async function carregaCompradores() {
    const comprador = [];
    usuarios.forEach((usuario) => {
      if (usuario.tipoUsuario.tipoUsuario === 0) comprador.push(usuario);
    });
    setComprador(comprador);
  }
  async function carregaProdutos() {
    const produto = await requestProdutos.getProdutos();
    setProduto(produto.data.data);
  }
  async function carregaVendedores() {
    const vendedor = [];
    usuarios.forEach((usuario) => {
      if (usuario.tipoUsuario.tipoUsuario === 1) {
        vendedor.push(usuario);
      }
    });
    setVendedor(vendedor);
  }
  useEffect(() => {
    carregarDados();
  }, []);
  useEffect(() => {
    carregaCompradores();
    carregaVendedores();
    carregaProdutos();
  }, [usuarios]);
  useEffect(() => {
    setNovaVenda({
      ...novaVenda,
      enderecoVenda: selectedOptionComprador.endereco,
    });
  }, [selectedOptionComprador]);

  async function trataCadastraVenda() {
    let unitario = novaVenda.precoUnitarioVendido;
    let quantidade = novaVenda.quantidadeProdutoVendido;
    let total = unitario * quantidade;
    setTotal(total);
    setNovaVenda({
      ...novaVenda,
      precoTotalVenda: total,
    });
  }
  useEffect(() => {
    setNovaVenda({
      ...novaVenda,
      precoTotalVenda: total,
    });
  }, [total]);
  async function enviaParaBack() {
    await trataCadastraVenda();
    requestVendas.postVenda(novaVenda);
    setAtualizacao(`on`);
  }

  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        width: "75rem",
        margin: "0 auto",
      }}
    >
      <Grid item xs={12} style={{ marginLeft: "13rem", padding: "2rem" }}>
        <Typography variant="h5">Cadastro de Vendas</Typography>
        <Box
          component="form"
          style={{ marginTop: `3rem` }}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ minWidth: "14rem" }}>
              <p style={{ marginBottom: "-20px", color: "#6d6d6d" }}>
                Vendedor *
              </p>
              <select
                placeholder={`Vendedor`}
                onChange={(e) => {
                  let vendedor = JSON.parse(e.target.value);
                  setNovaVenda({ ...novaVenda, vendedor: vendedor });
                }}
                style={{
                  marginTop: "25px",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  boxShadow: "none",
                  minWidth: "10rem",
                }}
              >
                <option value={""}>Selecione o vendedor</option>
                {Object.keys(vendedor).map((key) => (
                  <option key={key} value={JSON.stringify(vendedor[key])}>
                    {vendedor[key].nomeCompleto}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ minWidth: "14rem" }}>
              <p style={{ marginBottom: "-20px", color: "#6d6d6d" }}>
                Comprador *
              </p>
              <select
                placeholder={`Comprador`}
                onChange={(e) => {
                  let comprador = JSON.parse(e.target.value);
                  setSelectedOptionComprador(comprador);
                  setNovaVenda({ ...novaVenda, comprador: comprador });
                }}
                style={{
                  marginTop: "25px",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  boxShadow: "none",
                  minWidth: "10rem",
                }}
              >
                <option value={""}>Selecione o comprador</option>
                {Object.keys(comprador).map((key) => (
                  <option key={key} value={JSON.stringify(comprador[key])}>
                    {comprador[key].nomeCompleto}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ minWidth: "14rem" }}>
              <p style={{ marginBottom: "-20px", color: "#6d6d6d" }}>
                Produto *
              </p>
              <select
                placeholder={`Produto`}
                onChange={(e) => {
                  let produto = JSON.parse(e.target.value);
                  setNovaVenda({
                    ...novaVenda,
                    produtoVendido: produto,
                    precoUnitarioVendido: produto.precoUnitario,
                  });
                }}
                style={{
                  marginTop: "25px",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  boxShadow: "none",
                  minWidth: "10rem",
                }}
              >
                <option value={""}>Selecione o produto</option>
                {Object.keys(produto).map((key) => (
                  <option key={key} value={JSON.stringify(produto[key])}>
                    {produto[key].nomeProduto}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ minWidth: "14rem" }}>
              <p style={{ marginBottom: "-20px", color: "#6d6d6d" }}>
                Pagamento *
              </p>
              <select
                placeholder={`Pagamento`}
                onChange={(e) => {
                  setNovaVenda({
                    ...novaVenda,
                    formaPagamento: e.target.value,
                  });
                }}
                style={{
                  marginTop: "25px",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  boxShadow: "none",
                  minWidth: "10rem",
                }}
              >
                <option value={""}>Selecione o pagamento</option>
                <option value={"Dinheiro"}>Dinheiro</option>
                <option value={"Cartao"}>Cartao</option>
                <option value={"Pix"}>Pix</option>
              </select>
            </div>
          </div>
          <TextField
            required
            variant="standard"
            fullWidth
            id="Quantidade"
            type="number"
            label="Quantidade"
            name="Quantidade"
            onChange={(e) => {
              setNovaVenda({
                ...novaVenda,
                quantidadeProdutoVendido: e.target.value,
              });
            }}
          />
          <TextField
            required
            variant="standard"
            fullWidth
            id="Total"
            label="Total"
            name="Total"
            value={(
              novaVenda.precoUnitarioVendido *
                novaVenda.quantidadeProdutoVendido ?? 0
            ).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            InputProps={{
              readOnly: true,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{
              backgroundColor: "#59acb4",
              color: "white",
              marginTop: "1.5rem",
              marginLeft: "2rem",
              width: "15rem",
            }}
            onClick={async () => {
              await trataCadastraVenda();
              await enviaParaBack();
            }}
          >
            Cadastrar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default CadastroVendas;
