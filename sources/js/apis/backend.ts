/**
 * @file backend.ts
 * @description API that interacts with the backend server.
 */

'use strict';
import type { BackendResponse } from '../types/backend-api';
import type { SessionData } from '../types/authentication';
import axios from 'axios';

import backendConfig from '../../../configs/backend.json';
import { APIResult } from '../utility/api';
import staticTexts from '../render/static-texts';
const texts = staticTexts.api.backend;

const backend = axios.create({
    baseURL: backendConfig.apiUrl,
    timeout: backendConfig.timeout,
});

/**
 * Get test posts.
 * @param page Pagination.
 * @returns Returns the API response object.
 */
async function getTestPosts(page: number = 1): Promise<APIResult> {
    try {
        const result = await backend.get(`test/posts`, {
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
            return new APIResult(texts.unknownError, false, error, null);
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
        email = email.toLowerCase();

        if (!/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email))
            return new APIResult(texts.invalidEmail, false, null, 400);
        if (!/^[a-zA-Z0-9]+$/.test(username))
            return new APIResult(
                texts.invalidUsernameCharacters,
                false,
                null,
                400
            );
        if (username.length < 6 || username.length > 16)
            return new APIResult(texts.invalidUsernameLength, false, null, 400);
        if (password.length < 8 || password.length > 32)
            return new APIResult(texts.invalidPasswordLength, false, null, 400);

        const result = await backend.post(`register`, {
            email,
            username,
            password,
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
            return new APIResult(texts.unknownError, false, error, null);
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
        const result = await backend.post(`authorize`, {
            username,
            password,
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
            return new APIResult(texts.unknownError, false, error, null);
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
            return new APIResult(texts.invalidEmail, false, null, 400);

        const result = await backend.post(`recovery/forgot-password`, {
            email,
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
            return new APIResult(texts.unknownError, false, error, null);
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
            return new APIResult(
                texts.invalidResetPasswordRequest,
                false,
                null,
                400
            );

        if (newPassword.length < 8 || newPassword.length > 32)
            return new APIResult(texts.invalidPasswordLength, false, null, 400);

        const result = await backend.post(`recovery/reset-password`, {
            token,
            newPassword,
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
            return new APIResult(texts.unknownError, false, error, null);
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
        const result = await backend.get(`user/${username}`, {
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
            return new APIResult(texts.unknownError, false, error, null);
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
        const result = await backend.post(`authorize/verifyToken`, {
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
            return new APIResult(texts.unknownError, false, error, null);
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
