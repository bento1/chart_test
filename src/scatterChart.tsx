import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dataSet  from './dataGenerator';
const options = {
    chart: {
      type: 'scatter'
    },
    title: {
      text: 'My chart'
    },
    boost: {
        useGPUTranslations: true
    },
    series: dataSet
  };
function ScatterChart(){
  return(<div>
      <HighchartsReact highcharts={Highcharts} options={options} />
  </div>);
}
export default ScatterChart;