package com.Security_JUnit.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.Security_JUnit.models.Abbonamento;
import com.Security_JUnit.models.Cliente;

public interface AbbonamentoRepo
		extends JpaRepository<Abbonamento, Long>, PagingAndSortingRepository<Abbonamento, Long> {

	Optional<Abbonamento> findByCliente(Cliente cliente);


}
