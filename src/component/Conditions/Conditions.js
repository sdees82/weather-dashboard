import React from 'react';
import style from './Conditions.module.css';

const Conditions = ({currentConditions}) =>{
    return(
        <React.Fragment>
            <div className={style.conditionsCard}>
            <div className={style.conditionsCardInner}>
                <p className={style.noMargin}>{currentConditions.location.name}</p>
                <p className={`${style.cardText} ${style.noMargin} ${style.op}`}>{currentConditions.current.condition.text}</p>
           </div>
            </div>
        </React.Fragment>
    );
}

export default Conditions;