import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css';
import BarChart from './BarChart';

import { getAuthToken } from '../utils/auth';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [data_mean, setDataMean] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const token = getAuthToken();

      const headers = {
        'Authorization': 'Bearer ' + token
      }

      const response_mean = await axios.get('http://localhost:8000/get_mean_data', { headers: headers });
      setDataMean(response_mean.data)

      const response = await axios.get('http://localhost:8000/get_std_data', { headers: headers });
      setData(response.data);

    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div>
      {data_mean.length !== 0 && <BarChart data={data_mean} />}
      <h2>Standard deviation Data</h2>
      <div className="data-table">
        <div className="column">
          {data.map((item, index) => (
            <div key={index} className="table-row">
              <div className="table-header">Class</div>
              <div className="table-value">{item.class}</div>
              <div className="table-header">Compactness</div>
              <div className="table-value">{item.compactness}</div>
              <div className="table-header">Circularity</div>
              <div className="table-value">{item.circularity}</div>
              <div className="table-header">Distance Circularity</div>
              <div className="table-value">{item.distance_circularity}</div>
              <div className="table-header">Radius Ratio</div>
              <div className="table-value">{item.radius_ratio}</div>
              <div className="table-header">Pr. Axis Aspect Ratio</div>
              <div className="table-value">{item["pr.axis_aspect_ratio"]}</div>
              <div className="table-header">Max Length Aspect Ratio</div>
              <div className="table-value">{item["max.length_aspect_ratio"]}</div>
              <div className="table-header">Scatter Ratio</div>
              <div className="table-value">{item.scatter_ratio}</div>
              <div className="table-header">Elongatedness</div>
              <div className="table-value">{item.elongatedness}</div>
            </div>
          ))}
        </div>
        <div className="column">
          {data.map((item, index) => (
            <div key={index} className="table-row">
              <div className="table-header">Pr. Axis Rectangularity</div>
              <div className="table-value">{item["pr.axis_rectangularity"]}</div>
              <div className="table-header">Max Length Rectangularity</div>
              <div className="table-value">{item["max.length_rectangularity"]}</div>
              <div className="table-header">Scaled Variance</div>
              <div className="table-value">{item.scaled_variance}</div>
              <div className="table-header">Scaled Variance.1</div>
              <div className="table-value">{item['scaled_variance.1']}</div>
              <div className="table-header">Scaled Radius of Gyration</div>
              <div className="table-value">{item.scaled_radius_of_gyration}</div>
              <div className="table-header">Scaled Radius of Gyration.1</div>
              <div className="table-value">{item['scaled_radius_of_gyration.1']}</div>
              <div className="table-header">Skewness About</div>
              <div className="table-value">{item.skewness_about}</div>
              <div className="table-header">Skewness About.1</div>
              <div className="table-value">{item['skewness_about.1']}</div>
              <div className="table-header">Skewness About.2</div>
              <div className="table-value">{item['skewness_about.2']}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DataTable;
