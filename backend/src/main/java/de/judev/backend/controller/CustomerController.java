package de.judev.backend.controller;

import de.judev.backend.dto.RegisterRequest;
import de.judev.backend.model.CustomerModel;
import de.judev.backend.dto.CustomerResponse;
import de.judev.backend.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService service;

    @GetMapping("{uuid}")
    public ResponseEntity<?> getCustomer(@PathVariable UUID uuid) {
        CustomerModel customerModel = service.getCustomer(uuid);

        if (customerModel == null) {
            return ResponseEntity.badRequest().body("Customer not found");
        }

        CustomerResponse customerReadDTO = new CustomerResponse(
                customerModel.getUuid(),
                customerModel.getEmail(),
                customerModel.getFirstname(),
                customerModel.getLastname()
        );

        return ResponseEntity.ok(customerReadDTO);
    }

    @GetMapping
    public List<CustomerResponse> getAllCustomer() {
        return service.getAllCustomer()
                .stream()
                .map(customerModel -> new CustomerResponse(
                        customerModel.getUuid(),
                        customerModel.getEmail(),
                        customerModel.getFirstname(),
                        customerModel.getLastname()
                ))
                .collect(Collectors.toList());
    }

    @PutMapping("{uuid}")
    public ResponseEntity<String> updateCustomer(@PathVariable UUID uuid, @RequestBody RegisterRequest registerRequest) {
        boolean isUpdated = service.updateCustomer(uuid, registerRequest);

        if (!isUpdated) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Customer does not exists");
        }

        return ResponseEntity.ok("Customer successfully updated");
    }

    @DeleteMapping("{uuid}")
    public ResponseEntity<String> deleteCustomer(@PathVariable UUID uuid) {
        boolean isDeleted = service.deleteCustomer(uuid);

        if (!isDeleted) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Customer does not exists");
        }

        return ResponseEntity.ok("Customer successfully deleted");
    }
}