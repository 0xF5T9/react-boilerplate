/**
 * @file backend.ts
 * @description API that interacts with the backend server.
 */

'use strict';
import type { BackendResponse } from '../types/backend-api';
import type { SessionData } from '../types/authentication';
import axios from 'axios';

import config from '../configs/backend';
import { APIResult } from '../utility/api';
const { url, endpoints } = config;

/**
 * Get test posts.
 * @param page Pagination.
 * @returns Returns the API response object.
 */
async function getTestPosts(page: number = 1): Promise<APIResult> {
    try {
        const result = await axios.get(`${url}${endpoints.posts}`, {
            params: {
                page,
            },
        });
        const { message, data }: BackendResponse = result.data;

        return new APIResult(message, true, data, result.status);
    } catch (error) {
        if (error.response) {
            return new APIResult(
                error.response.data.message,
                false,
                error,
                error.response.status
            );
        } else {
            console.error(error);
            return new APIResult(
                'Unexpected server error occurred.',
                false,
                error,
                null
            );
        }
    }
}

/**
 * Register a user.
 * @param email Email.
 * @param username Username.
 * @param password Password.
 * @returns Returns the API response object.
 */
async function register(
    email: string,
    username: string,
    password: string
): Promise<APIResult> {
    try {
        const result = await axios.post(`${url}${endpoints.register}`, {
            email,
            username,
            password,
        });
        const { message, data }: BackendResponse = result.data;
        if (result.status !== 201)
            throw new Error(
                `Expected a successful status code '201' but got a status code '${result.status}'.`
            );

        return new APIResult(message, true, data, result.status);
    } catch (error) {
        if (error.response) {
            return new APIResult(
                error.response.data.message,
                false,
                error,
                error.response.status
            );
        } else {
            console.error(error);
            return new APIResult(
                'Unexpected server error occurred.',
                false,
                error,
                null
            );
        }
    }
}

/**
 * Send a user authorization request and receive the access token.
 * @param username Username.
 * @param password Password.
 * @returns Returns the API response object.
 */
async function authorize(
    username: string,
    password: string
): Promise<APIResult> {
    try {
        const result = await axios.post(`${url}${endpoints.authorize}`, {
            username,
            password,
        });
        const { message, data }: BackendResponse = result.data;

        if (result.status !== 200)
            throw new Error(
                `Expected a successful status code '200' but got a status code '${result.status}'.`
            );
        else if (!data.token)
            throw new Error(
                `Expected a valid authentication token but got '${data.token}' value.`
            );

        return new APIResult(
            message,
            true,
            {
                username: data.username,
                email: data.email,
                role: data.role,
                token: data.token,
            },
            result.status
        );
    } catch (error) {
        if (error.response) {
            return new APIResult(
                error.response.data.message,
                false,
                error,
                error.response.status
            );
        } else {
            console.error(error);
            return new APIResult(
                'Unexpected server error occurred.',
                false,
                error,
                null
            );
        }
    }
}

/**
 * Send a forgot password request.
 * @param email Email address.
 * @returns Returns the API response object.
 */
async function forgotPassword(email: string): Promise<APIResult> {
    try {
        email = email.toLowerCase();

        if (!/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email))
            return new APIResult('Invalid email address.', false, null, 400);

        const result = await axios.post(
            `${url}${endpoints.recovery}/forgot-password`,
            {
                email,
            }
        );
        const { message, data }: BackendResponse = result.data;

        return new APIResult(message, true, data, result.status);
    } catch (error) {
        if (error.response) {
            return new APIResult(
                error.response.data.message,
                false,
                error,
                error.response.status
            );
        } else {
            console.error(error);
            return new APIResult(
                'Unexpected server error occurred.',
                false,
                error,
                null
            );
        }
    }
}

/**
 * Send a forgot password request.
 * @param token Reset password token.
 * @param newPassword New password.
 * @returns Returns the API response object.
 */
async function resetPassword(
    token: string,
    newPassword: string
): Promise<APIResult> {
    try {
        if (!token || !newPassword)
            return new APIResult('Invalid request.', false, null, 400);

        const result = await axios.post(
            `${url}${endpoints.recovery}/reset-password`,
            {
                token,
                newPassword,
            }
        );
        const { message, data }: BackendResponse = result.data;

        return new APIResult(message, true, data, result.status);
    } catch (error) {
        if (error.response) {
            return new APIResult(
                error.response.data.message,
                false,
                error,
                error.response.status
            );
        } else {
            console.error(error);
            return new APIResult(
                'Unexpected server error occurred.',
                false,
                error,
                null
            );
        }
    }
}

/**
 * Get user information.
 * @param username Username.
 * @param token Access token.
 * @returns Returns the API response object.
 */
async function getUserInfo(
    username: string,
    token: string
): Promise<APIResult> {
    try {
        const result = await axios.get(`${url}${endpoints.user}/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const { message, data }: BackendResponse = result.data;

        return new APIResult(message, true, data, result.status);
    } catch (error) {
        if (error.response) {
            return new APIResult(
                error.response.data.message,
                false,
                error,
                error.response.status
            );
        } else {
            console.error(error);
            return new APIResult(
                'Unexpected server error occurred.',
                false,
                error,
                null
            );
        }
    }
}

/**
 * Verify user authentication session.
 * @param sessionData Session data.
 * @returns Returns the API response object.
 */
async function verifySession(sessionData: SessionData): Promise<APIResult> {
    try {
        const result = await axios.post(`${url}${endpoints.verifySession}`, {
            token: sessionData.token,
        });
        const { message, data }: BackendResponse = result.data;

        return new APIResult(message, true, data, result.status);
    } catch (error) {
        if (error.response) {
            return new APIResult(
                error.response.data.message,
                false,
                error,
                error.response.status
            );
        } else {
            console.error(error);
            return new APIResult(
                'Unexpected server error occurred.',
                false,
                error,
                null
            );
        }
    }
}

export {
    getTestPosts,
    register,
    authorize,
    forgotPassword,
    resetPassword,
    getUserInfo,
    verifySession,
};
