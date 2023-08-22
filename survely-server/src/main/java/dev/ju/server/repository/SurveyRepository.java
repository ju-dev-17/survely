package dev.ju.server.repository;

import dev.ju.server.model.SurveyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface SurveyRepository extends JpaRepository<SurveyModel, UUID> {
    @Query("SELECT s FROM survey s WHERE s.user.uuid = :ownerId")
    Optional<SurveyModel> findByOwnerId(UUID ownerId);
}
