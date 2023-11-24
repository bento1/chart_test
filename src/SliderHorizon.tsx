import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'
import { forwardRef, useState,useImperativeHandle } from 'react';

export interface GetHorizonRange{
    getHorizonRange: () => number[]
}


const SliderHorizon = forwardRef<GetHorizonRange, any>((props:any,ref:any) => {
    const [range,setRange]=useState([0,100]);
    
    const getHorizonRange = () => {
        return range;
    };
    
    const changeRange = (input_Range:number[]) => {
        console.log(input_Range)
        setRange(input_Range)
    };
    useImperativeHandle(ref, () => ({getHorizonRange}));

    return (
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        <RangeSlider aria-label={['min', 'max']} 
        defaultValue={[0,100]}
        onChange={(a:number[])=>changeRange(a)} >
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
        </RangeSlider>
    );
    });

export default SliderHorizon;