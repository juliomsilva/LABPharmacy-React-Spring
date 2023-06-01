import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Container, Paper } from "@material-ui/core";
import labPhamacyImage from "../Images/LabPhamacy.png";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { UserContext } from "../Context/usuarioId";
import axios from "axios";
import TrataUsuarioRequest from "../Service/trataUsuarioRequest";

const trataUsuarioRequest = new TrataUsuarioRequest();

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
  },
}));

const Login = () => {
  const classes = useStyles();
  const { setUserId } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    trataUsuarioRequest.logarUsuario(email, password)
    .then((response) => {
      const data = response.data.data;
      setUserId(data.id);
      localStorage.setItem("userId", JSON.stringify(data.id));
      navigate("/admin");
    })
    .catch((error) => {
      console.error(error);
      if (error.response && error.response.status === 404) {
        alert("Usuário não encontrado");
      } else {
        alert("Não foi possível realizar o login");
      }
    });

    // try {
    //   trataUsuarioRequest.logarUsuario(email, password).then((response) => {
    //     const data = response.data.data;
    //     setUserId(data.id);
    //     localStorage.setItem("userId", JSON.stringify(data.id));
    //     navigate("/admin");
    //   });
    // } catch (error) {
    //   console.error(error);
    //   alert("Não foi possível realizar o login");
    // }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <Paper className={classes.paper}>
          <img src={labPhamacyImage} alt="Logo" width={200} height={150} />{" "}
          {/* Adicione a imagem aqui */}
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // InputLabelProps={{ required: true, shrink: true }}
            />
            {/* Campo de Senha */}
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Senha"
              type={
                showPassword ? "text" : "password"
              } /* Usar o tipo "text" quando showPassword for verdadeiro, caso contrário, "password" */
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // InputLabelProps={{ required: true, shrink: true }}
              InputProps={{
                // Adicionar um ícone ao final do campo de senha para mostrar/ocultar a senha
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    style={{ fontSize: 5 }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#59acb4", color: "white" }}
              className={classes.submit}
            >
              Logar
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
