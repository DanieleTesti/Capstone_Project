package com.Security_JUnit.payload;

import com.Security_JUnit.models.Cliente;
import com.Security_JUnit.models.Insegnante;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class CorsoDto {

	private String Descrizione_Corso;
	@OneToOne
	private Insegnante insegnante;
	@ManyToOne
	@JoinColumn(name = "id_cliente")
	private Cliente cliente;
}
