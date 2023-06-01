package com.clamed.lab_pharmacy.model.dto;

import com.clamed.lab_pharmacy.model.entity.ProdutoEntity;
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
public class ProdutoResponse {

    private Long idProduto;
    private String nomeProduto;


    private String nomeLaboratorio;


    private String imagemProduto;


    private String dosagem;


    private String descricaoProduto;


    private BigDecimal precoUnitario;


    private String tipoProduto;



    private Integer quantidadeEstoque;

    private LocalDate dataCadastro;


    private String CadastradoPor;


    public ProdutoResponse(ProdutoEntity produtoEntity) {

        this.idProduto = produtoEntity.getId();
        this.nomeProduto = produtoEntity.getNomeProduto();
        this.nomeLaboratorio = produtoEntity.getNomeLaboratorio();
        this.imagemProduto = produtoEntity.getImagemProduto();
        this.dosagem = produtoEntity.getDosagem();
        this.descricaoProduto = produtoEntity.getDescricaoProduto();
        this.precoUnitario = produtoEntity.getPrecoUnitario();
        this.tipoProduto = produtoEntity.getTipoProduto();
        this.quantidadeEstoque = produtoEntity.getQuantidadeEstoque();
        this.dataCadastro = produtoEntity.getDataCadastro();
        this.CadastradoPor = produtoEntity.getCadastradoPor();

    }
}
