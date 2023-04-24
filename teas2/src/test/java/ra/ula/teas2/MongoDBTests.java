package ra.ula.teas2;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ra.ula.teas2.model.Tea;
import ra.ula.teas2.repository.TeaRepository;

@SpringBootTest
class MongoDBTests {

    @Autowired
    TeaRepository teaRepository;

    @AfterEach
    void cleanDB() {
        teaRepository.deleteAll();
    }

    @Test
    void contextLoads() {
    }

    @Test
    void readAndWriteTeaEntity() {
        //given a tea entity
        Tea testTea = new Tea("1", "testTea", "Save me!");

        //when saved to the database
        teaRepository.save(testTea);

        //then can be read from the database
        assert teaRepository.existsTeaById("1");
        assert teaRepository.findTeaById("1").getDescription().equals("Save me!");
    }

    @Test
    void deleteTeaFromDB() {
        //given a tea entity
        Tea testTea = new Tea("1", "testTea", "Delete me!");

        //when saved to the database
        teaRepository.save(testTea);

        //then can be read from the database
        assert teaRepository.existsTeaById("1");
        assert teaRepository.findTeaById("1").getDescription().equals("Delete me!");

        //when it is deleted
        teaRepository.delete(testTea);

        assert teaRepository.findTeaById("1") == null;
    }

}
