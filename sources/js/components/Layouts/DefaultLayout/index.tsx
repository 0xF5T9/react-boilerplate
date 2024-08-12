/**
 * @file index.tsx
 * @description Default layout component.
 */

'use strict';
import { Outlet, ScrollRestoration, useLoaderData } from 'react-router-dom';

import Header from '../../Header';
import Content from '../../Content';
import Footer from '../../Footer';
import { ToastOverlay } from '../../Toast';
import DebugOverlay from '../../DebugOverlay';

import * as styles from '../Layout.module.css';

/**
 * Loader component.
 * @returns Returns the loader data.
 */
async function loader() {
    return {};
}

/**
 * Default layout component.
 * @returns Returns the component.
 */
function DefaultLayout() {
    return (
        <>
            <div id="app">
                <Header />
                <Content>
                    <Outlet />
                </Content>
                <Footer />
                <ToastOverlay />
                {process.env.NODE_ENV === 'development' && <DebugOverlay />}
                <div className={styles['background']} />
            </div>
            <ScrollRestoration />
        </>
    );
}

export default DefaultLayout;
export { loader };
