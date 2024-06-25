/**
 * @file mysql-server.js
 * @description API that interacts with the mysql-server database.
 */

'use strict';
import axios from 'axios';

import config from '../configs/mysql-server';
import { APIResponse as Response } from '../utility/api';
const { url, endpoints } = config;

/**
 * Get test posts.
 * @param {Number} page Pagination.
 * @returns {Promise<APIResponse>} Returns the API response object.
 */
async function getTestPosts(page = 1) {
    try {
        const result = await axios.get(`${url}${endpoints.posts}`, {
            params: {
                page,
            },
        });
        const { message, data } = result.data;

        return new Response(message, true, data);
    } catch (error) {
        console.error(error);
        return new Response('Unexpected server error occurred.');
    }
}

/**
 * Send a user authorization request and receive the access token.
 * @param {String} username Username.
 * @param {String} password Password.
 * @returns {Promise<APIResponse>} Returns the API response object.
 */
async function authorize(username, password) {
    try {
        const result = await axios.post(`${url}${endpoints.authorize}`, {
            username,
            password,
        });
        const { message, token } = result.data;
        if (result.status !== 200)
            throw new Error(
                `Expected a successful status code '200' but got a status code '${result.status}'.`
            );
        else if (!token)
            throw new Error(
                `Expected a valid authentication token but got '${token}' value.`
            );

        return new Response(message, true, { username, token });
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return new Response('Invalid username or password.');
        } else {
            console.error(error);
            return new Response('Unexpected server error occurred.');
        }
    }
}

export { getTestPosts, authorize };
