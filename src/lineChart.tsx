import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dataSet  from './dataGenerator';
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
    series: dataSet
  };


  Highcharts.setOptions({
    plotOptions: {
        area: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        arearange: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        areaspline: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        areasplinerange: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        bar: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        boxplot: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        bubble: { animation: false, enableMouseTracking: false, stickyTracking: true, dataLabels: { style: { textShadow: false } } },
        column: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        columnrange: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        errorbar: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        funnel: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        gauge: { animation: false, enableMouseTracking: false, stickyTracking: true, dataLabels: { style: { textShadow: false } } },
        heatmap: { animation: false, enableMouseTracking: false, stickyTracking: true, dataLabels: { style: { textShadow: false } } },
        line: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        pie: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
        polygon: { animation: false, enableMouseTracking: false, stickyTracking: true,  dataLabels: { style: { textShadow: false } } },
        pyramid: { animation: false, enableMouseTracking: false, stickyTracking: true,  dataLabels: { style: { textShadow: false } } },
        scatter: { animation: false, enableMouseTracking: false, stickyTracking: true, dataLabels: { style: { textShadow: false } } },
        series: { animation: false, enableMouseTracking: false, stickyTracking: true,  dataLabels: { style: { textShadow: false } } },
        solidgauge: { animation: false, enableMouseTracking: false, stickyTracking: true,  dataLabels: { style: { textShadow: false } } },
        spline: { animation: false, enableMouseTracking: false, stickyTracking: true,  dataLabels: { style: { textShadow: false } } },
        treemap: { animation: false, enableMouseTracking: false, stickyTracking: true, dataLabels: { style: { textShadow: false } } },
        waterfall: { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels: { style: { textShadow: false } } },
    },
    chart: {
        reflow: false,
        animation: false
    },
    tooltip: {
        enabled: false,
        animation: false
    },
    exporting: {
        enabled:false
    },
    credits: {
        enabled: false
    }
  });
function LineChart(){
  return(<div>
      <HighchartsReact highcharts={Highcharts} options={options} />
  </div>);
}
export default LineChart;