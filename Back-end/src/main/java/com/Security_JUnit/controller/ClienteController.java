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

import com.Security_JUnit.models.Cliente;
import com.Security_JUnit.models.Corso;
import com.Security_JUnit.payload.ClienteDto;
import com.Security_JUnit.service.ClientiService;
import com.Security_JUnit.service.CorsiService;

@RestController
@RequestMapping("/api/cliente")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 6000000, allowCredentials = "true")
public class ClienteController {


	@Autowired
	ClientiService clientiService;
	@Autowired
	CorsiService corsoservice;

	@GetMapping("/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<Cliente> trovaClienteTramiteId(@PathVariable Long id) {
		return new ResponseEntity<Cliente>(clientiService.findById(id), HttpStatus.OK);
	}

	@GetMapping("/username/{username}")
	// @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<Cliente> findByUsername(@PathVariable String username) {
		return new ResponseEntity<Cliente>(clientiService.findUserByUsername(username), HttpStatus.OK);
	}

	@GetMapping("/all")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<List<Cliente>> trovaClientiAll() {
		return new ResponseEntity<List<Cliente>>(clientiService.findAllClienti(), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> eliminaCliente(@PathVariable Long id) {
		return new ResponseEntity<String>(clientiService.eliminaCliente(id), HttpStatus.OK);
	}

	@PutMapping()
	@PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
	public ResponseEntity<?> updateCliente(@RequestBody Cliente c) {
		return new ResponseEntity<Cliente>(clientiService.modificaCliente(c), HttpStatus.OK);
	}

	@PostMapping("/add")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Cliente> creaCliente(@RequestBody ClienteDto c) {
		return new ResponseEntity<Cliente>(clientiService.creaCliente(c), HttpStatus.OK);
	}

	@PostMapping("/addCorso/{idCliente}/{idCorso}")
	@PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
	public ResponseEntity<Cliente> addCorsoToCliente(@PathVariable Long idCliente, @PathVariable Long idCorso) {
		Cliente cliente = clientiService.findById(idCliente);
		Corso corso = corsoservice.findById(idCorso);
		cliente.getCorso().add(corso); // aggiungi il corso al cliente
		clientiService.saveOrUpdate(cliente); // salva il cliente nel database
		return new ResponseEntity<Cliente>(cliente, HttpStatus.CREATED);
	}


}