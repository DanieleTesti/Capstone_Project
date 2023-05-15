package com.Security_JUnit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.Security_JUnit.auth.exception.MyAPIException;
import com.Security_JUnit.auth.service.AuthServiceImpl;
import com.Security_JUnit.models.Cliente;
import com.Security_JUnit.models.Corso;
import com.Security_JUnit.payload.ClienteDto;
import com.Security_JUnit.repository.ClienteRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ClientiService {

	@Autowired
	AuthServiceImpl authService;
	@Autowired
	ClienteRepo clienterepo;

	public Cliente creaCliente(String nome, String username, String email, String password) {
		Cliente c = new Cliente();
		c.setName(nome);
		c.setUsername(username);
		c.setEmail(email);
		c.setPassword(password);
		clienterepo.save(c);
		System.out.println("Cliente salvato");
		return c;
	}

	public Cliente modificaCliente(Cliente c) {
		if (clienterepo.existsById(c.getId_cliente())) {
			clienterepo.save(c);
			return c;
		} else {
			throw new MyAPIException(HttpStatus.NOT_FOUND, "Cliente non torvato");
		}
	}

	public String eliminaCliente(Long id) {
		if (clienterepo.existsById(id)) {
			clienterepo.deleteById(id);
			return "Cliente eliminato";

		} else {
			throw new MyAPIException(HttpStatus.NOT_FOUND, "Cliente non torvata");
		}
	}

	public Cliente findById(Long id) {
		return clienterepo.findById(id).get();

	}

	public List<Cliente> findAllClienti() {
		return clienterepo.findAll();
	}

	public Page<Cliente> findAllClienti(Pageable pag) {
		return clienterepo.findAll(pag);

	}

	public Cliente creaCliente(ClienteDto c) {
		Cliente cliente = new Cliente();
		cliente.setName(c.getName());
		cliente.setUsername(c.getUsername());
		cliente.setEmail(c.getEmail());
		cliente.setPassword(c.getPassword());
		clienterepo.save(cliente);
		System.out.println("Cliente salvato");
		return cliente;
	}

	public Cliente addCorso(Cliente cliente, Corso corso) {
		cliente.getCorso().add(corso);
		return cliente;
	}

	public void saveOrUpdate(Cliente cliente) {
		clienterepo.save(cliente);
	}

	public Cliente findUserByUsername(String username) {
		if (!clienterepo.existsByUsername(username)) {
			throw new EntityNotFoundException("User not exist");
		} else {
			return clienterepo.findByUsername(username).get();
		}
	}
}
