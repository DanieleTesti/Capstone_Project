package com.Security_JUnit.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.Security_JUnit.auth.exception.MyAPIException;
import com.Security_JUnit.auth.service.AuthServiceImpl;
import com.Security_JUnit.models.Corso;
import com.Security_JUnit.models.Insegnante;
import com.Security_JUnit.payload.CorsoDto;
import com.Security_JUnit.repository.CorsoRepo;

@Service
public class CorsiService {

	@Autowired
	AuthServiceImpl authService;
	@Autowired
	CorsoRepo corsorepo;

	public Corso creaCorso(String Descrizione_Corso, Insegnante insegnante) {
		Corso c = new Corso();
		c.setDescrizione_Corso(Descrizione_Corso);
		c.setInsegnante(insegnante);
		corsorepo.save(c);
		System.out.println("Corso creato");
		return c;
	}

	public Corso modificaCorso(Corso c) {
		if (corsorepo.existsById(c.getCorso())) {
			corsorepo.save(c);
			return c;
		} else {
			throw new MyAPIException(HttpStatus.NOT_FOUND, "Corso non trovato");
		}
	}

	public String eliminaCorso(Long id) {
		if (corsorepo.existsById(id)) {
			corsorepo.deleteById(id);
			return "Corso eliminato";
		} else {
			throw new MyAPIException(HttpStatus.NOT_FOUND, "Corso non trovato");
		}
	}

	public Corso findById(Long id) {
		return corsorepo.findById(id).get();
	}

	public List<Corso> findAllCorsi() {
		return corsorepo.findAll();
	}

	public Page<Corso> findAllCorsi(Pageable pag) {
		return corsorepo.findAll(pag);
	}

	public Corso creaCorso(CorsoDto c) {
		Corso corso = new Corso();
		corso.setDescrizione_Corso(c.getDescrizione_Corso());
		corso.setInsegnante(c.getInsegnante());
		corsorepo.save(corso);
		System.out.println("Corso creato");
		return corso;
	}
}
