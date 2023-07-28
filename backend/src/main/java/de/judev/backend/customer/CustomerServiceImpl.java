package de.judev.backend.customer;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository repository;

    @Override
    public CustomerModel getCustomer(UUID uuid) {
        return repository.findById(uuid).orElse(null);
    }

    @Override
    public List<CustomerModel> getAllCustomer() {
        return repository.findAll();
    }

    @Override
    public boolean createCustomer(CustomerModel customerModel) {
        Optional<CustomerModel> customerModelOptional = repository.findByEmail(customerModel.getEmail());

        if (customerModelOptional.isPresent()) {
            return false;
        }

        repository.save(customerModel);

        return true;
    }

    @Override
    public boolean updateCustomer(UUID uuid, CustomerDTO customerDTO) {
        return false;
    }

    @Override
    public boolean deleteCustomer(UUID uuid) {
        return false;
    }
}