package dev.ju.server.service;

import dev.ju.server.dto.SurveyRequest;
import dev.ju.server.model.SurveyModel;

import java.util.UUID;

public interface SurveyService {
    SurveyModel getSurvey(UUID ownerId);
    boolean addSurveyToUser(UUID ownerId, SurveyRequest surveyRequest);
    boolean updateSurveyFromUser(UUID ownerId, SurveyRequest request);
    boolean deleteSurveyFromUser(UUID ownerId);
}
