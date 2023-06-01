package com.clamed.lab_pharmacy.model.dto;

import com.clamed.lab_pharmacy.model.entity.EnderecoEntity;
import com.clamed.lab_pharmacy.model.entity.ProdutoEntity;
import com.clamed.lab_pharmacy.model.entity.UsuarioEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VendaRequest {

    private Long id;

    private UsuarioEntity vendedor;
    private UsuarioEntity comprador;
    private ProdutoEntity produtoVendido;

    private BigDecimal precoUnitarioVendido;

    private Integer quantidadeProdutoVendido;

    private EnderecoEntity enderecoVenda;

    private String dataHoraVenda;

    private BigDecimal precoTotalVenda;

    private String formaPagamento;
}
