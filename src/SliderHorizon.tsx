import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'
import { useState } from 'react';



export default function SliderHorizon(){
    const [range,setRange]=useState([0,100]);

    return (
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        <RangeSlider aria-label={['min', 'max']} 
        defaultValue={[0,100]} 
        onChangeStart={(a:number[])=>setRange(a)} 
        onChangeEnd={(a:number[])=>setRange(a)}  >
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
        </RangeSlider>
    );
    
};