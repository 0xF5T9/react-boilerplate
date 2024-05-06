/**
 * @file index.js
 * @description The modal overlay component.
 */

'use strict';
import { useEffect, useRef } from 'react';
import SignupForm from '../SignupForm';
import './ModalOverlay.css';
const $ = document.querySelector.bind(document);

/**
 * Check if the modal overlay is visible.
 * The modal overlay becomes visible when a modal window is open.
 * @returns {boolean} Returns true if the modal overlay is visible, otherwise returns false.
 */
function isModalOverlayVisible() {
    const modal_overlay = $('#modal-overlay');
    if (modal_overlay) {
        return modal_overlay.querySelector('.modal-window.is-open')
            ? true
            : false;
    }
    return false;
}

/**
 * Close the modal overlay.
 * @param {Boolean} skipAnimation Specifies whether to skip the modal window close animation.
 */
function closeModalOverlay(skipAnimation = false) {
    if (!isModalOverlayVisible()) return;
    for (const window of $('#modal-overlay').querySelectorAll(
        '.modal-window.is-open'
    )) {
        if (!skipAnimation) {
            window.style.animation = `modal-window-fade-out 0.1s ease forwards`;
            setTimeout(function () {
                window.classList.remove('is-open');
                window.removeAttribute('style');
            }, 100);
        } else {
            window.classList.remove('is-open');
        }
    }
}

/**
 * Open a modal window.
 * @param {String} modalWindowId The modal window id.
 */
function openModalWindow(modalWindowId = '') {
    if (isModalOverlayVisible()) closeModalOverlay(true);
    const modal_overlay = $('#modal-overlay');
    if (modal_overlay) {
        const modal_window = modal_overlay.querySelector(`#${modalWindowId}`);
        if (!modal_window) {
            console.log(`'#${modalWindowId}' modal window not found.`);
            return;
        }
        modal_window.classList.add('is-open');
    }
}

/**
 * The modal overlay component.
 */
function ModalOverlay() {
    const modal_overlay = useRef();

    useEffect(() => {
        modal_overlay.current.addEventListener(
            'click',
            handleModalOverlayClick
        );
        window.addEventListener('keydown', handleModalOverlayKeypress);
    }, []);

    function handleModalOverlayClick(event) {
        if (isModalOverlayVisible() && event.target === modal_overlay.current)
            closeModalOverlay();
    }

    function handleModalOverlayKeypress(event) {
        if (!isModalOverlayVisible()) return;
        if (event.key === 'Escape') closeModalOverlay();
    }

    return (
        <>
            <div ref={modal_overlay} id="modal-overlay">
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
        </>
    );
}

export default ModalOverlay;
export { isModalOverlayVisible, closeModalOverlay, openModalWindow };
