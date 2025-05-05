package com.example.onpoint.controller;

import com.example.onpoint.model.Iris;
import com.example.onpoint.service.IrisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/iris")
public class IrisController {

    @Autowired
    private IrisService irisService;

    @GetMapping
    public List<Iris> getAllIrisData() {
        return irisService.loadIrisData();
    }

    @GetMapping("/species")
    public List<String> getUniqueSpecies() {
        return irisService.getUniqueSpecies();
    }

    @GetMapping("/average-sepal-length/{species}")
    public double getAverageSepalLength(@PathVariable String species) {
        return irisService.getAverageSepalLength(species);
    }
}