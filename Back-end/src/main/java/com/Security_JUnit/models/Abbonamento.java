package com.Security_JUnit.models;

import java.time.LocalDate;

import com.Security_JUnit.enums.Abbonamento_enum;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
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
public class Abbonamento {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_abbonamento;
	@Enumerated(EnumType.STRING)
	private Abbonamento_enum tipo_abbonamento;
	private LocalDate inizio_abbonamento;
	private LocalDate fine_abbonamento;

	@JsonIgnore
	@OneToOne(fetch = FetchType.EAGER)
	private Cliente cliente;

}
