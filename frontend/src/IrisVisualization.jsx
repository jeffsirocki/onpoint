import RadioButton from "./components/RadioButton.jsx";
import IrisScatterPlot from "./IrisScatterPlot.jsx";
import IrisD3ScatterPlot from "./IrisD3ScatterPlot.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function IrisVisualization() {
    const [data, setData] = useState('');
    const [useRecharts, setUseRecharts] = useState(true);

    useEffect(() => {
        axios.get('/api/iris')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching message:', error));
    }, []);

    const vizOptions = [
        { label: 'Recharts', value: true },
        { label: 'D3', value: false },
    ];

    return (
        <div className="flex flex-col items-center pt-8 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">Iris Visualization</h1>
            <p className="text-base text-gray-500">Explore the Iris dataset with interactive scatter plots</p>
            <RadioButton
                options={vizOptions}
                name="vizType"
                selectedValue={useRecharts}
                onChange={setUseRecharts}
                className="space-x-0"
                optionClassName="transition-all duration-200"
            />
            {data.length > 0 ? (
                useRecharts ? (
                    <IrisScatterPlot data={data} />
                ) : (
                    <IrisD3ScatterPlot data={data} />
                )
            ) : (
                <p className="text-gray-500 italic">Loading data...</p>
            )}
        </div>
    );
}

export default IrisVisualization;