package com.example.onpoint.service;

import com.example.onpoint.model.Iris;
import com.opencsv.CSVReader;
import org.springframework.stereotype.Service;

import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Service
public class IrisService {

    public List<Iris> loadIrisData() {
        List<Iris> irisList = new ArrayList<>();
        try (CSVReader csvReader = new CSVReader(new InputStreamReader(
                getClass().getClassLoader().getResourceAsStream("iris.data")))) {
            String[] values;
            while ((values = csvReader.readNext()) != null) {
                if (values.length == 5) {
                    Iris iris = new Iris();
                    iris.setSepalLength(Double.parseDouble(values[0]));
                    iris.setSepalWidth(Double.parseDouble(values[1]));
                    iris.setPetalLength(Double.parseDouble(values[2]));
                    iris.setPetalWidth(Double.parseDouble(values[3]));
                    iris.setSpecies(values[4]);
                    irisList.add(iris);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return irisList;
    }

    public List<String> getUniqueSpecies() {
        return loadIrisData().stream()
                .map(Iris::getSpecies)
                .distinct()
                .toList();
    }

    public double getAverageSepalLength(String species) {
        return loadIrisData().stream()
                .filter(iris -> iris.getSpecies().equals(species))
                .mapToDouble(Iris::getSepalLength)
                .average()
                .orElse(0.0);
    }
}