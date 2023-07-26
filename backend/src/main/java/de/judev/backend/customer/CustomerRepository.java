package de.judev.backend.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@SuppressWarnings("unused")
@Repository
public interface CustomerRepository extends JpaRepository<CustomerModel, UUID> { }