/**
 * @file mysql-server.js
 * @description API that interacts with the mysql-server database.
 */

'use strict';
import axios from 'axios';

import config from '../configs/mysql-server';
const { url, endpoints } = config;

async function getTestPosts(page = 1) {
    try {
        const result = await axios.get(`${url}${endpoints.posts}`, {
            params: {
                page,
            },
        });
        const { posts, meta } = result.data.data;
        return { posts, meta };
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { getTestPosts };
