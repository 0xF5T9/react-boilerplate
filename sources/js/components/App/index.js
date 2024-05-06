/**
 * @file index.js
 * @description App component.
 */

'use strict';
import { Outlet, ScrollRestoration, useLoaderData } from 'react-router-dom';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import ModalOverlay from '../ModalOverlay';
import ToastOverlay from '../ToastOverlay';
import DebugOverlay from '../DebugOverlay';

async function loader() {
    // Fetch data ...
    return {}; // Return data ...
}

/**
 * App component.
 */
function App() {
    // Use the data to render ...
    // const data = useLoaderData();

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
                <DebugOverlay />
            </div>
            <ScrollRestoration />
        </>
    );
}

export default App;
export { loader };
