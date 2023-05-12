package com.Security_JUnit.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "insegnanti")
public class Insegnante {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_insegnante;
	private String nome;
	private String cognome;
}
