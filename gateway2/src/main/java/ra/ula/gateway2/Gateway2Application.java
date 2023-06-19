package ra.ula.gateway2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class Gateway2Application {

    public static void main(String[] args) {
        SpringApplication.run(Gateway2Application.class, args);
    }

}

@RestController
class Gateway2Controller {
    @GetMapping("/hellogateway")
    public String helloGateway() {
        return "Hello, it's me!";
    }

    @GetMapping("/helloauth")
    public ResponseEntity<String> helloAauth() {
        return new ResponseEntity<>("You are authorized", HttpStatus.OK);
    }

    @GetMapping
    public String hello() {
        return "Hello, it's me!";
    }

    @GetMapping("/goodbye")
    public String goodbye() {
        return "Goodbye!";
    }
}
