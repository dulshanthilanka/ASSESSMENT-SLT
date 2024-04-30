package com.slt.fullstackbackend.controller;

import com.slt.fullstackbackend.model.User;
import com.slt.fullstackbackend.repository.UserRepository;
import org.antlr.v4.runtime.tree.pattern.ParseTreePattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Iterable<User> getUsers() {

        return userRepository.findAll();
    }

    public User createUser(@RequestBody User newUser) {

        User savedUser = userRepository.save(newUser);
        return savedUser;
    }
}
