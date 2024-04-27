/**
 * @file entry.js
 * @description Entry script file.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import * as functions from './function';
import * as helper from './helper';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { GlobalContextProvider } from './components/Context/Global';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';
import EnableTest, { TestContent } from './test'; // TODO:To be removed.
window.React = React;
window.ReactDOM = ReactDOM;
window.helper = helper;
const $ = document.querySelector.bind(document);

// Render the application.
(() => {
    function App() {
        useEffect(() => {
            functions.updateDebugOverlay();
        }, []);

        return (
            <GlobalContextProvider>
                <div id="app">
                    <Header />
                    {/*TODO: To be removed.*/}
                    {EnableTest ? <TestContent /> : <Content />}
                    <Footer />
                    <style>
                        {`  #custom-modal-window-1,
                        #custom-modal-window-2 {
                            --modal-window-width: 400px;
                            padding: 20px;
                            text-align: center;

                            & > *:not(:first-child) {
                                margin-top: 10px;
                            }
                        }

                        #signup-form-modal-window {
                            --modal-window-width: 310px;
                            padding: 20px;
                            overflow: auto !important;
                        }
                    `}
                    </style>
                    <div id="modals">
                        <div
                            id="custom-modal-window-1"
                            className="modal-window"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <h3>Modal Window 1</h3>
                            <p>Modal window contents.</p>
                        </div>
                        <div
                            id="custom-modal-window-2"
                            className="modal-window"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <h3>Modal Window 2</h3>
                            <p>Modal window contents.</p>
                        </div>
                        <div
                            id="signup-form-modal-window"
                            className="modal-window"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <SignupForm />
                        </div>
                    </div>
                    <div id="toasts"></div>
                    <div id="debug-overlay">
                        <h5></h5>
                    </div>
                </div>
            </GlobalContextProvider>
        );
    }

    const render = createRoot($('#root'));
    render.render(<App />);
})();

// Browser window resize events.
window.onresize = function (event) {
    functions.updateDebugOverlay();
};

// Browser window on key-down events.
window.onkeydown = function (event) {
    if (event.altKey) {
        switch (event.code) {
            case 'Digit1': {
                const audio = new Audio(
                    '/assets/static/sound/ClickSoundEffect.wav'
                );
                audio.play();
                functions.showToast(
                    'Info',
                    'New version available for download!',
                    'info'
                );
                break;
            }
            case 'Digit2': {
                const audio = new Audio(
                    '/assets/static/sound/ClickSoundEffect.wav'
                );
                audio.play();
                functions.showToast(
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
                functions.showToast(
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
                functions.showCustomToast(
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
                functions.showToast(
                    'Message',
                    'You have new message(s).',
                    'message'
                );
                break;
            }
            default:
                break;
        }

        return;
    }

    switch (event.code) {
        case 'Escape': {
            if (functions.isModalOverlayVisible()) {
                functions.closeModalOverlay(true);
            }
            break;
        }
        case 'F1': {
            const modal_window = $('#signup-form-modal-window');
            if (modal_window) {
                if (functions.isModalOverlayVisible())
                    functions.closeModalOverlay(true);
                else modal_window.classList.add('is-open');
            }
            break;
        }
        default:
            // console.log('Key pressed:', event.code);
            break;
    }
};

// Browser window on click events.
window.onclick = function (event) {
    // Close modal windows on background click.
    if (functions.isModalOverlayVisible()) functions.closeModalOverlay();

    // Close dropdown windows on background click.
    for (const dropdown of document.querySelectorAll(
        '.dropdown-window.is-open'
    )) {
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
