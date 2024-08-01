/**
 * @file mysql-server.ts
 * @description API that interacts with the mysql-server database.
 */

'use strict';
import type { SessionData } from '../types/authentication';
import axios from 'axios';

import config from '../configs/mysql-server';
import { APIResponse } from '../utility/api';
const { url, endpoints } = config;

/**
 * Get test posts.
 * @param page Pagination.
 * @returns Returns the API response object.
 */
async function getTestPosts(page: number = 1): Promise<APIResponse> {
    try {
        const result = await axios.get(`${url}${endpoints.posts}`, {
            params: {
                page,
            },
        });
        const { message, data } = result.data;

        return new APIResponse(message, true, data);
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new APIResponse(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new APIResponse('Unexpected server error occurred.');
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
): Promise<APIResponse> {
    try {
        const result = await axios.post(`${url}${endpoints.register}`, {
            email,
            username,
            password,
        });
        const { message } = result.data;
        if (result.status !== 201)
            throw new Error(
                `Expected a successful status code '201' but got a status code '${result.status}'.`
            );

        return new APIResponse(message, true);
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new APIResponse(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new APIResponse('Unexpected server error occurred.');
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
): Promise<APIResponse> {
    try {
        const result = await axios.post(`${url}${endpoints.authorize}`, {
            username,
            password,
        });
        const { message, email, role, token } = result.data;
        if (result.status !== 200)
            throw new Error(
                `Expected a successful status code '200' but got a status code '${result.status}'.`
            );
        else if (!token)
            throw new Error(
                `Expected a valid authentication token but got '${token}' value.`
            );

        return new APIResponse(message, true, { username, email, role, token });
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new APIResponse(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new APIResponse('Unexpected server error occurred.');
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
): Promise<APIResponse> {
    try {
        const result = await axios.get(`${url}${endpoints.user}/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const { message, data } = result.data;

        return new APIResponse(message, true, data);
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new APIResponse(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new APIResponse('Unexpected server error occurred.');
        }
    }
}

/**
 * Verify user authentication session.
 * @param sessionData Session data.
 * @returns Returns the API response object.
 */
async function verifySession(sessionData: SessionData): Promise<APIResponse> {
    try {
        const result = await axios.post(
            `${url}${endpoints.verifySession}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${sessionData.token}`,
                },
            }
        );
        const { message, data } = result.data;

        return new APIResponse(message, true, data);
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new APIResponse(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new APIResponse('Unexpected server error occurred.');
        }
    }
}

export { getTestPosts, register, authorize, getUserInfo, verifySession };
