import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, InitStateType} from "../h12/bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


function HW12() {
    const state = useSelector<AppStoreType, InitStateType>(state => state.theme); // useSelector
    const theme = state.theme
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }


    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s[theme + '-text']}>
                homeworks 12
            </div>
            <SuperRadio
                className={s[theme + '-text']}
                name={'radio'}
                options={["some", "dark", "red", "blue"]}
                value={theme}
                onChangeOption={onChangeCallback}
            />


            <hr/>
        </div>
    );
}

export default HW12;
