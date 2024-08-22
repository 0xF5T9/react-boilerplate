/**
 * @file backend.ts
 * @description Backend server configurations.
 */

const config = {
    url: process.env.DATABASE_API,
    endpoints: {
        posts: '/test/posts',
        register: '/register',
        authorize: '/authorize',
        recovery: '/recovery',
        verifySession: '/authorize/verifyToken',
        user: '/user',
    },
};

export default config;
