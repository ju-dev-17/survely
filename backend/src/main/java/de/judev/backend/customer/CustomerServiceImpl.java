package de.judev.backend.customer;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository repository;

    @Override
    public CustomerModel getCustomer(UUID uuid) {
        return null;
    }

    @Override
    public List<CustomerModel> getAllCustomer() {
        return null;
    }

    @Override
    public boolean createCustomer(CustomerModel customerModel) {
        return false;
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