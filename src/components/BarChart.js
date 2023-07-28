import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const BarChart = ({ data }) => {
    const [selectedField, setSelectedField] = useState('compactness');
    const fieldOptions = Object.keys(data[0]).filter((field) => field !== 'class');
  
    const chartData = {
      labels: data.map((item) => item.class),
      datasets: [
        {
          label: selectedField,
          data: data.map((item) => item[selectedField]),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderWidth: 1,
        },
      ],
    };
  
    const chartOptions = {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
    };
  
    const handleFieldChange = (event) => {
      setSelectedField(event.target.value);
    };
  
    return (
      <div className="chart-container">
        <h2>Mean Bar Chart Data</h2>
        <div className="select-container">
          <label htmlFor="field-select">Select Field:</label>
          <select id="field-select" value={selectedField} onChange={handleFieldChange}>
            {fieldOptions.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
        <div className="chart-wrapper">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    );
  };
  
  export default BarChart;