package com.Security_JUnit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.Security_JUnit.models.Abbonamento;

public interface AbbonamentoRepo
		extends JpaRepository<Abbonamento, Long>, PagingAndSortingRepository<Abbonamento, Long> {

}
