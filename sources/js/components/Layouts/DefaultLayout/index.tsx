/**
 * @file index.tsx
 * @description Default layout component.
 */

'use strict';
import { FunctionComponent } from 'react';
import { Outlet, ScrollRestoration, useLoaderData } from 'react-router-dom';

import Header from '../../Header';
import Content from '../../Content';
import Footer from '../../Footer';
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
 * Default layout component.
 * @returns Returns the component.
 */
const DefaultLayout: FunctionComponent = function () {
    return (
        <>
            <div id="app">
                <Header />
                <Content>
                    <Outlet />
                </Content>
                <Footer />
                <ModalOverlay />
                <ToastOverlay />
                <div className={styles['background']} />
            </div>
            <ScrollRestoration />
        </>
    );
};

export default DefaultLayout;
export { loader };
