package com.example.onpoint.service;

import com.example.onpoint.model.User;
import com.example.onpoint.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

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

    @Test
    public void testDeleteUserById() {
        // Create a user
        User user = new User();
        user.setUsername("testuser");
        user = userRepository.save(user);

        // Delete the user
        userService.deleteUserById(user.getId());

        // Verify the user no longer exists
        assertFalse(userRepository.existsById(user.getId()));
    }

    @Test
    public void testDeleteNonExistentUser() {
        // Try to delete a non-existent user
        assertThrows(IllegalArgumentException.class, () -> userService.deleteUserById(999L));
    }
}
