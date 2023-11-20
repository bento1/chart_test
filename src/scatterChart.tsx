import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dataSet  from './dataGenerator';
import SliderHorizon from './SliderHorizon';
import SliderVertical from './SliderVertical';
import { useEffect, useRef, useState } from 'react';
import { Box, Switch } from '@chakra-ui/react'
import { CSSProperties } from "react";
import IconMenu from './colorby';


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
    series: dataSet.data,
    
    yAxis: {
      min: 0,
      max: 100,
    },
    xAxis: {
      min: 0,
      max: 100,
    },
  
  };
const lim={
  slider:{horizon:{min:0,max:100},
  vertical:{min:0,max:100}
  }
}

function ScatterChart(){
  const [config,setConfig ]=useState(options);
  const [toggleBipolar,setToggleBipolar]=useState(false);
  const childStateRef = useRef();
  // const [[xmin,xmax],setXRange ]=useState([0,100]);
  // const [[xmin,xmax],setXRange ]=useState([0,100]);
  // const [[ymin,ymax],setYRange ]=useState([0,100]);
  // xmin_in_dataset=dataSet

  const addLine = () => {
    config.series.push({name:'bipolar',type:"line",data:[[1,2],[300,10]]});
  };
  
  useEffect(() => {
    console.log(toggleBipolar)
    if(toggleBipolar){
      addLine();
      setConfig(config);
      setToggleBipolar(false);
    }else{
      setConfig(options);
    }
  }, [toggleBipolar]);
  
  useEffect(() => {
    console.log(lim)
  }, [lim]);

  const styleSliderVertical:CSSProperties = {float :'left', width :'10%', height: "600px" };
  const styleSliderHorizon:CSSProperties = {float :'left', width :'70%', height: "600px" };
  const styleChart:CSSProperties = {float :'left', width:'60%' };
  return(
  <div>

    <div>
      <div style={styleSliderVertical}><SliderVertical/></div>
      <div style={styleChart}>
        <HighchartsReact containerProps={{ style: { height: "600px" } }} highcharts={Highcharts} options={config} />
      </div>
    </div>
    <div>
      <div style={styleSliderVertical}></div>
      <div style={styleSliderHorizon}>
        <SliderHorizon ref={childStateRef}/>
      </div>
    </div>
    <div>
      <div>
      Show Bipolar <Switch id='bipolarswitch' defaultChecked={toggleBipolar} onChange={(e)=>setToggleBipolar(!e.target.value)}/>
      </div>
    </div>
    {/* <div>
        <IconMenu/> 
    </div> */}
  </div>

    
  );
}
export default ScatterChart;