/**
 * @file index.js
 * @description Configurations.
 */

'use strict';
import routes, { appRouter } from './routes.js';
import jsdbEndpoints from './jsdb-endpoints.js';

const configs = {
    routes,
    appRouter,
    jsdbEndpoints,
};

export default configs;
