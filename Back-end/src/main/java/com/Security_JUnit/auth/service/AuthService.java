package com.Security_JUnit.auth.service;

import com.Security_JUnit.auth.payload.LoginDto;
import com.Security_JUnit.auth.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
