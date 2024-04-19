/**
 * @file helper.js
 * @description Helper function definitions.
 */

'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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
