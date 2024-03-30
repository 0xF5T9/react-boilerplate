/**
 * @file helper.js
 * @description Helper function definitions.
 */

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
 * @param {Boolean} onChange Specifies whether to trigger the validate function on input content update.
 * @param {Boolean} onFocusLost Specifies whether to trigger the validate function on input focus lost.
 */
export function setInputValidateCallback(
    formGroup,
    validateCallback,
    onChange = true,
    onFocusLost = true
) {
    const input = formGroup.querySelector('input');

    // Verify group on input content update
    if (onChange) {
        input.addEventListener('change', function (event) {
            if (!event.currentTarget.getAttribute('visited')) return;
            validateCallback(formGroup);
        });
    }

    // Verify group on first focus lost.
    if (onFocusLost) {
        input.addEventListener('focusout', function (event) {
            if (!event.currentTarget.getAttribute('visited')) {
                validateCallback(formGroup);
                event.currentTarget.setAttribute('visited', 'true');
            }
        });
    }
}
