package com.example.teas.repository;

import com.example.teas.model.Tea;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeaRepository extends MongoRepository<Tea, String> {
    boolean existsTeaById(String id);
    Tea findTeaById(String id);
}
