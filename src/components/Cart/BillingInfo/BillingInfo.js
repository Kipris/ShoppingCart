import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Input from '../../UI/Input/Input';
import { updateObject, checkErrors } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';
import classes from './BillingInfo.module.scss';

class BillingInfo extends Component {
    state = {
        billingForm: {
            fullName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Full Name'
                },
                label: 'Billing Contact',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorText: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
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
                label: 'Billing Address',
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
        const updatedFormElement = updateObject(this.state.billingForm[inputIdentifier], {
            value: event.target.value,
            valid: !checkErrors(event.target.value, this.state.billingForm[inputIdentifier].validation),
            touched: true,
            errorText: checkErrors(event.target.value, this.state.billingForm[inputIdentifier].validation)
        });
        const updatedBillingForm = updateObject(this.state.billingForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedBillingForm) {
            formIsValid = updatedBillingForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({billingForm: updatedBillingForm, formIsValid});
    }

    fillBillingFormHandler = () => {
        let newBillingInfo = {...this.state.billingForm};
        for (let prop in this.props.shippingInfo) {
            if (newBillingInfo[prop]) {
                newBillingInfo[prop].value = this.props.shippingInfo[prop]
            }
        }
        this.setState({billingForm: newBillingInfo})
    }

    submitHandler = (event) => {
        event.preventDefault();

        if (!this.state.formIsValid) {
            for (let inputIdentifier in this.state.billingForm) {
                this.setState(prevState => {
                    let prevElement = prevState.billingForm[inputIdentifier];
                    let errors = checkErrors(prevElement.value, prevElement.validation);
                    return {
                        billingForm: {
                            ...prevState.billingForm,
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
        for (let inputIdentifier in this.state.billingForm) {
            formData[inputIdentifier] = this.state.billingForm[inputIdentifier].value;
        }

        this.props.onAddBillingInfo(formData);
        // TODO: move to actions
        this.props.history.push('/payment');
    }

    render() { 
        const formElementsArray = [];
        for (let key in this.state.billingForm) {
            formElementsArray.push({
                id: key,
                config: this.state.billingForm[key]
            })
        }

        return (
            <div className={classes.wrap}>
                <div className={classes.title__group}>
                    <h1>Billing Info</h1>
                    <span onClick={this.fillBillingFormHandler}>Same as shipping</span>
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
                                    changed={(event) => this.inputChangedHandler(event, element.id)} />
                            )
                        })}
                    <button>Continue</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        shippingInfo: state.orderInfo.order.shippingInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddBillingInfo: (billingInfo) => dispatch(actions.addBillingInfo(billingInfo))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BillingInfo);