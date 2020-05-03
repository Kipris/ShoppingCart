export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkErrors = (value, rules) => {
    let isValid = true;
    let errorText = '';
    if (!rules) {
        return isValid;
    }
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        isValid ? errorText = '' : errorText += 'This field is required. ';
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
        isValid ? errorText = '' : errorText += `This field should have minimum ${rules.minLength} chars. `;
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
        isValid ? errorText = '' : errorText += `This field should have maximum ${rules.maxLength} chars. `;
    }
    if (rules.isEmail) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = pattern.test(value) && isValid;
        isValid ? errorText = '' : errorText += `Email is not valid. `;
    }
    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
        isValid ? errorText = '' : errorText += `This field should contain only numbers. `;
    }
    return errorText;
}
