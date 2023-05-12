package com.Security_JUnit.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.Security_JUnit.auth.exception.MyAPIException;
import com.Security_JUnit.auth.service.AuthServiceImpl;
import com.Security_JUnit.models.Insegnante;
import com.Security_JUnit.payload.InsegnanteDto;
import com.Security_JUnit.repository.InsegnanteRepo;

@Service
public class InsegnanteService {

	@Autowired
	AuthServiceImpl authService;
	@Autowired
	InsegnanteRepo insegnanterepo;

	public Insegnante creaInsegnante(String nome, String cognome) {
		Insegnante i = new Insegnante();
		i.setNome(nome);
		i.setCognome(cognome);
		insegnanterepo.save(i);
		System.out.println("Insegnante creato");
		return i;
	}

	public Insegnante modificaInsegnante(Insegnante i) {
		if (insegnanterepo.existsById(i.getId_insegnante())) {
			insegnanterepo.save(i);
			return i;
		} else {
			throw new MyAPIException(HttpStatus.NOT_FOUND, "Insegnante non trovato");
		}
	}

	public String eliminaInsegnante(Long id) {
		if (insegnanterepo.existsById(id)) {
			insegnanterepo.deleteById(id);
			return "Insegnante eliminato";
		} else {
			throw new MyAPIException(HttpStatus.NOT_FOUND, "Insegnante non trovato");
		}
	}

	public Insegnante findById(Long id) {
		return insegnanterepo.findById(id).get();
	}

	public List<Insegnante> findAllInsegnante() {
		return insegnanterepo.findAll();
	}

	public Page<Insegnante> findAllInsegnante(Pageable pag) {
		return insegnanterepo.findAll(pag);

	}

	public Insegnante creaInsegnante(InsegnanteDto i) {
		Insegnante insegnante = new Insegnante();
		i.setNome(i.getNome());
		i.setCognome(i.getCognome());
		insegnanterepo.save(insegnante);
		System.out.println("Insegnante creato");
		return insegnante;
	}
}
