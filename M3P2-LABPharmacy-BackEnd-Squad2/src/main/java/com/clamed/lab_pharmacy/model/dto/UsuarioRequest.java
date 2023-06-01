package com.clamed.lab_pharmacy.model.dto;

import com.clamed.lab_pharmacy.model.entity.EnderecoEntity;
import com.clamed.lab_pharmacy.model.entity.TipoUsuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioRequest {

    private String nomeCompleto;

    private String cpf;

    private LocalDate dataNascimento;

    private String email;

    private String numeroTelefone;

    private String senha;

    private EnderecoEntity endereco;

    private TipoUsuario tipoUsuario;
}
