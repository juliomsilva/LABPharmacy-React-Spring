import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import moment from "moment";
import Swal from "sweetalert2";
import { UserContext } from "../Context/usuarioId";

import { Typography, Grid, TextField } from "@material-ui/core";
import TrataProdutosRequest from "../Service/TrataProdutosRequest";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh", // Define a altura mínima para ocupar a tela inteira
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    border: "1px solid black",
    borderRadius: 30,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "10rem",
  },
}));

const CadastrarProduto = ({
  setAtualizacao,
  modoEdicao,
  editarProduto,
  setModoEdicao,
  setEditarProduto,
  contarEdicao,
}) => {
  const request = new TrataProdutosRequest();
  const classes = useStyles();

  const [produto, setProduto] = useState({
    nomeProduto: "",
    nomeLaboratorio: "",
    imagemProduto: "",
    dosagem: "",
    descricaoProduto: "",
    precoUnitario: "",
    tipoProduto: "",
    quantidadeEstoque: "",
    dataCadastro: moment(new Date()).format("YYYY-MM-DD"),
    idCadastrador: JSON.parse(localStorage.getItem("userId")),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    request
      .postProduto(produto)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Produto Cadastrado",
        });
        setProduto({
          nomeProduto: "",
          nomeLaboratorio: "",
          imagemProduto: "",
          dosagem: "",
          descricaoProduto: "",
          precoUnitario: "",
          tipoProduto: "",
          quantidadeEstoque: "",
          dataCadastro: moment(new Date()).format("YYYY-MM-DD"),
          idCadastrador: JSON.parse(localStorage.getItem("userId")),
        });
        setAtualizacao("Produto Cadastrado");
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    if (editarProduto) {
      setProduto({
        nomeProduto: editarProduto.nomeProduto,
        nomeLaboratorio: editarProduto.nomeLaboratorio,
        imagemProduto: editarProduto.imagemProduto,
        dosagem: editarProduto.dosagem,
        tipoProduto: editarProduto.tipoProduto,
        precoUnitario: editarProduto.precoUnitario,
        quantidadeEstoque: editarProduto.quantidadeEstoque,
        descricaoProduto: editarProduto.descricaoProduto,
        dataCadastro: moment(new Date()).format("YYYY-MM-DD"),
        idCadastrador: JSON.parse(localStorage.getItem("userId")),
      });
    }
  }, [modoEdicao, contarEdicao]);

  const salvarEdicao = (e) => {
    e.preventDefault();
    request
      .atualizarProduto(JSON.parse(localStorage.getItem("produtoID")), produto)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Produto Atualizado",
        });
        setProduto({
          nomeProduto: "",
          nomeLaboratorio: "",
          imagemProduto: "",
          dosagem: "",
          descricaoProduto: "",
          precoUnitario: "",
          tipoProduto: "",
          quantidadeEstoque: "",
          dataCadastro: moment(new Date()).format("YYYY-MM-DD"),
          idCadastrador: JSON.parse(localStorage.getItem("userId")),
        });
        setModoEdicao(false);
        setEditarProduto([]);
        setAtualizacao("Produto Editado");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          width: "75rem",
          margin: "0 auto",
        }}
      >
        <Grid item xs={8} style={{ marginLeft: "13rem", padding: "2rem" }}>
          <Typography variant="h5">Cadastro de Produtos</Typography>
          <Box
            component="form"
            style={{ marginTop: `3rem` }}
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              variant="standard"
              fullWidth
              id="Medicameto"
              label="Medicameto"
              name="Medicameto"
              value={produto.nomeProduto ?? ""}
              onChange={(e) =>
                setProduto({ ...produto, nomeProduto: e.target.value })
              }
            />
            <TextField
              required
              variant="standard"
              fullWidth
              id="Laboratorio"
              label="Laboratório"
              name="Laboratorio"
              value={produto.nomeLaboratorio ?? ""}
              onChange={(e) =>
                setProduto({ ...produto, nomeLaboratorio: e.target.value })
              }
            />
            <TextField
              required
              variant="standard"
              fullWidth
              id="Imagem"
              label="Imagem (link url)"
              name="Imagem"
              value={produto.imagemProduto ?? ""}
              onChange={(e) =>
                setProduto({ ...produto, imagemProduto: e.target.value })
              }
            />
            <TextField
              required
              variant="standard"
              fullWidth
              id="dosagem"
              label="Dosagem"
              name="dosagem"
              value={produto.dosagem ?? ""}
              onChange={(e) =>
                setProduto({ ...produto, dosagem: e.target.value })
              }
            />
            <TextField
              required
              variant="standard"
              fullWidth
              id="tipo"
              label="Tipo"
              name="tipo"
              value={produto.tipoProduto ?? ""}
              onChange={(e) =>
                setProduto({
                  ...produto,
                  tipoProduto: e.target.value,
                })
              }
            />
            <TextField
              required
              variant="standard"
              fullWidth
              id="precoUnitario"
              label="Preço Unitario"
              name="precoUnitario"
              value={produto.precoUnitario ?? 0}
              onChange={(e) =>
                setProduto({
                  ...produto,
                  precoUnitario: e.target.value.replace(",", "."),
                })
              }
            />

            <TextField
              required
              variant="standard"
              fullWidth
              id="quantidade"
              label="Quantidade"
              name="quantidade"
              value={produto.quantidadeEstoque ?? 0}
              onChange={(e) =>
                setProduto({
                  ...produto,
                  quantidadeEstoque: e.target.value,
                })
              }
            />

            <TextField
              required
              variant="standard"
              id="descricao"
              label="Descricao"
              name="descricao"
              value={produto.descricaoProduto ?? ""}
              onChange={(e) =>
                setProduto({
                  ...produto,
                  descricaoProduto: e.target.value,
                })
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#59acb4",
                color: "white",
                marginTop: "2rem",
                marginLeft: "3rem",
              }}
              className={classes.submit}
              onClick={modoEdicao ? salvarEdicao : handleSubmit}
            >
              {modoEdicao ? "Salvar" : "Cadastrar Produto"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default CadastrarProduto;
