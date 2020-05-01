import React from 'react';

import classes from './Icon.module.scss'

const icon = (props) => {
    return (
        <div className={classes.icon__wrap}>
            <img 
                src={require(`../../../assets/icons/${props.iconName}-icon.svg`)} 
                alt={`${props.iconAlt} icon`} />
        </div>
    );
}
 
export default icon;
