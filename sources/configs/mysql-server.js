/**
 * @file mysql-server.js
 * @description MySQL server configurations.
 */

const config = {
    url: process.env.BACKEND_API,
    endpoints: {
        posts: '/test/posts',
    },
};

export default config;
