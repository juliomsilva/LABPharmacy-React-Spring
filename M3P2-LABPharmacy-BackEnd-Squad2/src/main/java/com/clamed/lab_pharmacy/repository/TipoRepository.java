package com.clamed.lab_pharmacy.repository;

import com.clamed.lab_pharmacy.model.entity.TipoUsuario;
import com.clamed.lab_pharmacy.model.entity.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoRepository  extends JpaRepository<TipoUsuario,Long> {

    TipoUsuario findTipoUsuarioById(TipoUsuario tipo);
}
