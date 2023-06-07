package com.Security_JUnit.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Security_JUnit.enums.Abbonamento_enum;
import com.Security_JUnit.models.Abbonamento;
import com.Security_JUnit.payload.AbbonamentoDto;
import com.Security_JUnit.service.AbbonamentoService;

@RestController
@RequestMapping("/api/abbonamento")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 6000000, allowCredentials = "true")
public class AbbonamentoController {

	@Autowired
	AbbonamentoService abbService;

	@PostMapping("/add")
	public ResponseEntity<String> addSubscription(@RequestBody AbbonamentoDto abbonamentoDto) {
		Abbonamento_enum tipoAbbonamento = abbonamentoDto.getTipo_abbonamento();
		LocalDate inizioAbbonamento = abbonamentoDto.getInizio_abbonamento();

		LocalDate fineAbbonamento;

		Long clienteId = abbonamentoDto.getClienteId();

		// Aggiungi l'abbonamento al cliente utilizzando il servizio appropriato
		abbService.addSubscription(tipoAbbonamento, clienteId);

		// Restituisci una risposta appropriata
		return ResponseEntity
				.ok("Abbonamento aggiunto con successo al cliente.");
	}

	@GetMapping("/{id}")
	public ResponseEntity<Abbonamento> findById(@PathVariable("id") Long id) {
		Optional<Abbonamento> abbonamentoOptional = abbService.findById(id);
		if (abbonamentoOptional.isPresent()) {
			Abbonamento abbonamento = abbonamentoOptional.get();
			return ResponseEntity.ok(abbonamento);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/cliente/{idCliente}")
	public ResponseEntity<?> getAbbonamentoByClienteId(@PathVariable("idCliente") Long idCliente) {
		Optional<Abbonamento> abbonamento = abbService.findByClienteId(idCliente);
	    if (abbonamento.isPresent()) {
	        return ResponseEntity.ok(abbonamento.get());
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}



	@GetMapping("/all")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<List<Abbonamento>> AbbonametiAll() {
		return new ResponseEntity<List<Abbonamento>>(abbService.findAllAbbonamenti(), HttpStatus.OK);
	}
}