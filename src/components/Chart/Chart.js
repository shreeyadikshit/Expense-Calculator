import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar.js'


function Chart(props) {

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maximumVal = Math.max(...dataPointValues);

  return (
    
    <div className='chart'>
        {props.dataPoints.map((dataPoint) => 
        <ChartBar id={dataPoint.label} 
                  value={dataPoint.value} 
                  maxValue={maximumVal} 
                  label={dataPoint.label} 
        /> )}
    </div>
    
  )
}

export default Chart