package com.Security_JUnit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.Security_JUnit.models.Corso;

public interface CorsoRepo extends JpaRepository<Corso, Long>, PagingAndSortingRepository<Corso, Long> {

}
