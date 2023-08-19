package de.judev.backend.dto;

public record RegisterRequest(String email, String firstname, String lastname, String password) { }