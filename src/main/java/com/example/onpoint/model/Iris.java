package com.example.onpoint.model;

import lombok.Data;

@Data
public class Iris {
    private double sepalLength;
    private double sepalWidth;
    private double petalLength;
    private double petalWidth;
    private String species;
}