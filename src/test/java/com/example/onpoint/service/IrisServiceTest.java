package com.example.onpoint.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class IrisServiceTest {

    @Autowired
    private IrisService irisService;

    @Test
    void testGetAverageSepalLength() {
        // Test for Iris-setosa species
        double expectedAverage = 5.006; // Known average sepal length for Iris-setosa
        double actualAverage = irisService.getAverageSepalLength("Iris-setosa");
        assertEquals(expectedAverage, actualAverage, 0.001,
                "Average sepal length for Iris-setosa should be approximately 5.006");

        // Test for Iris-versicolor species
        expectedAverage = 5.936; // Known average sepal length for Iris-versicolor
        actualAverage = irisService.getAverageSepalLength("Iris-versicolor");
        assertEquals(expectedAverage, actualAverage, 0.001,
                "Average sepal length for Iris-versicolor should be approximately 5.936");

        // Test for non-existent species
        actualAverage = irisService.getAverageSepalLength("NonExistent");
        assertEquals(0.0, actualAverage, 0.001,
                "Average sepal length for non-existent species should be 0.0");
    }
}