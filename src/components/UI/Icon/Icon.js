import React from 'react';

const icon = (props) => {
    return (
        <div>
            <img 
                src={require(`../../../assets/icons/${props.iconName}-icon.svg`)} 
                alt={`${props.iconAlt} icon`} />
        </div>
    );
}
 
export default icon;
