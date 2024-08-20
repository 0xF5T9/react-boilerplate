/**
 * @file index.tsx
 * @description Default layout component.
 */

'use strict';
import { FunctionComponent, ReactNode } from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';

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
 * @param props Component properties.
 * @param props.children Section components.
 * @returns Returns the component.
 */
const DefaultLayout: FunctionComponent<{ children?: ReactNode }> = function ({
    children,
}) {
    return (
        <>
            <Header />
            <Content>{children}</Content>
            <Footer />
            <ModalOverlay />
            <ToastOverlay />
            <div className={styles['background']} />
            <ScrollRestoration />
        </>
    );
};

export default DefaultLayout;
export { loader };
