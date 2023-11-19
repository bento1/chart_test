import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'


export default function SliderVertical(){
    return (
        <RangeSlider
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        aria-label={['min', 'max']}
        colorScheme='pink'
        orientation='vertical'
        onChangeStart={(val) => console.log(val)} onChangeEnd={(val) => console.log(val)} 
        >
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
        </RangeSlider>
    );
    
};