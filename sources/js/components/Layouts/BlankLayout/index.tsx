/**
 * @file index.tsx
 * @description Blank layout component.
 */

'use strict';
import { Outlet, ScrollRestoration, useLoaderData } from 'react-router-dom';

import Content from '../../Content';
import { ModalOverlay } from '../../Modal';
import { ToastOverlay } from '../../Toast';

import * as styles from '../Layout.module.css';

/**
 * Loader component.
 * @returns Returns the loader data.
 */
async function loader() {
    return {};
}

/**
 * Blank layout component.
 * @returns Returns the component.
 */
function BlankLayout() {
    return (
        <>
            <style>
                {`
                    :root {
                    --header-height: 0px !important;
                    --footer-height: 0px !important;
                    }
                `}
            </style>
            <div id="app">
                <Content>
                    <Outlet />
                </Content>
                <ModalOverlay />
                <ToastOverlay />
                <div className={styles['background']} />
            </div>
            <ScrollRestoration />
        </>
    );
}

export default BlankLayout;
export { loader };
