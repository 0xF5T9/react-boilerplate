/**
 * @file helper.js
 * @description Helper function definitions.
 */

'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Output a debug message to the console.
 * @param {String} message The message string.
 * @param {Boolean} isErrorMessage Specifies whether the message is an error message. (optional - default:false)
 */
export function message(message, isErrorMessage = false) {
    if (isErrorMessage) throw '[' + new Date().getTime() + '] ' + message;
    else console.log('[' + new Date().getTime() + '] ' + message);
}

/**
 * Check if a string is a valid email.
 * @param {String} email The email string.
 * @returns {Boolean} Returns true if the string is a valid email, otherwise returns false.
 */
export function validateEmailString(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        return true;
    return false;
}

/**
 * Set input validate callback.
 * @param {Element} formGroup The form group element that contains the input.
 *                            This element will be passed to the callback function.
 * @param {Function} validateCallback The callback function that do the validation. (Returns true or false)
 *                                    The following arguments will be passed to the callback function,
 *                                    respectively: The form group element and the event type (string).
 * @param {Boolean} onChange Specifies whether to trigger the validate function on input content update. (optional - default:true)
 * @param {Boolean} onFocusLost Specifies whether to trigger the validate function on input focus lost. (optional - default:true)
 * @param {Boolean} onInput Specifies whether to trigger the validate function on input. (optional - default:true)
 */
export function setInputValidateCallback(
    formGroup,
    validateCallback,
    onChange = true,
    onFocusLost = true,
    onInput = true
) {
    const input = formGroup.querySelector('input');

    // Verify group on input content update
    if (onChange) {
        input.addEventListener('change', function (event) {
            validateCallback(formGroup, 'change');
        });
    }

    // Verify group on focus lost.
    if (onFocusLost) {
        input.addEventListener('focusout', function (event) {
            validateCallback(formGroup, 'focusout');
        });
    }

    // Verify group on input.
    if (onInput) {
        input.addEventListener('input', function (event) {
            validateCallback(formGroup, 'input');
        });
    }
}

/**
 * Set radio input validate callback.
 * @param {Element} formGroup The form group element that contains the radio inputs.
 *                            This element will be passed to the callback function.
 * @param {Function} validateCallback The callback function that do the validation. (Returns true or false)
 *                                    The following arguments will be passed to the callback function,
 *                                    respectively: The form group element and the event type (string).
 * @note The validate callback function will be called on the click event.
 */
export function setRadioValidateCallback(formGroup, validateCallback) {
    const radios = formGroup.querySelectorAll('input[type="radio"]');

    // Verify radio inputs on click.
    for (const radio of radios) {
        radio.addEventListener('click', function (event) {
            validateCallback(formGroup, 'click');
        });
    }
}

/**
 * Set checkbox input validate callback.
 * @param {Element} formGroup The form group element that contains the checkbox inputs.
 *                            This element will be passed to the callback function.
 * @param {Function} validateCallback The callback function that do the validation. (Returns true or false)
 *                                    The following arguments will be passed to the callback function,
 *                                    respectively: The form group element and the event type (string).
 * @note The validate callback function will be called on the click event.
 */
export function setCheckboxValidateCallback(formGroup, validateCallback) {
    const checkboxes = formGroup.querySelectorAll('input[type="checkbox"]');

    // Verify checkbox inputs on click.
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('click', function (event) {
            validateCallback(formGroup, 'click');
        });
    }
}

/**
 * Set select validate callback.
 * @param {Element} formGroup The form group element that contains the select element.
 *                            This element will be passed to the callback function.
 * @param {Function} validateCallback The callback function that do the validation. (Returns true or false)
 *                                    The following arguments will be passed to the callback function,
 *                                    respectively: The form group element and the event type (string).
 * @param {Boolean} onChange Specifies whether to trigger the validate function on select content update. (optional - default:true)
 * @param {Boolean} onFocusLost Specifies whether to trigger the validate function on select focus lost. (optional - default:true)
 */
export function setSelectValidateCallback(
    formGroup,
    validateCallback,
    onChange = true,
    onFocusLost = true
) {
    const select = formGroup.querySelector('select');

    // Verify group on select content update
    if (onChange) {
        select.addEventListener('change', function (event) {
            validateCallback(formGroup, 'change');
        });
    }

    // Verify group on focus lost.
    if (onFocusLost) {
        select.addEventListener('focusout', function (event) {
            validateCallback(formGroup, 'focusout');
        });
    }
}
