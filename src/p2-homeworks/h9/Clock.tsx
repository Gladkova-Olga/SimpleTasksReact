import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    let stringTime: string = "Press on start";
    let stringDate = ""
    if (date) {
        stringTime = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
         : ${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()} 
         : ${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`
        stringDate = `${date.getFullYear()} / ${date.getMonth() + 1 < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1} / 
           ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`
    }

    // const stringTime = date?.toLocaleTimeString() || <br/>
    // const stringDate = date?.toLocaleDateString() || <br/>

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >

                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
