package com.Security_JUnit.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Security_JUnit.auth.service.AuthServiceImpl;
import com.Security_JUnit.enums.Abbonamento_enum;
import com.Security_JUnit.models.Abbonamento;
import com.Security_JUnit.models.Cliente;
import com.Security_JUnit.repository.AbbonamentoRepo;

@Service
public class AbbonamentoService {

	@Autowired
	AuthServiceImpl authService;
	@Autowired
	AbbonamentoRepo abbrepo;
	@Autowired
	ClientiService clientiservice;

	public void addSubscription(Abbonamento_enum subscriptionTypeString, Cliente cliente) {
		Abbonamento a = new Abbonamento();
		a.setTipo_abbonamento(subscriptionTypeString);
		a.setCliente(cliente);
		if (subscriptionTypeString == Abbonamento_enum.SETTIMANALE) {
			a.setInizio_abbonamento(LocalDate.now());
			a.setFine_abbonamento(LocalDate.now().plusWeeks(1));
		} else if (subscriptionTypeString == Abbonamento_enum.MENSILE) {
			a.setInizio_abbonamento(LocalDate.now());
			a.setFine_abbonamento(LocalDate.now().plusMonths(1));
		} else if (subscriptionTypeString == Abbonamento_enum.ANNUALE) {
			a.setInizio_abbonamento(LocalDate.now());
			a.setFine_abbonamento(LocalDate.now().plusYears(1));
		} else
			System.out.println("Abbonamento errato");
		System.out.println("Abbonamento creato correttamente");
		abbrepo.save(a);
	}

	public List<Abbonamento> findAllAbbonamenti() {
		return abbrepo.findAll();
	}
}
