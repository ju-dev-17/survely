package de.judev.backend.customer;

import java.util.UUID;

public record CustomerDTO(UUID id, String email, String firstname, String lastname) { }