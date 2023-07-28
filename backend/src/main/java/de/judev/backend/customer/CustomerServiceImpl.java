package de.judev.backend.customer;

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
    public boolean createCustomer(CustomerDTO customerDTO) {
        Optional<CustomerModel> customerModelOptional = repository.findByEmail(customerDTO.email());

        if (customerModelOptional.isPresent()) {
            return false;
        }

        CustomerModel customerModel = new CustomerModel(
                customerDTO.email(),
                customerDTO.firstname(),
                customerDTO.lastname(),
                passwordEncoder.encode(customerDTO.password())
        );

        repository.save(customerModel);

        return true;
    }

    @Override
    public boolean updateCustomer(UUID uuid, CustomerDTO customerDTO) {
        Optional<CustomerModel> customerModelOptional = repository.findById(uuid);

        if (customerModelOptional.isEmpty()) {
            return false;
        }

        CustomerModel customerModel = customerModelOptional.get();
        customerModel.setEmail(customerDTO.email());
        customerModel.setFirstname(customerDTO.firstname());
        customerModel.setLastname(customerDTO.lastname());
        customerModel.setPassword(passwordEncoder.encode(customerDTO.password()));

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