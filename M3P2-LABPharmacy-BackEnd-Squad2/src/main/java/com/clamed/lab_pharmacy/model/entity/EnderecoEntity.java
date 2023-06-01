package com.clamed.lab_pharmacy.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;





@Entity
@Table(name = "endereco")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EnderecoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "cep", nullable = false, length = 9)
    private String cep;

    @NotNull
    @Column(name = "logradouro", nullable = false)
    private String logradouro;

    @NotNull
    @Column(name = "numero", nullable = false)
    private Integer numero;

    @Column(name = "bairro", nullable = false)
    private String bairro;
    @NotNull
    @Column(name = "cidade", nullable = false)
    private String cidade;

    @NotNull
    @Column(name = "estado", nullable = false)
    private String estado;


    @Column(name = "complemento")
    private String complemento;

//    @NotNull
//    @Column(name = "latitude", nullable = false)
//    private Double latitude;
//
//    @NotNull
//    @Column(name = "longitude", nullable = false)
//    private Double longitude;
}