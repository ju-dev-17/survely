package dev.ju.server.service;

import dev.ju.server.dto.SurveyRequest;
import dev.ju.server.dto.UserRequest;
import dev.ju.server.model.SurveyModel;
import dev.ju.server.model.UserModel;
import dev.ju.server.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SurveyServiceImpl implements SurveyService {
    private final SurveyRepository repository;
    private final UserService userService;

    @Override
    public SurveyModel getSurvey(UUID ownerId) {
        return repository.findByOwnerId(ownerId).orElse(null);
    }

    @Override
    public boolean addSurveyToUser(UUID ownerId, SurveyRequest surveyRequest) {
        UserModel userModel = userService.getUser(ownerId);

        if (userModel == null) {
            return false;
        }

        SurveyModel surveyModel = new SurveyModel();
        surveyModel.setJsonData(surveyRequest.jsonData());
        surveyModel.setUser(userModel);

        repository.save(surveyModel);

        userModel.getSurveys().add(surveyModel);

        return userService.updateUser(
                userModel.getUuid(),
                UserRequest.builder()
                        .firstname(userModel.getFirstname())
                        .lastname(userModel.getLastname())
                        .email(userModel.getEmail())
                        .password(userModel.getPassword())
                        .surveys(userModel.getSurveys())
                        .build()
        );
    }

    @Override
    public boolean updateSurveyFromUser(UUID ownerId, SurveyRequest request) {
        UserModel userModel = userService.getUser(ownerId);
        Optional<SurveyModel> surveyModelOptional = repository.findByOwnerId(ownerId);

        if (userModel == null || surveyModelOptional.isEmpty()) {
            return false;
        }

        SurveyModel surveyModel = surveyModelOptional.get();
        surveyModel.setJsonData(request.jsonData());

        repository.save(surveyModel);

        return true;
    }

    @Override
    public boolean deleteSurveyFromUser(UUID ownerId) {
        UserModel userModel = userService.getUser(ownerId);
        Optional<SurveyModel> surveyModelOptional = repository.findByOwnerId(ownerId);

        if (userModel == null || surveyModelOptional.isEmpty()) {
            return false;
        }

        SurveyModel surveyModel = surveyModelOptional.get();

        repository.delete(surveyModel);

        return true;
    }
}
