import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import style from "./Header.module.css"

function Header() {
    return (
        <div className={style.navbarBlock}>
            <nav>
                <div className={style.item}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={style.activeLink}>PreJunior</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={PATH.JUNIOR} activeClassName={style.activeLink}>Junior</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={style.activeLink}>Junior+</NavLink>
                </div>
            </nav>
        </div>

    )
}

export default Header
