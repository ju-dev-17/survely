package de.judev.backend.customer;

import java.util.UUID;

public record CustomerDTO(UUID uuid, String email, String firstname, String lastname) { }