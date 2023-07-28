package de.judev.backend.customer;

import com.fasterxml.jackson.annotation.JsonIgnore;

public record CustomerDTO(String email, String firstname, String lastname, @JsonIgnore String password) { }