package ra.ula.teas2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ra.ula.teas2.model.Tea;

public interface TeaRepository extends MongoRepository<Tea, String> {
    boolean existsTeaById(String id);
    Tea findTeaById(String id);
}
