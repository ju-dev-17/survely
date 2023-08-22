package dev.ju.server.controller;

import dev.ju.server.dto.SurveyRequest;
import dev.ju.server.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/surveys")
@RequiredArgsConstructor
public class SurveyController {
    private final SurveyService surveyService;

    @PostMapping("/add-survey-to-user/{ownerId}")
    public ResponseEntity<?> addSurveyToUser(@PathVariable UUID ownerId, @RequestBody SurveyRequest request) {
        boolean isAdded = surveyService.addSurveyToUser(ownerId, request);

        if (!isAdded) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong");
        }

        return ResponseEntity.ok("Survey successfully added");
    }

    @PutMapping("/update-survey-from-user/{ownerId}")
    public ResponseEntity<?> updateSurveyFromUser(@PathVariable UUID ownerId, @RequestBody SurveyRequest request) {
        boolean isUpdated = surveyService.updateSurveyFromUser(ownerId, request);

        if (!isUpdated) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong");
        }

        return ResponseEntity.ok("Survey successfully updated");
    }

    @DeleteMapping("/delete-survey-from-user/{ownerId}")
    public ResponseEntity<?> deleteSurveyFromUser(@PathVariable UUID ownerId) {
        boolean isDeleted = surveyService.deleteSurveyFromUser(ownerId);

        if (!isDeleted) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong");
        }

        return ResponseEntity.ok("Survey successfully deleted");
    }
}
