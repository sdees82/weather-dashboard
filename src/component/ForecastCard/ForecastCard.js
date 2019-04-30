import React from 'react';
import style from "./ForecastCard.module.css";


const ForecastCard = ({conditions, date, high, imgSrc, low}) =>{
        return (
            
                  <div className={`${style.card} ${style.border} ${style.background}`}>
                  <div className={style.cardInner}>
                  <span className={style.cardText}>{date}</span>
                    <img className={style.icon} src={imgSrc} alt="weather icon"/>
                        <span className={`${style.cardText} ${style.cardConditions} ${style.noOp}`}>{conditions}</span>
                        <div className={style.tempSection}>
                        <span className={`${style.cardText} ${style.pdRt}`}>{`${high}°`}</span>
                        <span className={style.cardText}>{`${low}°`}</span>
                        </div>
                  </div>
                </div>
        );
}

export default ForecastCard;