import React, {ChangeEvent} from 'react'
import {Box, Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: number | number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {


    const handleChange = (event: ChangeEvent<{}>, newValue:  number | number[]) => {
        onChangeRange  && onChangeRange(newValue)

    }
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Box sx={{ width: 200 }}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                />
            </Box>

        </>
    )
}

export default SuperDoubleRange
