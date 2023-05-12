package com.Security_JUnit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Security_JUnit.enums.Abbonamento_enum;
import com.Security_JUnit.models.Abbonamento;
import com.Security_JUnit.service.AbbonamentoService;

@RestController
@RequestMapping("/abbonamento")
public class AbbonamentoController {

	@Autowired
	AbbonamentoService abbService;

	@PostMapping("/add")
	public ResponseEntity<String> addSubscription(@PathVariable("id_cliente") Long customerId,
			@RequestParam("abbonamento") Abbonamento_enum tipo_abb) {

		// Controllo se il tipo di abbonamento inserito è valido
//		Abbonamento_enum abbonamento = null;
//		try {
//			abbonamento = Abbonamento_enum.valueOf(tipo_abb.toUpperCase());
//		} catch (IllegalArgumentException e) {
//			return ResponseEntity.badRequest().body("Invalid subscription type!");
//		}
//		return ResponseEntity.ok("Subscription added successfully!");

		return null;
	}

	@GetMapping("/all")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<List<Abbonamento>> AbbonametiAll() {
		return new ResponseEntity<List<Abbonamento>>(abbService.findAllAbbonamenti(), HttpStatus.OK);
	}
}