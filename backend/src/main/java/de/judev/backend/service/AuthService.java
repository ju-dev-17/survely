package de.judev.backend.service;

import de.judev.backend.dto.AuthRequest;
import de.judev.backend.dto.AuthResponse;
import de.judev.backend.dto.RegisterRequest;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {
    AuthResponse register(RegisterRequest registerRequest);
    AuthResponse login(AuthRequest authRequest);
}
