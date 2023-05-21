package com.example.teas.controller;

import com.example.teas.model.Tea;
import com.example.teas.repository.TeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//TODO: crossorigin
@RestController
@RequestMapping("/teas")
public class TeaController {
    
    @Autowired
    TeaRepository teaRepository;
    
    @GetMapping("/hello/{name}")
    public ResponseEntity<String> hello(@PathVariable("name") String name) {
        System.out.println("request recieved: hello " + name);
        return new ResponseEntity<>("HelloTea here " + name, HttpStatus.OK);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Tea>> getAllTeas() {
        try {
            List<Tea> teas = new ArrayList<>(teaRepository.findAll());
            if (teas.isEmpty()) {
                System.out.println("No tea in DB");
                return new ResponseEntity<>(null, HttpStatus.OK);
            } else return new ResponseEntity<>(teas, HttpStatus.OK);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Tea> createTea(@RequestBody Tea tea) {
        System.out.println("Got a request to create tea...");
        try {
            Tea _tea = teaRepository.save(new Tea(tea.getId(), tea.getName(), tea.getDescription()));
            return new ResponseEntity<>(_tea, HttpStatus.CREATED);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{teaId}")
    public ResponseEntity<String> deleteTea(@PathVariable("teaId") String teaId) {
        System.out.println("deleting...");
        try {
            if (teaRepository.existsTeaById(teaId)) {
                teaRepository.deleteById(teaId);
                return new ResponseEntity<>("Successfully deleted Tea no.: " + teaId, HttpStatus.OK);
            } else return new ResponseEntity<>("Tea not found in DB", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong while deleting tea.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //To be used instead of a separate makeTea-Service
    @GetMapping("/maketea/{teaID}")
    public ResponseEntity<String> makeTea(@PathVariable("teaID") String id) {
        try {
            if (teaRepository.existsTeaById(id)) {
                Tea tea = teaRepository.findTeaById(id);
                return new ResponseEntity<>("Here is your cup of " + tea.getName() + ". Enjoy!", HttpStatus.OK);
            } else return new ResponseEntity<>("Here is a cup of hot water. The tea you wanted is not available.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong while preparing your tea.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
