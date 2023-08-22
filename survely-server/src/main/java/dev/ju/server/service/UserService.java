package dev.ju.server.service;

import dev.ju.server.dto.UserRequest;
import dev.ju.server.model.UserModel;

import java.util.List;
import java.util.UUID;

public interface UserService {
    UserModel getUser(UUID uuid);
    List<UserModel> getAllUser();
    UserModel createUser(UserRequest userRequest);
    boolean updateUser(UUID uuid, UserRequest userRequest);
    boolean deleteUser(UUID uuid);
}
