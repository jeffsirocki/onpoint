package com.example.onpoint.repository;

import com.example.onpoint.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}