/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search"; // Importando o ícone de busca do Material-UI
import Swal from "sweetalert2";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TrataProdutosRequest from "../Service/TrataProdutosRequest";

const ListaProdutos = ({
  atualizacao,
  setAtualizacao,
  setEditarProduto,
  setModoEdicao,
  setContarEdicao,
  contarEdicao,
}) => {
  const request = new TrataProdutosRequest();
  const [produtos, setProdutos] = useState([]);
  const [filtrado, setFiltro] = useState([]);
  const [termo, setTermo] = useState("");
  const [deletado, setDeletado] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFiltro(
      produtos.filter((item) => {
        if (item.idProduto.toString().includes(termo)) {
          return item;
        }

        if (
          item.nomeProduto
            .toLocaleLowerCase()
            .includes(termo.toLocaleLowerCase())
        ) {
          return item;
        }

        if (
          item.tipoProduto
            .toLocaleLowerCase()
            .includes(termo.toLocaleLowerCase())
        ) {
          return item;
        }

        return "";
      })
    );
  }, [termo]);

  useEffect(() => {
    try {
      carregarDados();
    } catch (error) {}
  }, [atualizacao, deletado]);

  async function carregarDados() {
    try {
      const response = await request.getProdutos();
      const dados = response.data.data;
      setProdutos(dados);
      setFiltro(dados);
      setAtualizacao("");
    } catch (error) {
      console.clear();
      setProdutos([]);
      setFiltro([]);
      Swal.fire({
        icon: "error",
        title: error.response.data.erro,
      });
    }
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12} style={{ marginLeft: "13rem", padding: "2rem" }}>
          <Typography variant="h5">Lista de Produtos</Typography>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            style={{ margin: "16px 0" }}
          >
            <Grid item>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <TextField
                value={termo}
                style={{ minWidth: "21rem" }}
                onChange={(e) => setTermo(e.target.value)}
                label="Buscar por id, nome ou tipo"
              />
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Medicamento</TableCell>
                  <TableCell>Dosagem</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Preço Unitario</TableCell>
                  <TableCell>Quantidade</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Acoes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtrado?.map((produto) => (
                  <TableRow key={produto.idProduto}>
                    <TableCell>{produto.idProduto}</TableCell>

                    <TableCell>{produto.nomeProduto}</TableCell>
                    <TableCell>{produto.dosagem}</TableCell>
                    <TableCell>{produto.tipoProduto}</TableCell>
                    <TableCell>
                      {produto.precoUnitario.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </TableCell>
                    <TableCell>{produto.quantidadeEstoque}</TableCell>
                    <TableCell>{produto.descricaoProduto}</TableCell>

                    <TableCell>
                      <IconButton
                        onClick={async () => {
                          await request
                            .deletarProduto(produto.idProduto)
                            .then(() => {
                              setDeletado(deletado + 1);
                            });
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          request
                            .getProdutoId(produto.idProduto)
                            .then((response) => {
                              const data = response.data.data;

                              localStorage.setItem(
                                "produtoID",
                                JSON.stringify(data.idProduto)
                              );
                              setEditarProduto(data);
                              setModoEdicao(true);
                              setContarEdicao(contarEdicao + 1);
                            });
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default ListaProdutos;
