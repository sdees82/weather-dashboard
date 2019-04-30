import React from 'react';
import style from './Temperature.module.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Weather = ({currentTemp, currentConditions}) =>{
    return(
        <React.Fragment>
            <div className={`${style.TemperatureCard} ${style.border} ${style.background}`}>
                <div className={style.cardInner}>
                <div className={style.cardLeft}>
                    <span className={style.title}>Temperature</span>
                    <div style={{width: '130px'}}>
                    <CircularProgressbar 
                    styles={{
                        width: '100px',
                    text: {
                        fill: '#fff',
                        fontSize: '1em'
                    },
                    trail: {
                        stroke: '#2a3a74',
                        strokeWidth: 4
                    },
                    path: {
                        stroke: "#527fbf",
                        strokeWidth: 4
                    },
                    
                    }}
                        percentage={currentTemp}
                        text={`${currentTemp}°`}
                    />
                </div>
                </div>
                {currentConditions.current !== undefined ? 
                <div className={style.cardRight}>
                <span>{`${Math.floor(currentConditions.current.feelslike_f)}°`}</span>
                <p className={`${style.cardText} ${style.noMargin}`}>Feels like</p>
                <span className={style.margin}>{`${currentConditions.current.humidity}%`}</span>
                <p className={`${style.cardText} ${style.noMargin}`}>Humidity</p>
            </div>
            :
            <div className={style.cardRight}>
                     <span>76</span>
                    <p className={style.cardText}>Outside</p>
                    <span>23</span>
                    <span className={style.cardText}>Humidity</span>
                    
                </div>    
            }
                
            </div>
            </div>
        </React.Fragment>
    )
}

export default Weather;