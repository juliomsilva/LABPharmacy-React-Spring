import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@material-ui/icons/Search";

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

const userType = [
  {
    value: "0",
    label: "Comprador",
  },
  {
    value: "1",
    label: "Administrador",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
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
  },
}));

const RegisterUser = () => {
  const classes = useStyles();

  const [usuario, setUsuario] = useState([
    {
      nomeCompleto: "",
      cpf: "",
      dataNascimento: "",
      email: "",
      numeroTelefone: "",
      senha: "",
      endereco: {
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        complemento: "",
      },
      tipoUsuario: {
        id: 0,
        tipoUsuario: 0,
      },
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      style={{ marginLeft: "11rem", marginRight: "2rem", padding: "2rem" }}
      noValidate
      autoComplete="off"
    >
      <h2>Cadastro de Usuários</h2>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="Name"
            label="Nome"
            name="Name"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="birthDate"
            label="Data de Nascimento"
            name="birthDate"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="email"
            label="E-mail"
            name="email"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="phone"
            label="Telefone"
            name="phone"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="password"
            label="Senha"
            name="password"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="userType"
            select
            label="Tipo de Usuário"
            name="userType"
            defaultValue="0"
          >
            {userType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="cep"
            label="CEP"
            name="cep"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="endereco"
            label="Endereço"
            name="endereco"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="number"
            label="Número"
            name="number"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="neighborhood"
            label="Bairro"
            name="neighborhood"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="city"
            label="Cidade"
            name="city"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="standard"
            fullWidth
            id="state"
            label="Estado"
            name="state"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            variant="standard"
            fullWidth
            id="complement"
            label="Complemento"
            name="complement"
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#59acb4", color: "white" }}
            className={classes.submit}
          >
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default RegisterUser;
