import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Input from '../../UI/Input/Input';
import { updateObject, checkErrors } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';
import classes from './ShippingInfo.module.scss';

class ShippingInfo extends Component {
    state = {
        shippingForm: {
            fullName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Full Name'
                },
                label: 'Recipient',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            daytimePhone: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Daytime Phone'
                },
                label: '',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                label: 'Address',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                label: '',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street Address'
                },
                label: '',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            apt: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Apt, Suite, Bldg, Gate Code. (optional)'
                },
                label: '',
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            zip: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP'
                },
                label: '',
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false,
                errorText: ''
            }
        },
        formIsValid: false
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.shippingForm[inputIdentifier], {
            value: event.target.value,
            valid: !checkErrors(event.target.value, this.state.shippingForm[inputIdentifier].validation),
            touched: true,
            errorText: checkErrors(event.target.value, this.state.shippingForm[inputIdentifier].validation)
        });
        const updatedShippingForm = updateObject(this.state.shippingForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedShippingForm) {
            formIsValid = updatedShippingForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({shippingForm: updatedShippingForm, formIsValid});
    }

    submitHandler = (event) => {
        event.preventDefault();

        if (!this.state.formIsValid) {
            for (let inputIdentifier in this.state.shippingForm) {
                this.setState(prevState => {
                    let prevElement = prevState.shippingForm[inputIdentifier];
                    let errors = checkErrors(prevElement.value, prevElement.validation);
                    return {
                        shippingForm: {
                            ...prevState.shippingForm,
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
        for (let inputIdentifier in this.state.shippingForm) {
            formData[inputIdentifier] = this.state.shippingForm[inputIdentifier].value;
        }

        this.props.onAddShippingInfo(formData);
        // TODO: move to actions
        this.props.history.push('/billing');
    }

    render() { 
        const formElementsArray = [];
        for (let key in this.state.shippingForm) {
            formElementsArray.push({
                id: key,
                config: this.state.shippingForm[key]
            })
        }

        return (
            <>
                <h1>Shipping Info</h1>
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
                                    changed={(event) => this.inputChangedHandler(event, element.id)} />
                            )
                        })}
                    <button>Continue</button>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddShippingInfo: (shippingInfo) => dispatch(actions.addShippingInfo(shippingInfo))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(ShippingInfo));
