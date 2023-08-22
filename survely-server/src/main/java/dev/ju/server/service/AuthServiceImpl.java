package dev.ju.server.service;

import dev.ju.server.dto.AuthRequest;
import dev.ju.server.dto.AuthResponse;
import dev.ju.server.dto.UserRequest;
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
    public AuthResponse register(UserRequest userRequest) {
        UserModel userModel = userService.createUser(userRequest);

        String token = jwtAuthService.generateToken(userModel);

        return AuthResponse.builder()
                .token(token)
                .build();
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

        return AuthResponse.builder()
                .token(token)
                .build();
    }
}
