package dev.ju.server.service;

import dev.ju.server.dto.RegisterRequest;
import dev.ju.server.enums.Role;
import dev.ju.server.model.UserModel;
import dev.ju.server.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserModel getUser(UUID uuid) {
        return repository.findById(uuid).orElse(null);
    }

    @Override
    public List<UserModel> getAllUser() {
        return repository.findAll();
    }

    @Override
    public UserModel createUser(RegisterRequest registerRequest) {
        Optional<UserModel> userModelOptional = repository.findByEmail(registerRequest.email());

        if (userModelOptional.isPresent()) {
            return null;
        }

        UserModel userModel = new UserModel();
        userModel.setEmail(registerRequest.email());
        userModel.setFirstname(registerRequest.firstname());
        userModel.setLastname(registerRequest.lastname());
        userModel.setPassword(passwordEncoder.encode(registerRequest.password()));
        userModel.setRole(Role.CUSTOMER);

        repository.save(userModel);

        return userModel;
    }


    @Override
    public boolean updateUser(UUID uuid, RegisterRequest registerRequest) {
        Optional<UserModel> userModelOptional = repository.findById(uuid);

        if (userModelOptional.isEmpty()) {
            return false;
        }

        UserModel userModel = userModelOptional.get();
        userModel.setEmail(registerRequest.email());
        userModel.setFirstname(registerRequest.firstname());
        userModel.setLastname(registerRequest.lastname());
        userModel.setPassword(passwordEncoder.encode(registerRequest.password()));

        return true;
    }

    @Override
    public boolean deleteUser(UUID uuid) {
        Optional<UserModel> userModelOptional = repository.findById(uuid);

        if (userModelOptional.isEmpty()) {
            return false;
        }

        repository.delete(userModelOptional.get());

        return true;
    }
}
