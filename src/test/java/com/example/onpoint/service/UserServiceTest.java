package com.example.onpoint.service;

import com.example.onpoint.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    void testCreateUser() {
        User user = new User();
        user.setUsername("testuser");
        user.setEmail("testuser@example.com");

        User savedUser = userService.createUser(user);

        assertNotNull(savedUser.getId(), "User ID should be generated");
        assertEquals("testuser", savedUser.getUsername(), "Username should match");
        assertEquals("testuser@example.com", savedUser.getEmail(), "Email should match");

        List<User> users = userService.getAllUsers();
        assertEquals(1, users.size(), "There should be one user in the database");
        assertEquals("testuser", users.getFirst().getUsername(), "Username in list should match");
    }
}