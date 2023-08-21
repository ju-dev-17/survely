package dev.ju.server.dto;

import lombok.Builder;

@Builder
public record RegisterRequest(String email, String firstname, String lastname, String password) { }