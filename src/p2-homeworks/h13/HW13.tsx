import React, {ChangeEvent, useState} from "react";
import {requestsAPI} from "./api/RequestsAPI";


function HW12() {
    const [text, setText] = useState("")
    const [isSuccessful, setIsSuccessful] = useState(true)

    const onChangeSuccess = (e: ChangeEvent<HTMLInputElement>) => {
        setIsSuccessful(e.currentTarget.checked)
    }

    const request = () => {
        requestsAPI.postRequest(isSuccessful)
            .then(res => {
                // if(res.hasOwnProperty('data')) {
                console.log(res.data)
                setText(res.data.errorText)

            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : 'Some error occurred')
                setText(error.response ? error.response.data.errorText : 'Some error occurred')
            })
    }


    return (
        <div>
            homeworks 13
            <div>
                <button onClick={request}>request</button>
            </div>
            <div>
                <input type="checkbox" checked={isSuccessful} onChange={onChangeSuccess}/>
                success
            </div>
            {text}
        </div>
    );
}

export default HW12;
