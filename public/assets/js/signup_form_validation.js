/**
 * @file signup_form_validation.js
 * @description Signup form validation script.
 */

'use strict';

(function () {
    // Selector binds.
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    // Get the signup form and its form groups.
    const signup_form = $('#signup-form'),
        signup_form_email_group = signup_form.querySelector('.email-group'),
        signup_form_password_group =
            signup_form.querySelector('.password-group'),
        signup_form_password_repeat_group = signup_form.querySelector(
            '.password-repeat-group'
        ),
        signup_form_select_region_group =
            signup_form.querySelector('.region-group'),
        signup_form_gender_group = signup_form.querySelector('.gender-group'),
        signup_form_agreement_group =
            signup_form.querySelector('.agreement-group'),
        signup_form_submit = signup_form.querySelector('button[type="submit"]');

    // Set the validate callback for the email group.
    const validateEmailGroup = function (formGroup, eventType) {
        const input = formGroup.querySelector('input'),
            form_message = formGroup.querySelector('.form-message');

        if (eventType === 'input') {
            form_message.innerHTML = '';
            return true;
        }

        if (!input.value) {
            form_message.innerHTML = 'This field is required.';
            return false;
        } else if (!helper.validateEmailString(input.value)) {
            form_message.innerHTML = 'The entered email is invalid.';
            return false;
        }

        form_message.innerHTML = '';
        return true;
    };
    helper.setInputValidateCallback(
        signup_form_email_group,
        validateEmailGroup,
        false
    );

    // Set the validate callback for the password group.
    const validatePasswordGroup = function (formGroup) {
        const input = formGroup.querySelector('input'),
            password_repeat_input = signup_form.querySelector(
                '.password-repeat-group input'
            ),
            form_message = formGroup.querySelector('.form-message');
        if (!input.value) {
            form_message.innerHTML = 'This field is required.';
            return false;
        } else if (input.value.length < 6) {
            form_message.innerHTML = 'The entered password is too short.';
            return false;
        }

        if (password_repeat_input.value === input.value) {
            signup_form_password_repeat_group.querySelector(
                '.form-message'
            ).innerHTML = '';
        }

        form_message.innerHTML = '';
        return true;
    };
    helper.setInputValidateCallback(
        signup_form_password_group,
        validatePasswordGroup,
        false
    );

    // Set the validate callback for the password-repeat group.
    const validatePasswordRepeatGroup = function (formGroup) {
        const input = formGroup.querySelector('input'),
            source_input = signup_form.querySelector('.password-group input'),
            form_message = formGroup.querySelector('.form-message');
        if (!input.value) {
            form_message.innerHTML = 'This field is required.';
            return false;
        } else if (input.value !== source_input.value) {
            form_message.innerHTML = 'The entered password is not match.';
            return false;
        }

        form_message.innerHTML = '';
        return true;
    };
    helper.setInputValidateCallback(
        signup_form_password_repeat_group,
        validatePasswordRepeatGroup,
        false
    );

    // Set the validate callback for the select region group.
    const validateSelectRegionGroup = function (formGroup) {
        const select = formGroup.querySelector('select'),
            form_message = formGroup.querySelector('.form-message');

        if (select.value === 'none') {
            form_message.innerHTML = 'Please select your region.';
            return false;
        }

        form_message.innerHTML = '';
        return true;
    };
    helper.setSelectValidateCallback(
        signup_form_select_region_group,
        validateSelectRegionGroup
    );

    // Set the validate callback for the select gender group.
    const validateGenderGroup = function (formGroup) {
        const radios = formGroup.querySelectorAll('input[type="radio"]'),
            current_selected_radio = Array.from(radios).find(
                (element) => element.checked === true
            ),
            form_message = formGroup.querySelector('.form-message');
        if (!current_selected_radio) {
            form_message.innerHTML = 'Please select a gender.';
            return false;
        }

        form_message.innerHTML = '';
        return true;
    };
    helper.setRadioValidateCallback(
        signup_form_gender_group,
        validateGenderGroup
    );

    // Set the validate callback for the agreements group.
    const validateAgreementGroup = function (formGroup, eventType) {
        const agree_tos_checkbox = formGroup.querySelector('#agree-tos'),
            form_message = formGroup.querySelector('.form-message');

        if (eventType === 'click') {
            form_message.innerHTML = '';
            return true;
        }

        if (!agree_tos_checkbox.checked) {
            form_message.innerHTML = 'You must agree to the term of services.';
            return false;
        }
        form_message.innerHTML = '';
        return true;
    };
    helper.setCheckboxValidateCallback(
        signup_form_agreement_group,
        validateAgreementGroup
    );

    // Disable submit button default behavior
    signup_form_submit.onclick = function () {
        return false;
    };

    // Validate all form groups on submit.
    signup_form_submit.addEventListener('click', function (event) {
        let are_all_validation_success = false,
            error_message = '';
        while (!are_all_validation_success) {
            const email_validation_result = validateEmailGroup(
                    signup_form_email_group
                ),
                password_validation_result = validatePasswordGroup(
                    signup_form_password_group
                ),
                password_repeat_validation_result = validatePasswordRepeatGroup(
                    signup_form_password_repeat_group
                ),
                region_validation_result = validateSelectRegionGroup(
                    signup_form_select_region_group
                ),
                gender_validation_result = validateGenderGroup(
                    signup_form_gender_group
                ),
                agreement_validation_result = validateAgreementGroup(
                    signup_form_agreement_group
                ),
                is_validation_success =
                    email_validation_result &&
                    password_validation_result &&
                    password_repeat_validation_result &&
                    region_validation_result &&
                    gender_validation_result &&
                    agreement_validation_result;
            if (!is_validation_success) {
                error_message = 'Form validation failed.';
                break;
            }

            const results = {
                email: signup_form_email_group.querySelector('input').value,
                password:
                    signup_form_password_group.querySelector('input').value,
                region: signup_form_select_region_group.querySelector('select')
                    .value,
                gender: Array.from(
                    signup_form_gender_group.querySelectorAll(
                        'input[type="radio"]'
                    )
                ).find((element) => element.checked === true).value,
                isSubscribeNewsletter:
                    signup_form_agreement_group.querySelector(
                        '#subscribe-newsletter'
                    ).checked
                        ? true
                        : false,
            };
            console.log('Form validation success:', results);

            are_all_validation_success = true;
        }

        if (!are_all_validation_success) console.log(error_message);
    });
})();
