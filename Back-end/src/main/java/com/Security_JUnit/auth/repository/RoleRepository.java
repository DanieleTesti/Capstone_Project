package com.Security_JUnit.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Security_JUnit.auth.entity.ERole;
import com.Security_JUnit.auth.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
