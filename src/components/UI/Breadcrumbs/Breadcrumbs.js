import React from 'react';
import Link from 'react-router-dom';

import Icon from '../Icon/Icon';

const breadcrumbs = (props) => {
    return (
        <div>
            <Link />
            <Icon iconName='chevron-right' />
            <Link />
            <Icon iconName='chevron-right' />
            <Link />
        </div>
    );
}
 
export default breadcrumbs;