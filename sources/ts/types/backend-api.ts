/**
 * @file backend-api.ts
 * @description Backend api related types.
 */

/**
 * Standardized backend server API response object type.
 */
export type BackendResponse = {
    message: string;
    data: unknown;
};
