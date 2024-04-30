package com.slt.fullstackbackend.controller;

import com.slt.fullstackbackend.model.User;
import com.slt.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/home")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public Iterable<User> getUsers() {

        return userService.getUsers();
    }

    @PostMapping
    public User createUser(@RequestBody User newUser) {

        return userService.createUser(newUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable Integer id, @RequestBody User updatedUserData) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setId(updatedUserData.getId());
            user.setName(updatedUserData.getName());
            user.setAge(updatedUserData.getAge());
            user.setAddress(updatedUserData.getAddress());
            user.setExperience(updatedUserData.getExperience());
            user.setProvince(updatedUserData.getProvince());
            user.setNationality(updatedUserData.getNationality());
            user.setGender(updatedUserData.getGender());
            user.setMarriedStatus(updatedUserData.getMarriedStatus());
            user.setFile(updatedUserData.getFile());

            userRepository.save(user);
        } else {
            throw new RuntimeException("User not found with id: " + id);
        }
    }
}