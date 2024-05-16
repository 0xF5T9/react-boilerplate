/**
 * @file index.js
 * @description Modal overlay component.
 * @todo TODO: Rework ...
 */

'use strict';
import { useEffect, useRef } from 'react';
import SignupForm from '../SignupForm';
import './ModalOverlay.css';
const $ = document.querySelector.bind(document);

/**
 * Check if the modal overlay is visible.
 * The modal overlay becomes visible when a modal window is open.
 * @returns {Boolean} Returns true if the modal overlay is visible, otherwise returns false.
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
 */
function closeModalOverlay() {
    if (!isModalOverlayVisible()) return;
    const modal_overlay = $('#modal-overlay');
    for (const modal_window of modal_overlay.querySelectorAll(
        '.modal-window.is-open'
    )) {
        modal_overlay.classList.remove('is-open');
        modal_overlay.classList.add('is-close');
        modal_window.classList.remove('is-open');
        modal_window.classList.add('is-close');
    }
}

/**
 * Open a modal window.
 * @param {String} modalWindowId The modal window id.
 */
function openModalWindow(modalWindowId = '') {
    if (isModalOverlayVisible()) closeModalOverlay();
    const modal_overlay = $('#modal-overlay');
    if (modal_overlay) {
        if (!modal_overlay.classList.contains('is-open')) {
            modal_overlay.classList.remove('is-close');
            modal_overlay.classList.add('is-open');
        }

        const modal_window = modal_overlay.querySelector(`#${modalWindowId}`);
        if (!modal_window) {
            console.log(`'#${modalWindowId}' modal window not found.`);
            return;
        }
        modal_window.classList.add('is-open');
        modal_window.classList.remove('is-close');
    }
}

/**
 * Modal overlay component.
 * @returns Returns the component.
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
