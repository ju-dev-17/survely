package de.judev.backend.service;

import de.judev.backend.dto.AuthRequest;
import de.judev.backend.dto.AuthResponse;
import de.judev.backend.dto.RegisterRequest;
import de.judev.backend.enums.Role;
import de.judev.backend.model.CustomerModel;
import de.judev.backend.repository.CustomerRepository;
import de.judev.backend.security.JwtAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtAuthService jwtAuthService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse register(RegisterRequest registerRequest) {
        Optional<CustomerModel> customerModelOptional = customerRepository.findByEmail(registerRequest.email());

        if (customerModelOptional.isPresent()) {
            return null;
        }

        CustomerModel customerModel = new CustomerModel();
        customerModel.setEmail(registerRequest.email());
        customerModel.setFirstname(registerRequest.firstname());
        customerModel.setLastname(registerRequest.lastname());
        customerModel.setPassword(passwordEncoder.encode(registerRequest.password()));
        customerModel.setRole(Role.CUSTOMER);

        customerRepository.save(customerModel);

        String token = jwtAuthService.generateToken(customerModel);

        return new AuthResponse(token);
    }

    @Override
    public AuthResponse login(AuthRequest authRequest) {
        authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(
                  authRequest.email(),
                  authRequest.password()
          )
        );

        Optional<CustomerModel> customerModelOptional = customerRepository.findByEmail(authRequest.email());

        if (customerModelOptional.isEmpty()) {
            return null;
        }

        String token = jwtAuthService.generateToken(customerModelOptional.get());

        return new AuthResponse(token);
    }
}
