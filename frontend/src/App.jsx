import { useState, useEffect } from 'react';
import axios from 'axios';
import IrisD3ScatterPlot from './IrisD3ScatterPlot.jsx'
import PropTypes from "prop-types";

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('/api/iris')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching message:', error));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">React + Spring Boot</h1>
                <p className="text-lg">Message from backend:</p>
                {data.length > 0 ? (
                    <IrisD3ScatterPlot data={data} />
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </div>
    );
}

export default App;