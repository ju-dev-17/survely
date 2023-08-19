package de.judev.backend.service;

import de.judev.backend.dto.RegisterRequest;
import de.judev.backend.model.CustomerModel;
import de.judev.backend.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public CustomerModel getCustomer(UUID uuid) {
        return repository.findById(uuid).orElse(null);
    }

    @Override
    public List<CustomerModel> getAllCustomer() {
        return repository.findAll();
    }

    @Override
    public boolean updateCustomer(UUID uuid, RegisterRequest registerRequest) {
        Optional<CustomerModel> customerModelOptional = repository.findById(uuid);

        if (customerModelOptional.isEmpty()) {
            return false;
        }

        CustomerModel customerModel = customerModelOptional.get();
        customerModel.setEmail(registerRequest.email());
        customerModel.setFirstname(registerRequest.firstname());
        customerModel.setLastname(registerRequest.lastname());
        customerModel.setPassword(passwordEncoder.encode(registerRequest.password()));

        return true;
    }

    @Override
    public boolean deleteCustomer(UUID uuid) {
        Optional<CustomerModel> customerModelOptional = repository.findById(uuid);

        if (customerModelOptional.isEmpty()) {
            return false;
        }

        repository.delete(customerModelOptional.get());

        return true;
    }
}