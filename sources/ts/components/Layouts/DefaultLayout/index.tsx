/**
 * @file index.tsx
 * @description Default layout.
 */

'use strict';
import { FunctionComponent, ReactNode } from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';

import Header from '~/ts/components/Header';
import Content from '~/ts/components/Content';
import Footer from '~/ts/components/Footer';
import { ModalOverlay } from '~/ts/components/Modal';
import { ToastOverlay } from '~/ts/components/Toast';
import * as styles from '../Layout.module.css';

/**
 * Loader.
 * @returns Returns the loader data.
 */
async function loader() {
    return {};
}

/**
 * Default layout.
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
