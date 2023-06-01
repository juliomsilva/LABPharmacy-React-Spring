package com.clamed.lab_pharmacy.controller;

import com.clamed.lab_pharmacy.exception.EmptyListException;

import com.clamed.lab_pharmacy.model.dto.ProdutoRequest;
import com.clamed.lab_pharmacy.model.dto.ProdutoResponse;

import com.clamed.lab_pharmacy.pattern.DefaultResponse;
import com.clamed.lab_pharmacy.service.ProdutoService;


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

@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService service;


    @PostMapping()
    @Operation(
            summary = "Cadastrar um novo medicamento",
            description = "Rota responsável por salvar um novo medicamento no banco de dados",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "O cadastro do medicamento foi realizado"
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
    public ResponseEntity<DefaultResponse<ProdutoResponse>> cadastrarMedicamento(@RequestBody ProdutoRequest request) {
        ProdutoResponse produto = service.cadastrarProduto(request);
        DefaultResponse<ProdutoResponse> response = new DefaultResponse<>(HttpStatus.CREATED.value(), "Método POST realizado com sucesso, o produto " + request.getNomeProduto() + " foi cadastrado na base de dados.", produto);
        return new ResponseEntity<>(
                response,
                HttpStatus.CREATED
        );
    }


    @GetMapping()
    @Operation(
            summary = "Buscar todos os medicamentos",
            description = "Rota responsável por buscar todos os medicamentos existentes no banco de dados",
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
    public ResponseEntity<DefaultResponse<List<ProdutoResponse>>> buscarTodosMedicamentos() throws EmptyListException {
        List<ProdutoResponse> todosProdutos = service.buscarTodosOsProdutos();
        DefaultResponse<List<ProdutoResponse>> response = new DefaultResponse<>(HttpStatus.OK.value(), "Método GET realizado com sucesso, segue lista com todos os produtos", todosProdutos);
        return new ResponseEntity<>(
                response,
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    @Operation(
            summary = "Consultar um medicamento por ID",
            description = "Consulta o medicamento pelo ID que foi cadastrado",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Retorna o medicamento pelo ID pesquisado"
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

    public ResponseEntity<DefaultResponse<ProdutoResponse>> buscarProdutoPorId(@PathVariable Long id) {

            ProdutoResponse produtoResponse = service.buscarProdutoPorId(id);
            DefaultResponse<ProdutoResponse> response = new DefaultResponse<>(HttpStatus.OK.value(), "Produto encontrado com sucesso", produtoResponse);
            return new ResponseEntity<>(response, HttpStatus.OK);

    }
    @DeleteMapping("/{id}")
    @Operation(
            summary = "Deletar um produto por ID",
            description = "Rota responsável por deletar o produto pelo seu ID",
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
    public ResponseEntity<DefaultResponse<Object>> deletarProdutoPorId(@PathVariable Long id) {

            service.deletarProdutoPorId(id);
            DefaultResponse<Object> response = new DefaultResponse<>(HttpStatus.OK.value(), "Produto deletado com sucesso", null);
            return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @PutMapping("/{id}")
    @Operation(
            summary = "Alterar um medicamento por ID",
            description = "Rota responsável por alterar um medicamento no banco de dados pelo seu ID",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "A alteração do medicamento foi realizado"
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
    public ResponseEntity<DefaultResponse<ProdutoResponse>> atualizarProdutoPorId(@PathVariable Long id, @RequestBody ProdutoRequest request) {

        ProdutoResponse produtoResponse = service.atualizarProduto(id, request);

        DefaultResponse<ProdutoResponse> response = new DefaultResponse<>(HttpStatus.OK.value(), "Produto atualizado com sucesso", produtoResponse);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

