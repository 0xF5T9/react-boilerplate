/**
 * @file index.js
 * @description Signup form component.
 * @todo TODO: To be removed.
 */

'use strict';

import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Select from '../Select';

/**
 * The form group component.
 * @param {Object} props Component properties.
 * @param {String} props.id The form group id (optional)
 * @param {*} props.children The form child components (optional)
 * @param {String} props.formMessage The form group message (optional)
 * @returns Returns the component.
 */
function FormGroup({ id, children, formMessage }) {
    return (
        <div
            id={id}
            className="form-group"
            style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '4px',
            }}
        >
            {children}
            <span
                className="form-message"
                style={{ color: 'var(--color-red)', textAlign: 'left' }}
            >
                {formMessage}
            </span>
        </div>
    );
}

/**
 * Sign up form component.
 * @returns Returns the component.
 */
function SignupForm() {
    const [state, setState] = useState({
        emailGroup: {
            isVisited: false,
            formMessage: '',
        },
        passwordGroup: {
            isVisited: false,
            formMessage: '',
        },
        passwordConfirmGroup: {
            isVisited: false,
            formMessage: '',
        },
        regionGroup: {
            isVisited: false,
            formMessage: '',
        },
        genderGroup: {
            isVisited: false,
            formMessage: '',
        },
        agreementGroup: {
            isVisited: false,
            formMessage: '',
        },
    });

    function emailInputValidate(event) {
        const { type: event_type, currentTarget: input } = event;

        let form_message = '';
        switch (event_type) {
            case 'blur': {
                if (!state.emailGroup.isVisited)
                    state.emailGroup.isVisited = true;
                if (!input.value) form_message = 'This field is required.';
                else if (!helper.validateEmailString(input.value))
                    form_message = 'The entered email is invalid.';
                break;
            }
        }
        state.emailGroup.formMessage = form_message;

        setState({
            ...state,
        });

        return !form_message ? input.value : false;
    }

    function passwordInputValidate(event) {
        const { type: event_type, currentTarget: input } = event,
            confirmation_password = input
                .closest('form')
                .querySelector('#password-confirm-input').value;

        let form_message = '';
        switch (event_type) {
            case 'blur': {
                if (!state.passwordGroup.isVisited)
                    state.passwordGroup.isVisited = true;

                if (!input.value) form_message = 'This field is required.';
                else if (input.value.length < 6)
                    form_message = 'The minimum password length is 6.';

                if (
                    state.passwordConfirmGroup.isVisited &&
                    input.value != confirmation_password
                )
                    state.passwordConfirmGroup.formMessage =
                        'The entered password is not match.';

                break;
            }
            case 'change': {
                if (!input.value) form_message = 'This field is required.';
                else if (input.value.length < 6)
                    form_message = 'The minimum password length is 6.';

                break;
            }
        }
        state.passwordGroup.formMessage = form_message;

        if (
            confirmation_password &&
            input.value == confirmation_password &&
            state.passwordConfirmGroup.formMessage
        ) {
            state.passwordConfirmGroup.formMessage = '';
        }

        setState({
            ...state,
        });

        return !form_message ? input.value : false;
    }

    function passwordConfirmInputValidate(event) {
        const { type: event_type, currentTarget: input } = event,
            original_password = input
                .closest('form')
                .querySelector('#password-input').value;

        let form_message = '';
        switch (event_type) {
            case 'blur': {
                if (!state.passwordConfirmGroup.isVisited)
                    state.passwordConfirmGroup.isVisited = true;
            }
            case 'change': {
                if (!input.value) form_message = 'This field is required.';
                else if (
                    original_password &&
                    input.value != original_password
                ) {
                    form_message = 'The entered password is not match.';
                }
                break;
            }
        }
        state.passwordConfirmGroup.formMessage = form_message;

        setState({
            ...state,
        });

        return !form_message ? true : false;
    }

    function regionInputValidate(event) {
        const { type: event_type, currentTarget: input } = event;

        let form_message = '';
        switch (event_type) {
            case 'blur': {
                if (!state.regionGroup.isVisited)
                    state.regionGroup.isVisited = true;
            }
            case 'change': {
                if (!input.selectedIndex)
                    form_message = 'Please select a region.';
                break;
            }
        }
        state.regionGroup.formMessage = form_message;

        setState({
            ...state,
        });

        return !form_message ? input.value : false;
    }

    function genderInputValidate(event) {
        const { type: event_type, currentTarget: input } = event,
            radios = Array.from(
                input
                    .closest('.form-group')
                    .querySelectorAll('input[type="radio"]')
            ),
            selected_radio = radios.find((element) => element.checked);

        let form_message = '';
        switch (event_type) {
            case 'blur': {
                if (!state.genderGroup.isVisited)
                    state.genderGroup.isVisited = true;
            }
            case 'click': {
                if (!selected_radio)
                    form_message = 'Please select your gender.';
                break;
            }
        }
        state.genderGroup.formMessage = form_message;

        setState({ ...state });

        return !form_message ? selected_radio.value : false;
    }

    function agreementInputValidate(event) {
        const { type: event_type, currentTarget: input } = event,
            optional_checkboxes = input
                .closest('.form-group')
                .querySelectorAll('input[type="checkbox"]:not(:required)'),
            required_checkboxes = input
                .closest('.form-group')
                .querySelectorAll('input[type="checkbox"]:required');

        let form_message = '';
        switch (event_type) {
            case 'blur': {
                if (!state.agreementGroup.isVisited)
                    state.agreementGroup.isVisited = true;
            }
            case 'click': {
                for (const checkbox of required_checkboxes) {
                    if (!checkbox.checked) {
                        form_message =
                            'You must agree to the term of services.';
                        break;
                    }
                }
                break;
            }
        }
        state.agreementGroup.formMessage = form_message;

        setState({ ...state });

        return !form_message
            ? Array.from(optional_checkboxes).map((element) => ({
                  id: element.id,
                  value: element.checked,
              }))
            : false;
    }

    return (
        <form
            id="signup-form"
            style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '4px',
            }}
        >
            <FormGroup
                id="signup-form-email-group"
                formMessage={state.emailGroup.formMessage}
            >
                <label
                    htmlFor="email-input"
                    style={{ textAlign: 'left', fontWeight: '600' }}
                >
                    Email
                </label>
                <Input
                    type="email"
                    icon={{
                        iconPosition: 'left',
                        iconClass: 'fa-solid fa-envelope',
                    }}
                    inputProps={{
                        id: 'email-input',
                        placeholder: 'Email',
                        onBlur: emailInputValidate,
                        onChange: emailInputValidate,
                    }}
                />
            </FormGroup>
            <FormGroup
                id="signup-form-password-group"
                formMessage={state.passwordGroup.formMessage}
            >
                <label
                    htmlFor="password-input"
                    style={{ textAlign: 'left', fontWeight: '600' }}
                >
                    Password
                </label>
                <Input
                    type="password"
                    icon={{
                        iconPosition: 'left',
                        iconClass: 'fa-solid fa-lock',
                    }}
                    inputProps={{
                        id: 'password-input',
                        placeholder: 'Password',
                        onBlur: passwordInputValidate,
                        onChange: passwordInputValidate,
                    }}
                />
            </FormGroup>
            <FormGroup
                id="signup-form-password-confirm-group"
                formMessage={state.passwordConfirmGroup.formMessage}
            >
                <label
                    htmlFor="password-input"
                    style={{ textAlign: 'left', fontWeight: '600' }}
                >
                    Confirm Password
                </label>
                <Input
                    type="password"
                    icon={{
                        iconPosition: 'left',
                        iconClass: 'fa-solid fa-lock',
                    }}
                    inputProps={{
                        id: 'password-confirm-input',
                        placeholder: 'Password',
                        onBlur: passwordConfirmInputValidate,
                        onChange: passwordConfirmInputValidate,
                    }}
                />
            </FormGroup>
            <FormGroup
                id="signup-form-region-group"
                formMessage={state.regionGroup.formMessage}
            >
                <label
                    htmlFor="region-input"
                    style={{ textAlign: 'left', fontWeight: '600' }}
                >
                    Select Region
                </label>
                <Select
                    id="region-input"
                    name="select-region"
                    selectProps={{
                        onBlur: regionInputValidate,
                        onChange: regionInputValidate,
                    }}
                >
                    <option value="none">-- Select --</option>
                    <option value="sea">South East Asia</option>
                    <option value="na">North America</option>
                </Select>
            </FormGroup>
            <FormGroup
                id="signup-form-gender-group"
                formMessage={state.genderGroup.formMessage}
            >
                <label
                    htmlFor="gender-male"
                    style={{ textAlign: 'left', fontWeight: '600' }}
                >
                    Select Gender
                </label>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        marginTop: '4px',
                    }}
                >
                    <Radio
                        labelText="Male"
                        id="gender-male"
                        name="gender-radio-group"
                        value="male"
                        altStyle="alt-1"
                        radioProps={{ onClick: genderInputValidate }}
                    />
                    <Radio
                        labelText="Female"
                        id="gender-female"
                        name="gender-radio-group"
                        value="female"
                        altStyle="alt-1"
                        radioProps={{ onClick: genderInputValidate }}
                    />
                </div>
            </FormGroup>
            <FormGroup
                id="signup-form-agreement-group"
                formMessage={state.agreementGroup.formMessage}
            >
                <label
                    htmlFor="tos-checkbox"
                    style={{ textAlign: 'left', fontWeight: '600' }}
                >
                    Agreements
                </label>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        rowGap: '8px',
                        marginTop: '4px',
                    }}
                >
                    <Checkbox
                        labelText="Subscribe to our newsletters."
                        id="newsletters-checkbox"
                        altStyle="alt-1"
                    />
                    <Checkbox
                        labelText="Agree to the Term of Services."
                        id="tos-checkbox"
                        altStyle="alt-1"
                        checkboxProps={{
                            onClick: agreementInputValidate,
                            required: true,
                        }}
                    />
                </div>
            </FormGroup>

            <Button
                buttonProps={{
                    onClick: (event) => {
                        event.preventDefault();
                        const form = event.currentTarget.closest('form');

                        const email_value = emailInputValidate({
                                type: 'blur',
                                currentTarget:
                                    form.querySelector('#email-input'),
                            }),
                            password_value = passwordInputValidate({
                                type: 'change',
                                currentTarget:
                                    form.querySelector('#password-input'),
                            }),
                            password_confirm_value =
                                passwordConfirmInputValidate({
                                    type: 'change',
                                    currentTarget: form.querySelector(
                                        '#password-confirm-input'
                                    ),
                                }),
                            region_value = regionInputValidate({
                                type: 'change',
                                currentTarget:
                                    form.querySelector('#region-input'),
                            }),
                            gender_value = genderInputValidate({
                                type: 'click',
                                currentTarget:
                                    form.querySelector('#gender-male'),
                            }),
                            agreement_value = agreementInputValidate({
                                type: 'click',
                                currentTarget:
                                    form.querySelector('#tos-checkbox'),
                            }),
                            is_success =
                                email_value &&
                                password_value &&
                                password_confirm_value &&
                                region_value &&
                                gender_value &&
                                agreement_value;

                        console.log(
                            is_success
                                ? {
                                      email: email_value,
                                      password: password_value,
                                      region: region_value,
                                      gender: gender_value,
                                      subscribeNews: agreement_value.find(
                                          (element) =>
                                              element.id ==
                                              'newsletters-checkbox'
                                      ).value,
                                  }
                                : 'Validation failed.'
                        );
                    },
                    style: { marginTop: '4px' },
                }}
            >
                Sign Up
            </Button>
        </form>
    );
}

export default SignupForm;
