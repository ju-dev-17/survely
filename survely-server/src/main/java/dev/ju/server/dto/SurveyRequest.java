package dev.ju.server.dto;

import jakarta.persistence.Enumerated;
import lombok.Builder;

@Builder
public record SurveyRequest(@Enumerated String jsonData) { }
