package com.clamed.lab_pharmacy.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

import java.time.LocalDate;

@Entity
@Table(name = "usuario")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "nome_completo")
    private String nomeCompleto;

    @NotNull
    @Column(name = "cpf")
    private String cpf;

    @NotNull
    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;

    @NotNull
    @Column(name = "email", unique = true)
    private String email;

    @NotNull
    @Column(name = "numero_telefone")
    private String numeroTelefone;

    @Column(name = "senha")
    private String senha;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_endereco")
    private EnderecoEntity endereco;

    @ManyToOne
    @JoinColumn(name = "tipo_usuario")
    @NotNull
    private TipoUsuario tipoUsuario;



}