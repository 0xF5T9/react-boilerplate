/**
 * @file function.js
 * @description Function definitions.
 */

import { global } from './global.js';

/**
 * Output a debug message to the console.
 * @param {String} message The message string.
 * @param {boolean} isErrorMessage Specifies whether the message is an error message.
 */
export function message(message, isErrorMessage) {
    if (isErrorMessage)
        throw "[" + new Date().getTime() + "] " + message;
    else
        console.log("[" + new Date().getTime() + "] " + message);
}

/**
 * Checks if a given property exists on a DOM element and optionally matches a specific value.
 * @param {Element} element The DOM element to check.
 * @param {string} property The property to check on the element.
 * @param {string} value (optional) The value to match against the property.
 * @returns {boolean} Returns true if the property exists and matches the value (if provided), otherwise returns false.
 */
export function isPropertyExists(element, property, value) {

    if (!element || element.nodeType != 1)
        throw `Invalid element variable.`;

    if (typeof property != "string")
        throw `Property must be a string.`;

    if (value != undefined && typeof value != "string") {
        throw `Value must be a string.`;
    }

    const result = getComputedStyle(element).getPropertyValue(property);

    return (value == undefined ? (result ? true : false) : (result == value ? true : false));
}

/**
 * Show the modal overlay element.
 */
export function showModalOverlay() {
    const modal_overlay = document.querySelector('#modal-overlay');
    if (!modal_overlay)
        throw `'#modal-overlay' element not found.`;

    modal_overlay.classList.add('js-open');
}

/**
 * Hide the modal overlay element.
 */
export function hideModalOverlay() {
    const modal_overlay = document.querySelector('#modal-overlay');
    if (!modal_overlay)
        throw `'#modal-overlay' element not found.`;

    modal_overlay.classList.remove('js-open');
}

/**
 * Check if the modal overlay is open and visible.
 * @returns {boolean} Returns true if if the modal overlay is open and visible, otherwise returns false.
 */
export function isModalOverlayOpen() {
    const modal_overlay = document.querySelector('#modal-overlay');
    if (!modal_overlay)
        throw `'#modal-overlay' element not found.`;

    return (modal_overlay.classList.contains('js-open') ? true : false);
}

/**
 * Open a modal window.
 * @param {Element} modalWindowElement The modal window element. (.modal-window)
 */
export function openModalWindow(modalWindowElement) {
    if (!modalWindowElement || modalWindowElement.nodeType != 1) {
        throw `The given parameter variable is not an element.`;
    }

    if (!modalWindowElement.classList.contains('modal-window'))
        throw `The given element is not a modal window element. ('.modal-window' class not found)`;

    showModalOverlay();
    modalWindowElement.classList.remove('js-animation-close');
    modalWindowElement.classList.add('js-open');
    modalWindowElement.classList.add('js-animation-open');
}

/**
 * Handles modal window closing animation end.
 * Removes overlay, detaches 'animationend' listeners from modals.
 */
function modalWindowAnimationEndCallback() {
    const modal_overlay = document.querySelector('#modal-overlay');
    if (!modal_overlay)
        throw `'#modal-overlay' element not found.`;

    hideModalOverlay();
    const modal_windows = modal_overlay.querySelectorAll('.modal-window');
    for (const modal_window of modal_windows) {
        modal_window.classList.remove('js-open');
        modal_window.removeEventListener('animationend', modalWindowAnimationEndCallback);
    }
}

/**
 * Close the opening modal window.
 */
export function closeModalWindow() {
    const modal_overlay = document.querySelector('#modal-overlay');
    if (!modal_overlay)
        throw `'#modal-overlay' element not found.`;

    const modal_window = modal_overlay.querySelector('.modal-window.js-animation-open');
    if (modal_window) {
        modal_window.addEventListener('animationend', modalWindowAnimationEndCallback);
        modal_window.classList.remove('js-animation-open');
        modal_window.classList.add('js-animation-close');
    }
}

/**
 * Check if the header is visible.
 * @returns {boolean} Returns true if the header is visible, otherwise returns false.
 */
export function isHeaderVisible() {
    const header = document.querySelector('#header');
    if (!header)
        throw `'#header' element not found.`;

    return (getComputedStyle(header).getPropertyValue('display') != 'none' ? true : false);
}

/**
 * Hide the header.
 */
export function hideHeader() {
    const header = document.querySelector('#header');
    if (!header)
        throw `'#header' element not found.`;

    if (isHeaderVisible()) {
        global.lastHeaderHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
        var lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: "instant",
        });
        header.style.setProperty('display', 'none');
        document.documentElement.style.setProperty('--header-height', '0px');
    }
}

/**
 * Show the header.
 */
export function showHeader() {
    const header = document.querySelector('#header');
    if (!header)
        throw `'#header' element not found.`;

    if (!isHeaderVisible()) {
        header.style.setProperty('display', 'block');
        document.documentElement.style.setProperty('--header-height', global.lastHeaderHeightValue);
        var lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: "instant",
        });
    }
}

/**
 * Check if the footer is visible.
 * @returns {boolean} Returns true if the footer is visible, otherwise returns false.
 */
export function isFooterVisible() {
    const footer = document.querySelector('#footer');
    if (!footer)
        throw `'#footer' element not found.`;

    return (getComputedStyle(footer).getPropertyValue('display') != 'none' ? true : false);
}

/**
 * Hide the footer.
 */
export function hideFooter() {
    const footer = document.querySelector('#footer');
    if (!footer)
        throw `'#footer' element not found.`;

    if (isFooterVisible()) {
        global.lastFooterHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--footer-height');
        footer.style.setProperty('display', 'none');
        document.documentElement.style.setProperty('--footer-height', '0px');
    }
}

/**
 * Show the footer.
 */
export function showFooter() {
    const footer = document.querySelector('#footer');
    if (!footer)
        throw `'#footer' element not found.`;

    if (!isFooterVisible()) {
        footer.style.setProperty('display', 'flex');
        document.documentElement.style.setProperty('--footer-height', global.lastFooterHeightValue);
    }
}