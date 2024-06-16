/**
 * @file index.js
 * @description Configurations.
 */

'use strict';
import routes, { appRouter } from './router.js';
import mysqlServer from './mysql-server.js';

const configs = {
    routes,
    appRouter,
    mysqlServer,
};

export default configs;
