import axios from "axios";
export default class TrataVendasRequest {
  getVendas() {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:8080/venda")
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  postVenda(venda) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:8080/venda", venda)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  deleteVenda(idVenda) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`http://localhost:8080/venda/${idVenda}`)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
