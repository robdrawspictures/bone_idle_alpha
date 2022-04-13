package com.codeclan.example.boneidleservice.controllers;

import com.codeclan.example.boneidleservice.models.forum.Thread;
import com.codeclan.example.boneidleservice.repositories.ThreadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class ThreadController {

    @Autowired
    ThreadRepository threadRepository;

    @GetMapping(value="/threads")
    public ResponseEntity getThreads(
            @RequestParam(name="creator", required = false) String username){
        if(username != null){
            return new ResponseEntity(threadRepository.findByCreatorUsername(username), HttpStatus.OK);
        } return new ResponseEntity(threadRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/threads/{id}")
    public ResponseEntity getThread(@PathVariable Long id){
        return new ResponseEntity(threadRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/threads")
    public ResponseEntity<Thread> postThread(@RequestBody Thread thread){
        threadRepository.save(thread);
        return new ResponseEntity<>(thread, HttpStatus.CREATED);
    }

}
