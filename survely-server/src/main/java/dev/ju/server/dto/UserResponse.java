package dev.ju.server.dto;

import lombok.Builder;

import java.util.List;
import java.util.UUID;

@Builder
public record UserResponse(UUID uuid, String email, String firstname, String lastname, List<SurveyResponse> surveys) { }
