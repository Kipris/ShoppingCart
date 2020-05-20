import React from 'react';

import { getCardTypeImage } from '../../../shared/utility';
import classes from './Input.module.scss';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.invalid);
    }
    
    inputElement = <input 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.value}
        placeholder={props.elementConfig.placeholder}
        onChange={props.changed} />;
    return (
        <div className={classes.group}> 
            {props.label 
                ? <label className={classes.input__label}>{props.label}</label> 
                : null}
            {inputElement}
            {props.invalid && props.errorText
                ? <label className={classes.error}>{props.errorText}</label>
                : null}
            {props.cardType 
                ? <img src={getCardTypeImage(props.cardType)} alt={props.cardType} />
                : null }
        </div>
    );
}
 
export default input;
