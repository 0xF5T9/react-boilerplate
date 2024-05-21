/**
 * @file index.js
 * @description API that interacts with the json-server database.
 */

'use strict';
import configs from '../configs';

/**
 * Get the json-server database endpoints.
 * @returns {Object} Returns the database endpoints.
 */
function getEndpoints() {
    return configs.jsdbEndpoints;
}

/**
 * Get data from the json-server database.
 * @param {String} endpoint Database endpoint.
 * @param {Function} finallyCallback Finally callback function.
 *                                   The fetched data will be passed to the callback as the first argument.
 *                                   e.g: "(data) => console.log(data)"
 *                                   (optional)
 * @returns {Object} Returns the fetched data.
 */
async function get(endpoint, finallyCallback) {
    let result;
    try {
        if (!Object.values(configs.jsdbEndpoints).includes(endpoint)) {
            throw { errorMessage: 'Unexpected endpoint.' };
        }

        const response = await fetch(`http://localhost:3000/${endpoint}`);
        if (!response.ok) {
            throw { errorMessage: 'Endpoint not found.', response };
        }

        const json = await response.json();
        result = json;

        return result;
    } catch (error) {
        console.error(error);
        throw error.errorMessage;
    } finally {
        if (typeof finallyCallback === 'function' && result)
            finallyCallback(result);
    }
}

export { getEndpoints, get };
