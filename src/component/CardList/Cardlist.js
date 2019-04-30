import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';
import style from "./CardList.module.css";


const CardList = ({forecast}) =>{
        return (
            <div className={style.cardWrapperOuter}>
                { forecast.map((val, index)=>{
                    return(
                    <ForecastCard key={index} date={val.date} imgSrc={val.day.condition.icon} conditions={val.day.condition.text} high={Math.floor(val.day.maxtemp_f)} low={Math.floor(val.day.mintemp_f)}/>
                    )
                })}
            </div>
        );
}

export default CardList;