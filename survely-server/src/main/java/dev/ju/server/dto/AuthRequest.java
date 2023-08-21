package dev.ju.server.dto;

import lombok.Builder;

@Builder
public record AuthRequest(String email, String password) { }
