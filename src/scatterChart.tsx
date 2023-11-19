import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dataSet  from './dataGenerator';
import SliderHorizon from './SliderHorizon';
import SliderVertical from './SliderVertical';
import { useEffect, useState } from 'react';
import { Switch } from '@chakra-ui/react'
import { CSSProperties } from "react";


function selectPointsByDrag(e: any) {
  let group: any[] = [];

  for(let series of e.target.series) {
    let list = [];
    for(let point of series.points) {
      if (point.x >= e.xAxis[0].min && point.x <= e.xAxis[0].max &&
          point.y >= e.yAxis[0].min && point.y <= e.yAxis[0].max) {

            // console.log(point.options)
        list.push([point.options?.name ? point.options.name : point.options.x, point.options.y]);
      }

    }
    group.push(list);
  }
  console.log(group)
  /* 
  * 여기에 select 한 이후에 처리할 코드가 들어가야 함
  */

  return false;
}

const options = {
    chart: {
      type: 'scatter',
      zoomType:'xy',
      events: {
        selection: (e: any) => selectPointsByDrag(e)
      },
      
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
  const [config, ]=useState(options);
  useEffect(() => {}, []);

  const styleSliderVertical:CSSProperties = {float :'left', width :'10%', height: "300px" };
  const styleChart:CSSProperties = {float :'left', width:'60%' };
  return(
  <div>

    <div>
      <div style={styleSliderVertical}><SliderVertical/></div>
      <div style={styleChart}><HighchartsReact containerProps={{ style: { height: "300px" } }} highcharts={Highcharts} options={config} /></div>
    </div>
    <div>
      <SliderHorizon/>
    </div>
    <div>
      Show Bipolar <Switch id='email-alerts' />
    </div>
  </div>

    
  );
}
export default ScatterChart;