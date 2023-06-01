package com.clamed.lab_pharmacy.service;

import com.clamed.lab_pharmacy.exception.EmptyListException;
import com.clamed.lab_pharmacy.exception.ProdutoNotFoundException;
import com.clamed.lab_pharmacy.model.dto.VendaRequest;
import com.clamed.lab_pharmacy.model.dto.VendaResponse;
import com.clamed.lab_pharmacy.model.entity.VendaEntity;
import com.clamed.lab_pharmacy.repository.ProdutoRepository;
import com.clamed.lab_pharmacy.repository.UsuarioRepository;
import com.clamed.lab_pharmacy.repository.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VendaService {

    @Autowired
    private VendaRepository repository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private ProdutoRepository produtoRepository;


    public List<VendaResponse> buscaListaVendas() throws EmptyListException {
        List<VendaEntity> vendaEntities;
        vendaEntities = repository.findAll();
        if (vendaEntities.isEmpty()) {
            throw new EmptyListException("Não foi possível encontrar nenhuma venda cadastrada.");
        }

        List<VendaResponse> vendas = new ArrayList<>();
        for (VendaEntity venda : vendaEntities) {
            VendaResponse vendaResponse = new VendaResponse(venda);
            vendas.add(vendaResponse);
        }
        return vendas;
    }

    public VendaResponse buscarVendaPorId(Long id) throws ProdutoNotFoundException {
        Optional<VendaEntity> vendaEntity = repository.findById(id);
        if (vendaEntity.isPresent()) {
            return new VendaResponse(vendaEntity.get());
        } else {
            throw new ProdutoNotFoundException("Venda não encontrado com ID: " + id);
        }
    }

    public void deletarVendaPorId(Long id) throws ProdutoNotFoundException {
        if (!repository.existsById(id)) {
            throw new ProdutoNotFoundException("Não foi possível encontrar uma venda com o ID informado. ID:"+id);
        }
        repository.deleteById(id);
    }

    public VendaResponse atualizarVenda(Long id, VendaRequest request) throws ProdutoNotFoundException {

        Optional<VendaEntity> vendaEntity = repository.findById(id);
        if (!vendaEntity.isPresent()) {
            throw new ProdutoNotFoundException("Venda não encontrado");
        }

        VendaEntity venda = vendaEntity.get();

        venda.setEnderecoVenda(request.getEnderecoVenda());
        venda.setDataHoraVenda(request.getDataHoraVenda());
        venda.setPrecoTotalVenda(request.getPrecoTotalVenda());
        venda.setVendedor(request.getVendedor());
        venda.setComprador(request.getComprador());
        venda.setFormaPagamento(request.getFormaPagamento());
        venda.setPrecoUnitarioVendido(request.getPrecoUnitarioVendido());
        venda.setProdutoVendido(request.getProdutoVendido());
        venda.setQuantidadeProdutoVendido(request.getQuantidadeProdutoVendido());

        VendaEntity vendaAtualizada = repository.save(venda);

        return new VendaResponse(vendaAtualizada);
    }
    public VendaResponse cadastrarVenda(VendaRequest  request) {

        VendaEntity novaVenda = new VendaEntity();

        novaVenda.setVendedor(request.getVendedor());
        novaVenda.setProdutoVendido(request.getProdutoVendido());
        novaVenda.setComprador(request.getComprador());
        novaVenda.setPrecoUnitarioVendido(request.getPrecoUnitarioVendido());
        novaVenda.setQuantidadeProdutoVendido(request.getQuantidadeProdutoVendido());
        novaVenda.setEnderecoVenda(request.getEnderecoVenda());
        novaVenda.setDataHoraVenda(LocalDateTime.now().toString());
        novaVenda.setPrecoTotalVenda(request.getPrecoTotalVenda());
        novaVenda.setFormaPagamento(request.getFormaPagamento());

         repository.save(novaVenda);
        return new VendaResponse(novaVenda);
    }

}
