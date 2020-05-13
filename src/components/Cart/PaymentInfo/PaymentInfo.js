import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Input from '../../UI/Input/Input';
import Icon from '../../UI/Icon/Icon';
import { updateObject, checkErrors } from '../../../shared/utility';
import classes from './PaymentInfo.module.scss';

class PaymentInfo extends Component {
    state = {
        paymentForm: {
            cardholderName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name as it appears on your card'
                },
                label: 'Cardholder Name',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            cardNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'XXXX XXXX XXXX XXXX'
                },
                label: 'Card Number',
                value: '',
                cardType: null,
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            expireDate: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'MM / YY'
                },
                label: 'Expire Date',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            securityCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: ''
                },
                label: 'Security Code',
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 3
                },
                valid: false,
                touched: false,
                errorText: ''
            }
        },
        formIsValid: false
    };

    inputChangedHandler = (event, inputIdentifier) => {
        let cardType = '';
        if (inputIdentifier === 'cardNumber') {
            const validate = require('cc-validate');
            cardType = validate.isValid(event.target.value).cardType;
            cardType = cardType === 'Unknown' ? null : cardType;
        }
        
        const updatedFormElement = updateObject(this.state.paymentForm[inputIdentifier], {
            value: event.target.value,
            cardType,
            valid: !checkErrors(event.target.value, this.state.paymentForm[inputIdentifier].validation),
            touched: true,
            errorText: checkErrors(event.target.value, this.state.paymentForm[inputIdentifier].validation)
        });
        const updatedPaymentForm = updateObject(this.state.paymentForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedPaymentForm) {
            formIsValid = updatedPaymentForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({paymentForm: updatedPaymentForm, formIsValid});
    }

    submitHandler = (event) => {
        event.preventDefault();

        if (!this.state.formIsValid) {
            for (let inputIdentifier in this.state.paymentForm) {
                this.setState(prevState => {
                    let prevElement = prevState.paymentForm[inputIdentifier];
                    let errors = checkErrors(prevElement.value, prevElement.validation);
                    return {
                        paymentForm: {
                            ...prevState.paymentForm,
                            [inputIdentifier]: {
                                ...prevElement,
                                valid: !errors,
                                touched: true,
                                errorText: errors
                            }
                        }
                    }
                })
            }
            return;
        }

        const formData = {};
        for (let inputIdentifier in this.state.paymentForm) {
            formData[inputIdentifier] = this.state.paymentForm[inputIdentifier].value;
        }

        this.props.onAddPaymentInfo(formData);
        setTimeout(() => {
            this.props.onMakeOrder(this.props.orderData);
            this.props.history.push('/success-order');
        }, 0);
    }

    render() { 
        const formElementsArray = [];
        for (let key in this.state.paymentForm) {
            formElementsArray.push({
                id: key,
                config: this.state.paymentForm[key]
            })
        }

        return (
            <div className={classes.wrap}>
                <h1>Payment</h1>
                <div className={classes.subtitle}>
                    <Icon iconName='secure' />
                    <span>This is a secure 128-bit SSL encrypted payment</span>
                </div>
                <form 
                    className={classes.form}
                    onSubmit={this.submitHandler}>
                        {formElementsArray.map(element => {
                            return (
                                <Input 
                                    key={element.id}
                                    elementType={element.config.elementType}
                                    elementConfig={element.config.elementConfig}
                                    value={element.config.value}
                                    label={element.config.label}
                                    invalid={!element.config.valid}
                                    shouldValidate={element.config.validation}
                                    touched={element.config.touched}
                                    placeholder={element.config.elementConfig.placeholder}
                                    errorText={element.config.errorText}
                                    cardType={element.config.cardType}
                                    changed={(event) => this.inputChangedHandler(event, element.id)} />
                            )
                        })}
                    <button>Pay securately</button>
                </form>
            </div>
        );
    }
}
    
export default withRouter(PaymentInfo);
