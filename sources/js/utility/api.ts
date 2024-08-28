/**
 * @file api.ts
 * @description Utility classes and functions used by API module.
 */

'use strict';

/**
 * Processed API call result.
 */
class APIResult {
    message: string;
    success: boolean;
    data: unknown;
    invalidToken: boolean;

    /**
     * Constructs a API result object.
     * @param message Response message.
     * @param success Specifies whether the action is successful.
     * @param data Response associated data.
     * @param status Response status code.
     */
    constructor(
        message: string,
        success: boolean,
        data: unknown,
        status: number | null
    ) {
        this.message = message;
        this.success = success;
        this.data = data;
        this.invalidToken = status === 401;
    }
}

export { APIResult };
