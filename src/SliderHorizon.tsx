import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'


export default function SliderHorizon(){
    return (
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        <RangeSlider aria-label={['min', 'max']} onChangeStart={(val) => console.log(val)} onChangeEnd={(val) => console.log(val)} >
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
        </RangeSlider>
    );
    
};