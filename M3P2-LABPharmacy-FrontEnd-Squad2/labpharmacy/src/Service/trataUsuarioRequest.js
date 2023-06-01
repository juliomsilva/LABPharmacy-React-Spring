import axios from "axios";
export default class TrataUsuarioRequest {
  getUsuario() {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:8080/usuario")
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  postUsuario(usuario) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:8080/usuario", {
          data: usuario,
        })
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  deleteUsuario(idUsuario) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`http://localhost:8080/usuario/${idUsuario}`)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  logarUsuario(email, senha) {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:8080/usuario/login", {
          params: {email: email, senha: senha},
        })

        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
