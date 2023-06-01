package com.clamed.lab_pharmacy.model.dto;

import com.clamed.lab_pharmacy.model.entity.EnderecoEntity;
import com.clamed.lab_pharmacy.model.entity.ProdutoEntity;
import com.clamed.lab_pharmacy.model.entity.UsuarioEntity;
import com.clamed.lab_pharmacy.model.entity.VendaEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VendaResponse {

    private Long id;
    private UsuarioEntity comprador;
    private UsuarioEntity vendedor;

    private ProdutoEntity produtoVendido;

    private BigDecimal precoUnitarioVendido;

    private Integer quantidadeProdutoVendido;

    private EnderecoEntity enderecoVenda;

    private String dataHoraVenda;

    private BigDecimal precoTotalVenda;

    private String formaPagamento;

    public VendaResponse(VendaEntity venda) {
        this.id = venda.getId();
        this.dataHoraVenda = venda.getDataHoraVenda();
        this.enderecoVenda = venda.getEnderecoVenda();
        this.precoTotalVenda = venda.getPrecoTotalVenda();
        this.formaPagamento = venda.getFormaPagamento();
        this.precoUnitarioVendido = venda.getPrecoUnitarioVendido();
        this.produtoVendido = venda.getProdutoVendido();
        this.quantidadeProdutoVendido = venda.getQuantidadeProdutoVendido();
        this.vendedor = venda.getVendedor();
        this.comprador=venda.getComprador();
    }
}