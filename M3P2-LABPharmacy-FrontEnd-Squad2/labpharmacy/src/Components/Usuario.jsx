import React, { useEffect, useState } from "react";
import TrataUsuarioRequest from "../Service/trataUsuarioRequest";
import SearchIcon from "@material-ui/icons/Search"; // Importando o ícone de busca do Material-UI
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
import moment from "moment";

const Usuario = () => {
  const request = new TrataUsuarioRequest();
  const [usuarios, setUsuarios] = useState([]);
  const [filtrado, setFiltro] = useState([]);
  const [termo, setTermo] = useState("");
  const [deletado, setDeletado] = useState(0);

  const tipoUsuario = {
    0: "Comprador",
    1: "Administrador",
  };

  useEffect(() => {
    setFiltro(
      usuarios.filter((item) => {
        if (item.id.toString().includes(termo)) {
          return item;
        }

        if (
          item.nomeCompleto
            .toLocaleLowerCase()
            .includes(termo.toLocaleLowerCase())
        ) {
          return item;
        }

        if (
          item.email.toLocaleLowerCase().includes(termo.toLocaleLowerCase())
        ) {
          return item;
        }

        if (item.cpf.includes(termo)) {
          return item;
        }

        if (
          tipoUsuario[item.tipoUsuario.tipoUsuario]
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
  }, []);

  async function carregarDados() {
    const dados = await request.getUsuario();
    setUsuarios(dados.data.data);
    setFiltro(dados.data.data);
  }
  useEffect(() => {
    carregarDados();
  }, [deletado]);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} style={{ marginLeft: "13rem", padding: "2rem" }}>
          <Typography variant="h5">Lista de Usuários</Typography>
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
                onChange={(e) => setTermo(e.target.value)}
                label="Buscar Usuário"
              />
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>CPF</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Nascimento</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtrado?.map((usuario) => (
                  <TableRow key={usuario.id}>
                    <TableCell>{usuario.id}</TableCell>
                    <TableCell>{usuario.cpf}</TableCell>
                    <TableCell>{usuario.nomeCompleto}</TableCell>
                    <TableCell>{usuario.email}</TableCell>
                    <TableCell>
                      {moment(usuario.dataNascimento).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>
                      {usuario.tipoUsuario.tipoUsuario === 0
                        ? "Comprador"
                        : "Administrador"}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => {
                          request
                            .deleteUsuario(usuario.id)
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

export default Usuario;
