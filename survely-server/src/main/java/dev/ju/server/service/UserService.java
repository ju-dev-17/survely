package dev.ju.server.service;

import dev.ju.server.dto.RegisterRequest;
import dev.ju.server.model.UserModel;

import java.util.List;
import java.util.UUID;

public interface UserService {
    UserModel getUser(UUID uuid);
    List<UserModel> getAllUser();
    UserModel createUser(RegisterRequest registerRequest);
    boolean updateUser(UUID uuid, RegisterRequest registerRequest);
    boolean deleteUser(UUID uuid);
}
