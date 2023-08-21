package dev.ju.server.service;

import dev.ju.server.dto.AuthRequest;
import dev.ju.server.dto.AuthResponse;
import dev.ju.server.dto.RegisterRequest;
import dev.ju.server.model.UserModel;
import dev.ju.server.repository.UserRepository;
import dev.ju.server.security.JwtAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final JwtAuthService jwtAuthService;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    @Override
    public AuthResponse register(RegisterRequest registerRequest) {
        UserModel userModel = userService.createUser(registerRequest);

        String token = jwtAuthService.generateToken(userModel);

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

        Optional<UserModel> customerModelOptional = userRepository.findByEmail(authRequest.email());

        if (customerModelOptional.isEmpty()) {
            return null;
        }

        String token = jwtAuthService.generateToken(customerModelOptional.get());

        return new AuthResponse(token);
    }
}
