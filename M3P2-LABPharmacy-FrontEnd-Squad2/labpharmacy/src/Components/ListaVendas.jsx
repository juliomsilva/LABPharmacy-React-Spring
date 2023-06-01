import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search"; // Importando o ícone de busca do Material-UI
import TrataVendasRequest from "../Service/TrataVendasRequest";
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

const ListaVendas = ({ atualizacao, setAtualizacao }) => {
  const request = new TrataVendasRequest();
  const [vendas, setVendas] = useState([]);
  const [filtrado, setFiltro] = useState([]);
  const [termo, setTermo] = useState("");
  const [deletado, setDeletado] = useState(0);

  useEffect(() => {
    setFiltro(
      vendas.filter((item) => {
        if (item.id.toString().includes(termo)) {
          return item;
        }

        if (
          item.vendedor.nomeCompleto
            .toLocaleLowerCase()
            .includes(termo.toLocaleLowerCase())
        ) {
          return item;
        }

        if (
          item.produtoVendido.nomeProduto
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
    carregarDados();
  }, [deletado, atualizacao]);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    const dados = await request.getVendas();
    setVendas(dados.data.data);
    setFiltro(dados.data.data);
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12} style={{ marginLeft: "13rem", padding: "2rem" }}>
          <Typography variant="h5">Lista de Vendas</Typography>
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
                label="Buscar por id, vendedor ou produto"
              />
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Vendedor</TableCell>
                  <TableCell>Comprador</TableCell>
                  <TableCell>Endereco</TableCell>
                  <TableCell>Produto</TableCell>
                  <TableCell>Quantidade</TableCell>
                  <TableCell>Forma de Pagamento</TableCell>
                  <TableCell>Valor Total</TableCell>
                  <TableCell>Acoes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtrado?.map((venda) => (
                  <TableRow key={venda.id}>
                    <TableCell>{venda.id}</TableCell>
                    <TableCell>{venda.vendedor?.nomeCompleto}</TableCell>
                    <TableCell>{venda.comprador?.nomeCompleto}</TableCell>
                    <TableCell>
                      {venda?.enderecoVenda.logradouro +
                        ", " +
                        venda?.enderecoVenda.numero}
                    </TableCell>
                    <TableCell>{venda?.produtoVendido.nomeProduto}</TableCell>
                    <TableCell>{venda?.quantidadeProdutoVendido}</TableCell>
                    <TableCell>{venda?.formaPagamento}</TableCell>
                    <TableCell>
                      {venda.precoTotalVenda.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </TableCell>

                    <TableCell>
                      <IconButton
                        onClick={() => {
                          request
                            .deleteVenda(venda.id)
                            .then(() => setDeletado(deletado + 1));
                        }}
                      >
                        <DeleteIcon />
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

export default ListaVendas;
