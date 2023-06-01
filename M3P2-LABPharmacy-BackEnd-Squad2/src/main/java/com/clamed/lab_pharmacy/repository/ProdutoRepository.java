package com.clamed.lab_pharmacy.repository;

import com.clamed.lab_pharmacy.model.entity.ProdutoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoEntity,Long> {

    ProdutoEntity findProdutoEntityById(Long id);
}
