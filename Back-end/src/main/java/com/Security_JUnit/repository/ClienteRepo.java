package com.Security_JUnit.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.Security_JUnit.models.Cliente;

public interface ClienteRepo extends JpaRepository<Cliente, Long>, PagingAndSortingRepository<Cliente, Long> {
	Optional<Cliente> findByEmail(String email);

	Optional<Cliente> findByUsernameOrEmail(String username, String email);

	Optional<Cliente> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}