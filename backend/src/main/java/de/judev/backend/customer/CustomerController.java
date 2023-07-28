package de.judev.backend.customer;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/customer")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService service;

    @GetMapping("{uuid}")
    public ResponseEntity<?> getCustomer(@PathVariable UUID uuid) {
        CustomerModel customerModel = service.getCustomer(uuid);

        if (customerModel == null) {
            return new ResponseEntity<>(
                    "Customer not found.",
                    HttpStatus.NOT_FOUND
            );
        }

        CustomerDTO customerDTO = new CustomerDTO(
                customerModel.getEmail(),
                customerModel.getFirstname(),
                customerModel.getLastname(),
                customerModel.getPassword()
        );

        return new ResponseEntity<>(
                customerDTO,
                HttpStatus.OK
        );
    }

    @GetMapping
    public List<CustomerDTO> getAllCustomer() {
        List<CustomerModel> customerModels = service.getAllCustomer();

        return customerModels
                .stream()
                .map(customerModel -> new CustomerDTO(
                        customerModel.getEmail(),
                        customerModel.getFirstname(),
                        customerModel.getLastname(),
                        customerModel.getPassword()
                ))
                .collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<String> createCustomer(@RequestBody CustomerDTO customerDTO) {
        boolean isCreated = service.createCustomer(customerDTO);

        if (!isCreated) {
            return new ResponseEntity<>(
                    "Customer already exists.",
                    HttpStatus.CONFLICT
            );
        }

        return new ResponseEntity<>(
                "Customer successfully created.",
                HttpStatus.OK
        );
    }

    @PutMapping("{uuid}")
    public ResponseEntity<String> updateCustomer(@PathVariable UUID uuid, @RequestBody CustomerDTO customerDTO) {
        boolean isUpdated = service.updateCustomer(uuid, customerDTO);

        if (!isUpdated) {
            return new ResponseEntity<>(
                    "Customer does not exists.",
                    HttpStatus.NOT_FOUND
            );
        }

        return new ResponseEntity<>(
                "Customer successfully updated.",
                HttpStatus.OK
        );
    }

    @DeleteMapping("{uuid}")
    public ResponseEntity<String> deleteCustomer(@PathVariable UUID uuid) {
        boolean isDeleted = service.deleteCustomer(uuid);

        if (!isDeleted) {
            return new ResponseEntity<>(
                    "Customer does not exists.",
                    HttpStatus.NOT_FOUND
            );
        }

        return new ResponseEntity<>(
                "Customer successfully deleted.",
                HttpStatus.OK
        );
    }
}