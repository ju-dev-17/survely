package dev.ju.server.dto;

import jakarta.persistence.Enumerated;
import lombok.Builder;

import java.util.UUID;

@Builder
public record SurveyResponse(UUID uuid, @Enumerated String jsonData, UUID ownerId) { }
