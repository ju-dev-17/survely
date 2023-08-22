package dev.ju.server.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity(name = "survey")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SurveyModel {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid;
    private String jsonData;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserModel user;
}