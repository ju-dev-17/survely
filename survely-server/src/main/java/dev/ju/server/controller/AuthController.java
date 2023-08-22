package dev.ju.server.controller;

import dev.ju.server.dto.AuthRequest;
import dev.ju.server.dto.AuthResponse;
import dev.ju.server.dto.UserRequest;
import dev.ju.server.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserRequest request) {
        AuthResponse authResponse = service.register(request);

        if (authResponse == null) {
            return ResponseEntity.badRequest().body("Register failed");
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(authResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        AuthResponse authResponse = service.login(request);

        if (authResponse == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }

        return ResponseEntity.ok(authResponse);
    }
}
