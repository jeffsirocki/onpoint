import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function IrisScatterPlot({ data }) {
    // Group data by species
    const speciesData = {
        setosa: data?.filter(d => d.species === 'Iris-setosa'),
        versicolor: data?.filter(d => d.species === 'Iris-versicolor'),
        virginica: data?.filter(d => d.species === 'Iris-virginica'),
    };

    return (
        <ScatterChart width={600} height={400} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="sepalLength" name="Sepal Length" unit="cm" />
            <YAxis type="number" dataKey="sepalWidth" name="Sepal Width" unit="cm" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="Setosa" data={speciesData.setosa} fill="#8884d8" shape="circle" />
            <Scatter name="Versicolor" data={speciesData.versicolor} fill="#82ca9d" shape="triangle" />
            <Scatter name="Virginica" data={speciesData.virginica} fill="#ff7300" shape="square" />
        </ScatterChart>
    );
}

export default IrisScatterPlot;