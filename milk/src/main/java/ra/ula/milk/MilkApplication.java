package ra.ula.milk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class MilkApplication {

    public static void main(String[] args) {
        SpringApplication.run(MilkApplication.class, args);
    }

}

@RestController
@RequestMapping("getmilk")
class MilkServiceController {
    @GetMapping
    public String getmilk() {
        return "Here is the milk for your tea.";
    }
}