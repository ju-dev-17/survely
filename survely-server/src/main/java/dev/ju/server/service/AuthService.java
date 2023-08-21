package dev.ju.server.service;

import dev.ju.server.dto.AuthRequest;
import dev.ju.server.dto.AuthResponse;
import dev.ju.server.dto.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest registerRequest);
    AuthResponse login(AuthRequest authRequest);
}
