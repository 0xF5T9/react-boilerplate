/**
 * @file entry.js
 * @description Application entry.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import * as helper from './helper';
import apis from '../apis';
import configs from '../configs';

import { GlobalContextProvider } from './components/Context/Global';
import App, { loader as appLoader } from './components/App';
import App404 from './components/App404';
import * as Sections from './components/Sections/';
import { openModalWindow } from './components/ModalOverlay';
import { showToast, showCustomToast } from './components/ToastOverlay';

window.React = React;
window.ReactDOM = ReactDOM;
window.helper = helper;
const $ = document.querySelector.bind(document);

(() => {
    // Create the browser router.
    const BrowserRouter = createBrowserRouter([
        {
            path: configs.routes.home,
            element: (
                <GlobalContextProvider>
                    <App />
                </GlobalContextProvider>
            ),
            errorElement: (
                <GlobalContextProvider>
                    <App404 />
                </GlobalContextProvider>
            ),
            loader: appLoader,
            children: [
                {
                    errorElement: <div>Error Section Here</div>, // TODO: add error section.
                    children: [
                        {
                            index: true,
                            element: <Sections.IndexSection />,
                        },
                        {
                            path: configs.routes.samples.button,
                            element: <Sections.ButtonSampleSection />,
                        },
                        {
                            path: configs.routes.samples.input,
                            element: <Sections.InputSampleSection />,
                        },
                        {
                            path: configs.routes.samples.checkbox,
                            element: <Sections.CheckboxSampleSection />,
                        },
                        {
                            path: configs.routes.samples.radio,
                            element: <Sections.RadioSampleSection />,
                        },
                    ],
                },
            ],
        },
    ]);

    // Render the application.
    const render = createRoot($('#root'));
    render.render(<RouterProvider router={BrowserRouter} />);
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
            showToast('Info', 'New version available for download!', 'info');
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
                'success'
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
                'error'
            );
            break;
        }
        case 'Digit4': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showCustomToast(
                'Custom Toast',
                'This is a custom toast message..',
                {
                    titleColor: '#fcfcfa',
                    descColor: '#fcfcfa',
                    backgroundColor: '#544e56',
                    borderColor: '#544e56',
                    iconColor: '#fcfcfa',
                    closeIconColor: '#fcfcfa',
                },
                'fa-solid fa-gear'
            );
            break;
        }
        case 'Digit5': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showToast('Message', 'You have new message(s).', 'message');
            break;
        }
        case 'F1': {
            openModalWindow('signup-form-modal-window');
            break;
        }
        case 'F2': {
            // TODO: To be removed.
            apis.jsonServer.get(
                apis.jsonServer.getEndpoints().posts,
                (result) => console.log(result)
            );

            break;
        }
        default:
            break;
    }
};

console.log(
    `All operations completed successfully.`,
    `\nReact version: ${React.version}`,
    `\nReact DOM version: ${ReactDOM.version}`,
    `\n${process.env.WELCOME_MESSAGE}`
);
