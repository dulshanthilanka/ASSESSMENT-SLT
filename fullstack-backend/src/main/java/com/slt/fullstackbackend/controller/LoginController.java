package com.slt.fullstackbackend.controller;

import com.slt.fullstackbackend.model.Login;
import com.slt.fullstackbackend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/login") 
public class LoginController {
    @Autowired
    private LoginRepository loginRepository;

    @PostMapping("/validate")
    public String validateLogin(@RequestBody Login loginAttempt) {
        String email = loginAttempt.getEmail();
        String password = loginAttempt.getPassword();
        Login existingUser = loginRepository.findByEmail(email);

        if (existingUser != null && existingUser.getPassword().equals(password)) {
            return "success";
        } else {
            return "failure";
        }
    }

    @PostMapping
    public Login createLogin(@RequestBody Login newLogin) {
        Login savedLogin = loginRepository.save(newLogin);
        return savedLogin;
    }
}
