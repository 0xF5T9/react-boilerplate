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

import { showToast, ToastTypes } from './components/ToastOverlay';

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
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showToast(
                'Info',
                'New version available for download!',
                ToastTypes.Info
            );
            break;
        }
        case 'Digit2': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showToast(
                'Success',
                'Your request has been sent successfully.',
                ToastTypes.Success
            );
            break;
        }
        case 'Digit3': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showToast(
                'Error',
                'Unable to connect to the remote server.',
                ToastTypes.Error
            );
            break;
        }
        case 'Digit4': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showToast(
                'Message',
                'You have new message(s).',
                ToastTypes.Message
            );
            break;
        }
        case 'Digit8': {
            (async () => {
                console.log(await apis.mysqlServer.getTestPosts(2));
            })();
            break;
        }
        default:
            break;
    }
};
