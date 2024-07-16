/**
 * @file helper.js
 * @description Helper module.
 * @note Populate a 'helper' object to the browser window object upon import.
 */

'use strict';

(() => {
    window.helper = {
        /**
         * Check if a string is a valid email.
         * @param {String} email The email string.
         * @returns {Boolean} Returns true if the string is a valid email, otherwise returns false.
         */
        validateEmailString(email) {
            if (
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
                    email
                )
            )
                return true;
            return false;
        },
        /**
         * Parse a JSON string into object.
         * @param {String} string JSON string.
         * @returns {Object | Boolean} Returns the parsed JSON object if the string
         *                             is a valid JSON string, otherwise returns false.
         */
        parseJSON(string) {
            try {
                const result = JSON.parse(string);
                return result;
            } catch (error) {
                return false;
            }
        },
    };
})();
