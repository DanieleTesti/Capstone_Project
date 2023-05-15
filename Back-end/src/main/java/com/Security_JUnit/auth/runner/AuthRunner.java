package com.Security_JUnit.auth.runner;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.Security_JUnit.auth.entity.ERole;
import com.Security_JUnit.auth.entity.Role;
import com.Security_JUnit.auth.repository.RoleRepository;
import com.Security_JUnit.auth.repository.UserRepository;
import com.Security_JUnit.auth.service.AuthService;
import com.Security_JUnit.service.AbbonamentoService;
import com.Security_JUnit.service.ClientiService;
import com.Security_JUnit.service.CorsiService;
import com.Security_JUnit.service.InsegnanteService;


@Component
public class AuthRunner implements ApplicationRunner {
	
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	AuthService authService;

	@Autowired
	ClientiService clientis;
	@Autowired
	AbbonamentoService abbonamentos;
	@Autowired
	CorsiService corsos;
	@Autowired
	InsegnanteService Insegnantes;

	private Set<Role> adminRole;
	private Set<Role> moderatorRole;
	private Set<Role> userRole;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Run...");
		// setRoleDefault();

		// CREAZIONE INSEGNANTE
		// Insegnantes.creaInsegnante("Flavio", "Bianchi");

		// CREAZIONE CORSO
		// corsos.creaCorso("Karate", Insegnantes.findById(3l));

		// CREAZIONE UTENTE
		// clientis.creaCliente("daniele", "daniele", "daniele@mail.com",
		// passwordEncoder.encode("daniele"));

		// CREAZIONE ABBONAMENTO
		// abbonamentos.addSubscription(Abbonamento_enum.ANNUALE,
		// clientis.findById(1l));

	}
	
	private void setRoleDefault() {
		Role admin = new Role();
		admin.setRoleName(ERole.ROLE_ADMIN);
		roleRepository.save(admin);
		
		Role user = new Role();
		user.setRoleName(ERole.ROLE_USER);
		roleRepository.save(user);
		
		Role moderator = new Role();
		moderator.setRoleName(ERole.ROLE_MODERATOR);
		roleRepository.save(moderator);
		
		adminRole = new HashSet<Role>();
		adminRole.add(admin);
		adminRole.add(moderator);
		adminRole.add(user);
		
		moderatorRole = new HashSet<Role>();
		moderatorRole.add(moderator);
		moderatorRole.add(user);
		
		userRole = new HashSet<Role>();
		userRole.add(user);
	}

}
