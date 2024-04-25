package com.slt.fullstackbackend.repository;

import com.slt.fullstackbackend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login,Integer> {
    public Login findByEmail(String email);

}
