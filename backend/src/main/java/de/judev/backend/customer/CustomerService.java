package de.judev.backend.customer;

import java.util.List;
import java.util.UUID;

public interface CustomerService {
    CustomerModel getCustomer(UUID uuid);
    List<CustomerModel> getAllCustomer();
    boolean createCustomer(CustomerDTO customerDTO);
    boolean updateCustomer(UUID uuid, CustomerDTO customerDTO);
    boolean deleteCustomer(UUID uuid);
}