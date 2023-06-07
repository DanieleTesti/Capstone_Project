package com.Security_JUnit.payload;

import java.time.LocalDate;

import com.Security_JUnit.enums.Abbonamento_enum;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class AbbonamentoDto {

	@Enumerated(EnumType.STRING)
	private Abbonamento_enum tipo_abbonamento;
	private LocalDate inizio_abbonamento;
	private LocalDate fine_abbonamento;
	private Long clienteId;
}
