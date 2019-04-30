import React from 'react';
import style from './Navbar.module.css';

const Navbar = ({currentDate}) =>{
    return(
        <nav className={style.nav}>
            <span className={style.title}><strong>SMART</strong><span>WEATHER</span></span>
            <span className={style.date}>{currentDate}</span>
        </nav>
    )
}

export default Navbar;