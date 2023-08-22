package dev.ju.server.dto;

import dev.ju.server.model.SurveyModel;
import lombok.Builder;

import java.util.List;

@Builder
public record UserRequest(String email, String firstname, String lastname, String password, List<SurveyModel> surveys) { }