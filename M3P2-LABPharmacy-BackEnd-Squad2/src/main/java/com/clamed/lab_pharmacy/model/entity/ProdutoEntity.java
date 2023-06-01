package com.clamed.lab_pharmacy.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import jakarta.persistence.*;


import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "produtos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProdutoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "nome_produto")
    private String nomeProduto;


    @Column(name = "nome_laboratorio")
    private String nomeLaboratorio;

    @NotNull
    @Column(name = "imagem_produto")
    private String imagemProduto;

    @NotNull
    @Column(name = "dosagem")
    private String dosagem;

    @Column(name = "descricao_produto")
    private String descricaoProduto;

    @NotNull
    @Column(name = "preco_unitario")
    private BigDecimal precoUnitario;

    @NotNull
    @Column(name = "tipo_produto")
    private String tipoProduto;

    @NotNull
    @Column(name = "quantidade_estoque")
    private Integer quantidadeEstoque;

    @NotNull
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro;

    @Column(name = "id_cadastrador")
    private Long idCadastrador;

    private String CadastradoPor;
}
