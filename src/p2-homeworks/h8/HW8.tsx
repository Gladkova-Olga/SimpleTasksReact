import React, {useState} from 'react'
import {checkAge, homeWorkReducer, sortByName} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}
export type initialPeopleType = typeof initialPeople;

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
] as Array<UserType>

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={style.item}>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortByName('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortByName('down')))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkAge(18)))

    return (
        <div>
            <hr/>
            <div className={style.block}>homeworks 8</div>
            <div className={style.block}>{finalPeople}</div>


            <div className={style.block}>
                <div ><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={check18}>check 18</SuperButton></div>
            </div>


        </div>
    )
}

export default HW8
