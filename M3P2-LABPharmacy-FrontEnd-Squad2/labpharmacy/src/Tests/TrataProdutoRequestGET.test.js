import TrataProdutosRequest from "../Service/TrataProdutosRequest";
import axios from "axios";

jest.mock("axios");

const request = new TrataProdutosRequest();

describe("TrataProdutosRequest", () => {
  describe("getProdutos", () => {
    it("deve retornar um status code 200", async () => {
      // Configura a resposta fictícia da requisição
      const resposta = {
        status: 200,
        data: { data: [] },
      };
      axios.get.mockResolvedValue(resposta);

      // Chama o método e verifica o status code da resposta
      const resultado = await request.getProdutos();
      expect(resultado.status).toBe(200);
    });
  });
});
