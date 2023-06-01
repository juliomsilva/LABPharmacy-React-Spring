package com.clamed.lab_pharmacy.controller;

import com.clamed.lab_pharmacy.exception.EmptyListException;
import com.clamed.lab_pharmacy.model.dto.ProdutoRequest;
import com.clamed.lab_pharmacy.model.dto.ProdutoResponse;
import com.clamed.lab_pharmacy.model.dto.VendaRequest;
import com.clamed.lab_pharmacy.model.dto.VendaResponse;
import com.clamed.lab_pharmacy.pattern.DefaultResponse;
import com.clamed.lab_pharmacy.service.VendaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000 ")

@RequestMapping("/venda")
public class VendaController {

    @Autowired
    private VendaService service;

    @GetMapping()
    @Operation(
            summary = "Consultar lista de vendas",
            description = "Consulta a lista completa de vendas cadastradas",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Retorna a lista de vendas"
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Alguma informação não foi encontrada no banco de dados",
                            content = @Content()
                    ),

                    @ApiResponse(
                            responseCode = "500",
                            description = "Erro no servidor",
                            content = @Content()


                    )
            }
    )
    public ResponseEntity<DefaultResponse<List<VendaResponse>>> buscarTodosMedicamentos() throws EmptyListException {
        List<VendaResponse> listaVendas = service.buscaListaVendas();
        DefaultResponse<List<VendaResponse>> response = new DefaultResponse<>(HttpStatus.OK.value(), "Método GET realizado com sucesso, segue lista com todos as vendas", listaVendas);
        return new ResponseEntity<>(
                response,
                HttpStatus.OK
        );
    }
    @GetMapping("/{id}")
    @Operation(
            summary = "Consultar uma venda por ID",
            description = "Consulta a venda pelo ID que foi cadastrado",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Retorna a venda pelo ID pesquisado"
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Alguma informação não foi encontrada no banco de dados",
                            content = @Content()
                    ),

                    @ApiResponse(
                            responseCode = "500",
                            description = "Erro no servidor",
                            content = @Content()


                    )
            }
    )

    public ResponseEntity<DefaultResponse<VendaResponse>> buscarVendaPorId(@PathVariable Long id) {

        VendaResponse vendaResponse = service.buscarVendaPorId(id);
        DefaultResponse<VendaResponse> response = new DefaultResponse<>(HttpStatus.OK.value(), "Venda encontrado com sucesso", vendaResponse);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    @Operation(
            summary = "Deletar uma venda por ID",
            description = "Rota responsável por deletar a venda pelo seu ID",
            responses = {
                    @ApiResponse(
                            responseCode = "200"

                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Alguma informação não foi encontrada no banco de dados",
                            content = @Content()
                    ),

                    @ApiResponse(
                            responseCode = "500",
                            description = "Erro no servidor",
                            content = @Content()


                    )
            }
    )
    public ResponseEntity<DefaultResponse<Object>> deletarVendaPorId(@PathVariable Long id) {

        service.deletarVendaPorId(id);
        DefaultResponse<Object> response = new DefaultResponse<>(HttpStatus.OK.value(), "Venda deletada com sucesso", null);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }
    @PutMapping("/{id}")
    @Operation(
            summary = "Alterar uma venda por ID",
            description = "Rota responsável por alterar uma venda no banco de dados pelo seu ID",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "A alteração da venda foi realizado"
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Alguma informação não foi encontrada no banco de dados",
                            content = @Content()
                    ),
                    @ApiResponse(
                            responseCode = "422",
                            description = "Algum parâmetro obrigatório não foi passado",
                            content = @Content()
                    ),


                    @ApiResponse(
                            responseCode = "500",
                            description = "Erro no servidor",
                            content = @Content()


                    )
            }
    )
    public ResponseEntity<DefaultResponse<VendaResponse>> atualizarVenda(@PathVariable Long id, @RequestBody VendaRequest request) {

        VendaResponse vendaResponse = service.atualizarVenda(id, request);

        DefaultResponse<VendaResponse> response = new DefaultResponse<>(HttpStatus.OK.value(), "Venda atualizado com sucesso", vendaResponse);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @PostMapping()
    @Operation(
            summary = "Cadastrar uma nova venda",
            description = "Rota responsável por salvar uma nova venda no banco de dados",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "O cadastro da venda foi realizado"
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Alguma informação não foi encontrada no banco de dados",
                            content = @Content()
                    ),
                    @ApiResponse(
                            responseCode = "422",
                            description = "Algum parâmetro obrigatório não foi passado",
                            content = @Content()
                    ), @ApiResponse(
                    responseCode = "500",
                    description = "Erro no servidor",
                    content = @Content()
            )
            }
    )
    public ResponseEntity<DefaultResponse<VendaResponse>> cadastrarVenda(@RequestBody VendaRequest request) {
        VendaResponse venda = service.cadastrarVenda(request);
        DefaultResponse<VendaResponse> response = new DefaultResponse<>(HttpStatus.CREATED.value(), "Método POST realizado com sucesso, a venda com ID " + venda.getId() + " foi cadastrada na base de dados.", venda);
        return new ResponseEntity<>(
                response,
                HttpStatus.CREATED
        );
    }
}
