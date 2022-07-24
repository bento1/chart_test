import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dataSet  from './dataGenerator';
const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    boost: {
        useGPUTranslations: true
    },
    series: dataSet
  };
function LineChart(){
  return(<div>
      <HighchartsReact highcharts={Highcharts} options={options} />
  </div>);
}
export default LineChart;