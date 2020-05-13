import React from 'react';

import classes from './Icon.module.scss'

const icon = (props) => {
    return (
        <div className={classes.wrap}>
            <img 
                src={require(`../../../assets/icons/${props.iconName}-icon.svg`)} 
                alt={`${props.iconName} icon`} />
        </div>
    );
}
 
export default icon;
