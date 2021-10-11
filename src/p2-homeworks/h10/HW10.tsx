import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import loader from "./assets/loader.gif"
import {InitStateType, loadingOnOff, loadingReducer} from "./bll/loadingReducer";

function HW10() {
    const state = useSelector<AppStoreType, InitStateType>(state => state.loading);
    const dispatch = useDispatch();

    const loading = state.loading

    const setLoading = () => {
        dispatch(loadingOnOff(true))
        setTimeout(() => dispatch(loadingOnOff(false)), 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={loader}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
