package com.clamed.lab_pharmacy.model.dto;

import com.clamed.lab_pharmacy.model.entity.UsuarioEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.math.BigDecimal;
import java.time.LocalDate;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProdutoRequest {

    private String nomeProduto;


    private String nomeLaboratorio;


    private String imagemProduto;


    private String dosagem;


    private String descricaoProduto;


    private BigDecimal precoUnitario;


    private String tipoProduto;

    private Integer quantidadeEstoque;

    private LocalDate dataCadastro;

    private Long idCadastrador;





}



