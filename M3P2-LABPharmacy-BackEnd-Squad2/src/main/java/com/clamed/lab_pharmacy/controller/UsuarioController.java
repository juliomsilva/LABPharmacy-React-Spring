package com.clamed.lab_pharmacy.controller;

import com.clamed.lab_pharmacy.model.dto.ProdutoResponse;
import com.clamed.lab_pharmacy.model.dto.UsuarioRequest;
import com.clamed.lab_pharmacy.model.dto.UsuarioRequestLogin;
import com.clamed.lab_pharmacy.model.dto.UsuarioResponse;
import com.clamed.lab_pharmacy.pattern.DefaultResponse;
import com.clamed.lab_pharmacy.service.UsuarioService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000 ")
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService service;


    @GetMapping("/login")
    @Operation(
            summary = "Logar no sistema",
            description = "Rota responsável por logar o usuário no sistema",
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
    public ResponseEntity<DefaultResponse<UsuarioResponse>> validarLogin(@RequestParam String email, @RequestParam String senha){
        UsuarioResponse usuario = service.buscaUsuarioPorEmailESenha(email,senha);
        DefaultResponse<UsuarioResponse> response = new DefaultResponse<>(HttpStatus.OK.value(), "Método GET realizado com sucesso, o email e senha informados correspondem ao usuário de id: "+usuario.getId(),usuario);
        return new ResponseEntity<>(
                response,
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{id}")
    @Operation(
            summary = "Deletar um usuario por ID",
            description = "Rota responsável por deletar um usuario pelo seu ID",
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

        service.deletarUsuario(id);
        DefaultResponse<Object> response = new DefaultResponse<>(HttpStatus.OK.value(), "Usuario deletado com sucesso", null);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }
    @PostMapping("/cadastro")
    @Operation(
            summary = "Cadastrar usuario no sistema",
            description = "Rota responsável por cadastrar o usuário no sistema",
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
    public ResponseEntity<DefaultResponse<UsuarioResponse>> cadastrarUsuario(@RequestBody UsuarioRequest request){
        UsuarioResponse usuario = service.salvarNovoUsuario(request);
        DefaultResponse<UsuarioResponse> response = new DefaultResponse<>(HttpStatus.CREATED.value(), "Método POST realizado com sucesso, o usuário "+ request.getEmail()+" foi cadastrado na base de dados.",usuario);
        return new ResponseEntity<>(
                response,
                HttpStatus.CREATED
        );
    }

    @GetMapping
    @Operation(
            summary = "Buscar todos os usuários",
            description = "Rota responsável por buscar todos os usuários existentes no banco de dados",
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
    public ResponseEntity<DefaultResponse<List<UsuarioResponse>>> buscarUsuarios(){
        List<UsuarioResponse> user = service.buscarTodos();
        DefaultResponse<List<UsuarioResponse>> response = new DefaultResponse<>(HttpStatus.OK.value(), "Método GET foi realizado com sucesso para busca de todos os usuarios.",user);
        return new ResponseEntity<>(
                response,
                HttpStatus.OK
        );
    }

}