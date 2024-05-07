/**
 * @file entry.js
 * @description Application entry.
 * @todo TODO: Break down Header to smaller components.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import * as functions from './function';
import * as helper from './helper';

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
const $$ = document.querySelectorAll.bind(document);

(() => {
    // Create the browser router.
    const BrowserRouter = createBrowserRouter([
        {
            path: '/',
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
                            path: 'samples/button',
                            element: <Sections.ButtonSampleSection />,
                        },
                        {
                            path: 'samples/input',
                            element: <Sections.InputSampleSection />,
                        },
                        {
                            path: 'samples/checkbox',
                            element: <Sections.CheckboxSampleSection />,
                        },
                        {
                            path: 'samples/radio',
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
        default:
            break;
    }
};

// Browser window click events.
window.onclick = function (event) {
    // Close dropdown windows on background click.
    for (const dropdown of $$('.dropdown-window.is-open')) {
        if (
            !dropdown.contains(event.target) &&
            !dropdown.parentNode.contains(event.target)
        ) {
            dropdown.classList.remove('is-open');
            functions.validateAllDropdownWindows();
        }
    }
};

console.log(
    `All operations completed successfully.\nReact version: ${React.version}\nReact DOM version: ${ReactDOM.version}`
);
