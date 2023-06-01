package com.clamed.lab_pharmacy.service;

import com.clamed.lab_pharmacy.exception.CadastradorNotFoundException;
import com.clamed.lab_pharmacy.exception.EmptyListException;
import com.clamed.lab_pharmacy.exception.ProdutoNotFoundException;
import com.clamed.lab_pharmacy.model.dto.ProdutoRequest;
import com.clamed.lab_pharmacy.model.dto.ProdutoResponse;
import com.clamed.lab_pharmacy.model.entity.ProdutoEntity;
import com.clamed.lab_pharmacy.model.entity.UsuarioEntity;
import com.clamed.lab_pharmacy.repository.ProdutoRepository;
import com.clamed.lab_pharmacy.repository.UsuarioRepository;
import com.clamed.lab_pharmacy.repository.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private VendaRepository vendaRepository;

    public ProdutoResponse cadastrarProduto(ProdutoRequest request) {


            Optional<UsuarioEntity> usuario = Optional.ofNullable(usuarioRepository.findById(request.getIdCadastrador()).orElseThrow(() -> new CadastradorNotFoundException("Não foi possível encontrar um usuário cadastrador com o ID informado. ID: " + request.getIdCadastrador())));



        ProdutoEntity novoProduto = new ProdutoEntity();

        try {

            novoProduto.setNomeLaboratorio(request.getNomeLaboratorio());
            novoProduto.setNomeProduto(request.getNomeProduto());
            novoProduto.setImagemProduto(request.getImagemProduto());
            novoProduto.setDosagem(request.getDosagem());
            novoProduto.setDescricaoProduto(request.getDescricaoProduto());
            novoProduto.setPrecoUnitario(request.getPrecoUnitario());
            novoProduto.setTipoProduto(request.getTipoProduto());
            novoProduto.setQuantidadeEstoque(request.getQuantidadeEstoque());
            novoProduto.setDataCadastro(request.getDataCadastro());
            novoProduto.setIdCadastrador(request.getIdCadastrador());
            novoProduto.setCadastradoPor(usuario.get().getNomeCompleto());



            repository.save(novoProduto);
            return new ProdutoResponse(novoProduto);

        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException(e);
        }
    }


    public List<ProdutoResponse> buscarTodosOsProdutos() throws EmptyListException {
        List<ProdutoEntity> produtosEntity;

        try {
            produtosEntity = repository.findAll();
            if (produtosEntity.isEmpty()) {
                throw new EmptyListException("Não foi possível encontrar nenhum produto cadastrado.");
            }

            List<ProdutoResponse> produtosResponse = new ArrayList<>();
            for (ProdutoEntity produtoEntity : produtosEntity) {
                ProdutoResponse produtoResponse = new ProdutoResponse(produtoEntity);
                produtosResponse.add(produtoResponse);
            }

            return produtosResponse;
        }catch (EmptyListException ex){
            throw new EmptyListException("Não foi possível encontrar nenhum produto cadastrado.");
        }

    }

    public ProdutoResponse buscarProdutoPorId(Long id) throws ProdutoNotFoundException {
        Optional<ProdutoEntity> produtoEntity = repository.findById(id);
        if (produtoEntity.isPresent()) {
            return new ProdutoResponse(produtoEntity.get());
        } else {
            throw new ProdutoNotFoundException("Produto não encontrado com ID: " + id);
        }
    }

    public void deletarProdutoPorId(Long id) throws ProdutoNotFoundException {
        if (!repository.existsById(id)) {
            throw new ProdutoNotFoundException("Não foi possível encontrar um produto com o ID informado. ID:"+id);
        }
        vendaRepository.deleteByProdutoID(id);
        repository.deleteById(id);
    }

    public ProdutoResponse atualizarProduto(Long id, ProdutoRequest request) throws ProdutoNotFoundException {

        Optional<ProdutoEntity> produtoOptional = repository.findById(id);
        if (!produtoOptional.isPresent()) {
            throw new ProdutoNotFoundException("Produto não encontrado");
        }

        ProdutoEntity produto = produtoOptional.get();

        Optional<UsuarioEntity> usuario = Optional.ofNullable(usuarioRepository.findById(request.getIdCadastrador()).orElseThrow(() -> new CadastradorNotFoundException("Não foi possível encontrar um usuário cadastrador com o ID informado. ID: " + request.getIdCadastrador())));


        produto.setNomeLaboratorio(request.getNomeLaboratorio());
        produto.setNomeProduto(request.getNomeProduto());
        produto.setImagemProduto(request.getImagemProduto());
        produto.setDosagem(request.getDosagem());
        produto.setDescricaoProduto(request.getDescricaoProduto());
        produto.setPrecoUnitario(request.getPrecoUnitario());
        produto.setTipoProduto(request.getTipoProduto());
        produto.setQuantidadeEstoque(request.getQuantidadeEstoque());
        produto.setDataCadastro(request.getDataCadastro());
        produto.setIdCadastrador(request.getIdCadastrador());
        produto.setCadastradoPor(usuario.get().getNomeCompleto());

        ProdutoEntity produtoAtualizado = repository.save(produto);

        return new ProdutoResponse(produtoAtualizado);
    }
}


