import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dataSet  from './dataGeneratorTrace';
import { StepMenu } from './selectStepForTrace';
const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'My chart'
    },
    boost: {
        useGPUTranslations: true
    },
    series: dataSet.data
  };
const step_name=['바보','멍청이']
function LineChart(){
  return(<div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <StepMenu listOfStep={step_name} onClick={(e)=>(console.log(e.currentTarget.classList[1]))}/>
  </div>
  );
}
export default LineChart;