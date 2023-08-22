package dev.ju.server.controller;

import dev.ju.server.dto.UserRequest;
import dev.ju.server.dto.SurveyResponse;
import dev.ju.server.dto.UserResponse;
import dev.ju.server.model.UserModel;
import dev.ju.server.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @GetMapping("{uuid}")
    public ResponseEntity<?> getUser(@PathVariable UUID uuid) {
        UserModel userModel = service.getUser(uuid);

        if (userModel == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        return ResponseEntity.ok(
                UserResponse.builder()
                        .uuid(userModel.getUuid())
                        .email(userModel.getEmail())
                        .firstname(userModel.getFirstname())
                        .lastname(userModel.getLastname())
                        .surveys(userModel.getSurveys()
                                .stream()
                                .map(surveyModel -> SurveyResponse.builder()
                                        .uuid(surveyModel.getUuid())
                                        .jsonData(surveyModel.getJsonData())
                                        .ownerId(surveyModel.getUser().getUuid())
                                        .build()
                                )
                                .collect(Collectors.toList())
                        )
                        .build()
        );
    }

    @GetMapping
    public List<UserResponse> getAllUser() {
        return service.getAllUser()
                .stream()
                .map(userModel -> UserResponse.builder()
                        .uuid(userModel.getUuid())
                        .email(userModel.getEmail())
                        .firstname(userModel.getFirstname())
                        .lastname(userModel.getLastname())
                        .surveys(userModel.getSurveys()
                                .stream()
                                .map(surveyModel -> SurveyResponse.builder()
                                        .uuid(surveyModel.getUuid())
                                        .jsonData(surveyModel.getJsonData())
                                        .ownerId(surveyModel.getUser().getUuid())
                                        .build()
                                )
                                .collect(Collectors.toList())
                        )
                        .build()
                )
                .collect(Collectors.toList());
    }

    @PutMapping("{uuid}")
    public ResponseEntity<String> updateUser(@PathVariable UUID uuid, @RequestBody UserRequest request) {
        boolean isUpdated = service.updateUser(uuid, request);

        if (!isUpdated) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exists");
        }

        return ResponseEntity.ok("User successfully updated");
    }

    @DeleteMapping("{uuid}")
    public ResponseEntity<String> deleteUser(@PathVariable UUID uuid) {
        boolean isDeleted = service.deleteUser(uuid);

        if (!isDeleted) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exists");
        }

        return ResponseEntity.ok("User successfully deleted");
    }
}