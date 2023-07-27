package de.judev.backend.customer;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity(name = "customer")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerModel {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid;
    @Column(unique = true)
    private String email;
    private String firstname;
    private String lastname;
    private String password;
}