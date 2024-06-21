/**
 * @file mysql-server.js
 * @description MySQL server configurations.
 */

const config = {
    url: process.env.DATABASE_API,
    endpoints: {
        posts: '/test/posts',
    },
};

export default config;
