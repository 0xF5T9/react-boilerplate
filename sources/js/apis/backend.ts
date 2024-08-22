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
        const { message, data }: BackendResponse = result.data,
            { email, role, token } = data;

        if (result.status !== 200)
            throw new Error(
                `Expected a successful status code '200' but got a status code '${result.status}'.`
            );
        else if (!token)
            throw new Error(
                `Expected a valid authentication token but got '${token}' value.`
            );

        return new APIResult(
            message,
            true,
            { username, email, role, token },
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

export { getTestPosts, register, authorize, getUserInfo, verifySession };
