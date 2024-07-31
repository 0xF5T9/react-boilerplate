/**
 * @file api.ts
 * @description Utility classes and functions used by API module.
 */

'use strict';

/**
 * API response object.
 */
class APIResponse {
    /**
     * Constructs a API response object.
     * @param message Response message.
     * @param success Specifies whether the action is successful.
     * @param data Response associated data.
     * @param invalidToken Specifies whether the action is rejected due to an invalid token.
     */
    constructor(
        public message: string = '',
        public success: boolean = false,
        public data: object | null = null,
        public invalidToken: boolean = false
    ) {}
}

export { APIResponse };
