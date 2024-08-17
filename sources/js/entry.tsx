/**
 * @file entry.tsx
 * @description Application entry.
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './utility/helper';
import configs from './configs';
import apis from './apis';

window.React = React;
window.ReactDOM = ReactDOM;
const $ = document.querySelector.bind(document);

(() => {
    // Create the browser router.
    const browserRouter = createBrowserRouter(configs.appRouter);

    // Render the application.
    const render = createRoot($('#root'));
    render.render(<RouterProvider router={browserRouter} />);
})();

// Browser window key down events.
window.onkeydown = function (event) {
    if (!event.altKey) return;
    switch (event.code) {
        case 'Digit1': {
            (async () => {
                console.log(await apis.backend.getTestPosts(2));
            })();
            break;
        }
        default:
            break;
    }
};
