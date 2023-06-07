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

import com.Security_JUnit.models.Insegnante;
import com.Security_JUnit.payload.InsegnanteDto;
import com.Security_JUnit.service.InsegnanteService;

@RestController
@RequestMapping("/api/insegnante")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 600000000, allowCredentials = "true")
public class InsegnanteController {

	@Autowired
	InsegnanteService insegnantes;

	@GetMapping("/all")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<List<Insegnante>> trovaInsegnanteAll() {
		return new ResponseEntity<List<Insegnante>>(insegnantes.findAllInsegnante(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<Insegnante> trovaInsegnanteTramiteId(@PathVariable Long id) {
		return new ResponseEntity<Insegnante>(insegnantes.findById(id), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> eliminaInsegnante(@PathVariable Long id) {
		return new ResponseEntity<String>(insegnantes.eliminaInsegnante(id), HttpStatus.OK);
	}

	@PutMapping()
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> updateInsegnante(@RequestBody Insegnante c) {
		return new ResponseEntity<Insegnante>(insegnantes.modificaInsegnante(c), HttpStatus.OK);
	}

	@PostMapping("/add")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Insegnante> creaInsegnante(@RequestBody InsegnanteDto i) {
		return new ResponseEntity<Insegnante>(insegnantes.creaInsegnante(i), HttpStatus.OK);
	}
}
