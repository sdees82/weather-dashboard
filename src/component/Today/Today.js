import React from 'react';
import style from './Today.module.css';
import ChartComponent from '../ChartComponent/ChartComponent';

const Today = ({hourlyTemps}) =>{
    return (
        <React.Fragment>
            <div className={style.todayCard}>
            <ChartComponent hourlyTemps={hourlyTemps}/>
            </div>
        </React.Fragment>
    )
}

export default Today;