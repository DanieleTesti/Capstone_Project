package com.Security_JUnit.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Security_JUnit.auth.service.AuthServiceImpl;
import com.Security_JUnit.enums.Abbonamento_enum;
import com.Security_JUnit.models.Abbonamento;
import com.Security_JUnit.models.Cliente;
import com.Security_JUnit.repository.AbbonamentoRepo;
import com.Security_JUnit.repository.ClienteRepo;

@Service
public class AbbonamentoService {

	@Autowired
	AuthServiceImpl authService;
	@Autowired
	AbbonamentoRepo abbrepo;
	@Autowired
	ClienteRepo clienterepo;
	@Autowired
	ClientiService clientiservice;

	public void addSubscription(Abbonamento_enum tipo_abbonamento, Long clienteId) {
		Cliente cliente = clienterepo.findById(clienteId)
				.orElseThrow(() -> new RuntimeException("Cliente non trovato con ID: " + clienteId));

		Abbonamento a = new Abbonamento();
		a.setTipo_abbonamento(tipo_abbonamento);
		a.setCliente(cliente);

		if (tipo_abbonamento == Abbonamento_enum.SETTIMANALE) {
			a.setInizio_abbonamento(LocalDate.now());
			a.setFine_abbonamento(LocalDate.now().plusWeeks(1));
		} else if (tipo_abbonamento == Abbonamento_enum.MENSILE) {
			a.setInizio_abbonamento(LocalDate.now());
			a.setFine_abbonamento(LocalDate.now().plusMonths(1));
		} else if (tipo_abbonamento == Abbonamento_enum.ANNUALE) {
			a.setInizio_abbonamento(LocalDate.now());
			a.setFine_abbonamento(LocalDate.now().plusYears(1));
		} else {
			throw new RuntimeException("Abbonamento errato");
		}

		System.out.println("Abbonamento creato correttamente");
		abbrepo.save(a);
	}


	public List<Abbonamento> findAllAbbonamenti() {
		return abbrepo.findAll();
	}

	public Optional<Abbonamento> findById(Long id) {
		return abbrepo.findById(id);
	}

	public Optional<Abbonamento> findByClienteId(Long clienteId) {
		return abbrepo.findByCliente(clienterepo.getById(clienteId));
	}


}
