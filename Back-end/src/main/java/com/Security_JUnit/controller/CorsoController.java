package com.Security_JUnit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Security_JUnit.models.Corso;
import com.Security_JUnit.payload.CorsoDto;
import com.Security_JUnit.service.ClientiService;
import com.Security_JUnit.service.CorsiService;

@RestController
@RequestMapping("/api/corso")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 6000000, allowCredentials = "true")
public class CorsoController {

	@Autowired
	CorsiService corsoservice;
	@Autowired
	ClientiService clienteservice;

	@GetMapping("/all")
//	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<List<Corso>> trovaCorsiAll() {
		return new ResponseEntity<List<Corso>>(corsoservice.findAllCorsi(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<Corso> trovaCorsoTramiteId(@PathVariable Long id) {
		return new ResponseEntity<Corso>(corsoservice.findById(id), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> eliminaCorso(@PathVariable Long id) {
		return new ResponseEntity<String>(corsoservice.eliminaCorso(id), HttpStatus.OK);
	}

	@PutMapping()
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> updateCorso(@RequestBody Corso c) {
		return new ResponseEntity<Corso>(corsoservice.modificaCorso(c), HttpStatus.OK);
	}

	@PostMapping("/add")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Corso> creaCorso(@RequestBody CorsoDto c) {
		return new ResponseEntity<Corso>(corsoservice.creaCorso(c), HttpStatus.OK);
	}

//	@PostMapping("/add")
//	@PreAuthorize("hasRole('ADMIN')")
//	public ResponseEntity<Corso> addClienteToCorso(@RequestBody Long c, Long id) {
//		return new ResponseEntity<Corso, Cliente>(corsoservice.findById(c), clienteservice.findById(id), HttpStatus.OK);
//	}
}
