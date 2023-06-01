package com.clamed.lab_pharmacy.model.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;


import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;
import org.jetbrains.annotations.NotNull;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "venda")
public class VendaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_vendedor")
    private UsuarioEntity vendedor;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_comprador")
    private UsuarioEntity comprador;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name = "id_produto_vendido")
    private ProdutoEntity produtoVendido;

    @NotNull
    @Column(name = "preco_unitario_vendido")
    private BigDecimal precoUnitarioVendido;

    @NotNull
    @Column(name = "quantidade_produto_vendido")
    private Integer quantidadeProdutoVendido;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_endereco_venda")
    private EnderecoEntity enderecoVenda;


    @NotNull
    @Column(name = "data_hora_venda")
    private String dataHoraVenda;

    @NotNull
    @Column(name = "preco_total_venda")
    private BigDecimal precoTotalVenda;

    @NotNull
    @Column(name = "forma_pagamento")
    private String formaPagamento;
}
