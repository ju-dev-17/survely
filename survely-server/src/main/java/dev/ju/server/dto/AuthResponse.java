package dev.ju.server.dto;

import lombok.Builder;

@Builder
public record AuthResponse(String token) { }
