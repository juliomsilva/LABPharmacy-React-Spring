import axios from "axios";
export default class TrataProdutosRequest {
  getProdutos() {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:8080/produtos")
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  postProduto(produto) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:8080/produtos", produto)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  deletarProduto(produto) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`http://localhost:8080/produtos/${produto}`)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  getProdutoId(produto) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:8080/produtos/${produto}`)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  atualizarProduto(idProduto, produto) {
    return new Promise((resolve, reject) => {
      axios
        .put(`http://localhost:8080/produtos/${idProduto}`, produto)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
