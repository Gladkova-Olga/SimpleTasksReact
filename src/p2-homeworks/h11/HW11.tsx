import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (newValue: number) => {
        setValue1(newValue)
    }
    const onChangeDoubleRange = (value: number | number[]) => {
        Array.isArray(value) && setValue1(value[0])
        Array.isArray(value) && setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange = {onChangeRange}
                    value1={value1}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={style.DoubleRangeContainer}>
                <div>{value1}</div>
                <SuperDoubleRange
                    value = {[value1,value2]}
                    onChangeRange = {onChangeDoubleRange}
                />
                <div>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
