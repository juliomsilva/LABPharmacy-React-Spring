package com.clamed.lab_pharmacy.service;

import com.clamed.lab_pharmacy.exception.EmailExistsException;
import com.clamed.lab_pharmacy.exception.ProdutoNotFoundException;
import com.clamed.lab_pharmacy.exception.UsuarioNotFoundException;

import com.clamed.lab_pharmacy.model.dto.UsuarioRequest;

import com.clamed.lab_pharmacy.model.dto.UsuarioResponse;
import com.clamed.lab_pharmacy.model.entity.EnderecoEntity;
import com.clamed.lab_pharmacy.model.entity.TipoUsuario;
import com.clamed.lab_pharmacy.model.entity.UsuarioEntity;
import com.clamed.lab_pharmacy.repository.EnderecoRepository;
import com.clamed.lab_pharmacy.repository.TipoRepository;
import com.clamed.lab_pharmacy.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private TipoRepository tipoRepository;


    public UsuarioResponse buscaUsuarioPorEmailESenha(String email, String senha) {
        UsuarioEntity usuario = repository.findUsuarioEntityByEmailAndSenha(email, senha);

        if (usuario == null) {
            throw new UsuarioNotFoundException("Usuário não encontrado com o email e senha informados");
        }


        return new UsuarioResponse(usuario);

    }

    public UsuarioResponse salvarNovoUsuario(UsuarioRequest request) {



        UsuarioEntity usuarioEntity = new UsuarioEntity();
        EnderecoEntity enderecoEntity = new EnderecoEntity();
        TipoUsuario tipoUsuario = new TipoUsuario();


        try {
            String senhaBase64;
            senhaBase64 = Base64.getEncoder().encodeToString(request.getSenha().getBytes());


            usuarioEntity.setCpf(request.getCpf());
            usuarioEntity.setDataNascimento(request.getDataNascimento());
            usuarioEntity.setNomeCompleto(request.getNomeCompleto());
            usuarioEntity.setNumeroTelefone(request.getNumeroTelefone());
            usuarioEntity.setEmail(request.getEmail());
            usuarioEntity.setSenha(senhaBase64);


            tipoUsuario.setTipoUsuario(request.getTipoUsuario().getTipoUsuario());
            tipoRepository.save(tipoUsuario);


            usuarioEntity.setTipoUsuario(tipoUsuario);


            enderecoEntity.setCep(request.getEndereco().getCep());
            enderecoEntity.setLogradouro(request.getEndereco().getLogradouro());
            enderecoEntity.setNumero(request.getEndereco().getNumero());
            enderecoEntity.setBairro(request.getEndereco().getBairro());
            enderecoEntity.setCidade(request.getEndereco().getCidade());
            enderecoEntity.setEstado(request.getEndereco().getEstado());
            enderecoEntity.setComplemento(request.getEndereco().getComplemento());


            usuarioEntity.setEndereco(enderecoEntity);

            enderecoRepository.save(enderecoEntity);

            Boolean verificarEmail = repository.existsByEmail(request.getEmail());

            if(verificarEmail){
                throw new EmailExistsException("Este e-mail já está cadastrado em nosso sistema");
            }
            repository.save(usuarioEntity);

            return new UsuarioResponse(usuarioEntity);
        } catch (Exception ex) {
            throw new RuntimeException("Erro ao salvar novo usuário", ex);
        }
    }

    public List<UsuarioResponse> buscarTodos() {
        List<UsuarioEntity> usuarioEntities = repository.findAll();
        List<UsuarioResponse> usuarioResponses = new ArrayList<>();
        for (UsuarioEntity usuario : usuarioEntities){
            usuarioResponses.add(
                    new UsuarioResponse(usuario.getId(), usuario.getNomeCompleto(), usuario.getCpf(),usuario.getDataNascimento(), usuario.getEmail(), usuario.getNumeroTelefone(),usuario.getEndereco(),usuario.getTipoUsuario())
            );
        }
        return usuarioResponses;
    }
    public void deletarUsuario(Long id) throws ProdutoNotFoundException {
        if (!repository.existsById(id)) {
            throw new ProdutoNotFoundException("Não foi possível encontrar uma usuario com o ID informado. ID:"+id);
        }
        repository.deleteById(id);
    }

}
