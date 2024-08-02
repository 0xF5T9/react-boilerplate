/**
 * @file index.ts
 * @description Configurations.
 */

'use strict';
import routes from './routes';
import appRouter from './react-router';
import mysqlServer from './mysql-server';

const configs = {
    routes,
    appRouter,
    mysqlServer,
};

export default configs;
