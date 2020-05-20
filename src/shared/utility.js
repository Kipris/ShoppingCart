export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkErrors = (value, rules) => {
    let isValid = true;
    let errors = [];
    if (!rules) {
        return isValid;
    }
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        if (!isValid) errors.push('This field is required. ');
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
        if (!isValid) errors.push(`This field should have minimum ${rules.minLength} chars. `);
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
        if (!isValid) errors.push(`This field should have maximum ${rules.maxLength} chars. `);
    }
    if (rules.isEmail) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = pattern.test(value) && isValid;
        if (!isValid) errors.push(`Email is not valid. `);
    }
    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
        if (!isValid) errors.push(`This field should contain only numbers. `);
    }
    return errors.join(' ');
}

export const getCardTypeImage = (cardType) => {
    const cardImages = {
        'Visa': 'https://lavca.org/wp-content/uploads/2019/07/VISA-logo-square.png',
        'MasterCard': 'https://i.dlpng.com/static/png/6794578_preview.png'
    };
    return cardImages[cardType];
}
