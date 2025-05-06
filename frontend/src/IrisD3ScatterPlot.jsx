import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

function IrisD3ScatterPlot({ data, width = 600, height = 400 }) {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        const margin = { top: 20, right: 20, bottom: 50, left: 50 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Scales
        const xScale = d3.scaleLinear()
            .domain(d3.extent(data, d => +d.sepalLength))
            .range([0, innerWidth]);

        const yScale = d3.scaleLinear()
            .domain(d3.extent(data, d => +d.sepalWidth))
            .range([innerHeight, 0]);

        const colorScale = d3.scaleOrdinal()
            .domain(['Iris-setosa', 'Iris-versicolor', 'Iris-virginica'])
            .range(['#8884d8', '#82ca9d', '#ff7300']);

        // Axes
        g.append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale))
            .append('text')
            .attr('x', innerWidth / 2)
            .attr('y', 40)
            .attr('fill', 'black')
            .text('Sepal Length (cm)');

        g.append('g')
            .call(d3.axisLeft(yScale))
            .append('text')
            .attr('x', -innerHeight / 2)
            .attr('y', -40)
            .attr('fill', 'black')
            .attr('transform', 'rotate(-90)')
            .text('Sepal Width (cm)');

        // Scatter points
        g.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', d => xScale(+d.sepalLength))
            .attr('cy', d => yScale(+d.sepalWidth))
            .attr('r', 5)
            .attr('fill', d => colorScale(d.species));
    }, [data, width, height]);

    return <svg ref={svgRef}></svg>;
}

export default IrisD3ScatterPlot;