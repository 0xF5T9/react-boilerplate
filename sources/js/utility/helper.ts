/**
 * @file helper.ts
 * @description Helper module.
 * @note Populate a 'helper' object to the browser window object upon import.
 */

'use strict';

declare global {
    interface Window {
        myHelper: object;
    }
}

(() => {
    window.myHelper = {
        /**
         * Check if a string is a valid email.
         * @param email Email string.
         * @returns Returns true if the string is a valid email, otherwise returns false.
         */
        validateEmailString(email: string): boolean {
            return /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email);
        },

        /**
         * Parse a JSON string into object.
         * @param jsonString JSON string.
         * @returns Returns the parsed JSON object if the string-
         *          is a valid JSON string, otherwise returns false.
         */
        parseJSON(jsonString: string): object | boolean {
            try {
                return JSON.parse(jsonString);
            } catch (error) {
                return false;
            }
        },
    };
})();
