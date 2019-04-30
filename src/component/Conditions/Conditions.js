import React from 'react';
import style from './Conditions.module.css';

const Conditions = ({currentConditions}) =>{
    console.log(currentConditions)
    return(
        <React.Fragment>
            <div className={style.conditionsCard}>
            <div className={style.conditionsCardInner}>
            {Object.entries(currentConditions).length === 0 ? <p>Loading</p>
            : 
            <React.Fragment>
                <p className={style.noMargin}>{currentConditions.location.name}</p>
                {/* <img src={currentConditions.current.condition.icon} alt="current condition"/> */}
                <p className={`${style.cardText} ${style.noMargin} ${style.op}`}>{currentConditions.current.condition.text}</p>
            </React.Fragment>
           }
           </div>
            </div>
        </React.Fragment>
    );
}

export default Conditions;