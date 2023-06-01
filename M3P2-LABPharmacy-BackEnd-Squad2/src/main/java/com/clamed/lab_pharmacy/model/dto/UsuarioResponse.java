package com.clamed.lab_pharmacy.model.dto;

import com.clamed.lab_pharmacy.model.entity.EnderecoEntity;
import com.clamed.lab_pharmacy.model.entity.ProdutoEntity;
import com.clamed.lab_pharmacy.model.entity.TipoUsuario;
import com.clamed.lab_pharmacy.model.entity.UsuarioEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioResponse {

    private Long id;

    private String nomeCompleto;

    private String cpf;

    private LocalDate dataNascimento;

    private String email;

    private String numeroTelefone;


    private EnderecoEntity endereco;

    private TipoUsuario tipoUsuario;

    


    public UsuarioResponse(UsuarioEntity usuario) {
        this.id = usuario.getId();
        this.nomeCompleto = usuario.getNomeCompleto();
        this.cpf = usuario.getCpf();
        this.dataNascimento = usuario.getDataNascimento();
        this.email = usuario.getEmail();
        this.numeroTelefone = usuario.getNumeroTelefone();
        this.endereco = usuario.getEndereco();
        this.tipoUsuario = usuario.getTipoUsuario();
    }
}
