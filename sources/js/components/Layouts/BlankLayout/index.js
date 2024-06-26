/**
 * @file index.js
 * @description Blank layout component.
 */

'use strict';
import { Outlet, ScrollRestoration, useLoaderData } from 'react-router-dom';

import Content from '../../Content';
import ModalOverlay from '../../ModalOverlay';
import ToastOverlay from '../../ToastOverlay';
import DebugOverlay from '../../DebugOverlay';

/**
 * Loader component.
 * @returns {*} Returns the loader data.
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
                <DebugOverlay />
            </div>
            <ScrollRestoration />
        </>
    );
}

export default BlankLayout;
export { loader };
