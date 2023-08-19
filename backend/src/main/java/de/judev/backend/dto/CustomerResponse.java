package de.judev.backend.dto;

import java.util.UUID;

public record CustomerResponse(UUID uuid, String email, String firstname, String lastname) { }