package com.clamed.lab_pharmacy.repository;

import com.clamed.lab_pharmacy.model.entity.VendaEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface VendaRepository extends JpaRepository<VendaEntity,Long> {


    @Transactional
    @Modifying
    @Query("delete from VendaEntity v where v.produtoVendido.id = :produtoID")
    void deleteByProdutoID(@Param("produtoID") Long produtoID);

}
