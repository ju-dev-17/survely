package dev.ju.server.service;

import dev.ju.server.dto.AuthRequest;
import dev.ju.server.dto.AuthResponse;
import dev.ju.server.dto.UserRequest;

public interface AuthService {
    AuthResponse register(UserRequest userRequest);
    AuthResponse login(AuthRequest authRequest);
}
