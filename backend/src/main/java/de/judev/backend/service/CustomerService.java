package de.judev.backend.service;

import de.judev.backend.dto.RegisterRequest;
import de.judev.backend.model.CustomerModel;

import java.util.List;
import java.util.UUID;

public interface CustomerService {
    CustomerModel getCustomer(UUID uuid);
    List<CustomerModel> getAllCustomer();
    boolean updateCustomer(UUID uuid, RegisterRequest registerRequest);
    boolean deleteCustomer(UUID uuid);
}