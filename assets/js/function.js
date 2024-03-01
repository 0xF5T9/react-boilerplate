/**
 * @file function.js
 * @description Function definitions.
 */

import { global } from './global.js';

/**
 * Output a debug message to the console.
 * @param {String} message The message string.
 * @param {Boolean} isErrorMessage Specifies whether the message is an error message. (optional - default:false)
 */
export function message(message, isErrorMessage = false) {
    if (isErrorMessage)
        throw "[" + new Date().getTime() + "] " + message;
    else
        console.log("[" + new Date().getTime() + "] " + message);
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
        header.style.setProperty('display', 'flex');
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

/**
 * Check if the mobile menu is open.
 * @returns {boolean} Returns true if the mobile menu is open, otherwise returns false.
 */
export function isMobileMenuOpen() {
    const mobile_menu = document.querySelector('#mobile-menu-icon');
    if (!mobile_menu)
        throw `'#mobile-menu-icon' element not found.`;

    return (mobile_menu.classList.contains('js-open') ? true : false);
}

/**
 * Open the mobile menu.
 */
export function openMobileMenu() {
    const mobile_menu = document.querySelector('#mobile-menu-icon');
    if (!mobile_menu)
        throw `'#mobile-menu-icon' element not found.`;

    const mobile_menu_icon = mobile_menu.querySelector('.fa-bars');
    if (!mobile_menu_icon)
        throw `Icon element not found.`;
    mobile_menu_icon.classList.remove('fa-bars');
    mobile_menu_icon.classList.add('fa-arrow-up-from-bracket');


    mobile_menu.classList.add('js-open');
}

/**
 * Close the mobile menu.
 */
export function closeMobileMenu() {
    const mobile_menu = document.querySelector('#mobile-menu-icon');
    if (!mobile_menu)
        throw `'#mobile-menu-icon' element not found.`;

    const mobile_menu_icon = mobile_menu.querySelector('.fa-arrow-up-from-bracket');
    if (!mobile_menu_icon)
        throw `Icon element not found.`;
    mobile_menu_icon.classList.remove('fa-arrow-up-from-bracket');
    mobile_menu_icon.classList.add('fa-bars');

    mobile_menu.classList.remove('js-open');
}

/**
 * Update the debug overlay.
 */
export function updateDebugOverlay() {
    var device_type = (window.innerWidth >= 1024 ? "Desktop" : (window.innerWidth >= 741 ? "Tablet" : "Mobile"));
    var result_string = window.innerWidth + "x" + window.innerHeight + " (" + device_type + ")";
    const screen_size_text = document.querySelector('#debug-overlay>h5');
    screen_size_text.innerHTML = result_string;
    if (device_type === "Desktop")
        screen_size_text.style.setProperty('background-color', 'var(--color-orange)');
    else if (device_type === "Tablet")
        screen_size_text.style.setProperty('background-color', 'var(--color-red)');
    else if (device_type === "Mobile")
        screen_size_text.style.setProperty('background-color', 'var(--color-purple)');
}

/**
 * Show a notification toast.
 * @param {String} title Specifies the toast title. (optional - default:<empty string>)
 * @param {String} message Specifies the toast message. (optional - default:<empty string>)
 * @param {String} type Specifies the toast type. (optional - default:'message') | Available types: 'message', 'info', 'success', 'error'.
 * @param {Number} duration Specifies the toast duration in milliseconds. (optional - default:3000)
 * @param {Object} animationDuration Specifies the toast animation duration in milliseconds. (optional - default:{fadeIn: 300, fadeOut: 300})
 * @note For 'title' and 'message' parameters, escape characters like '\n' or html tags can be used.
 */
export function showToast(title = '', message = '', type = 'message', duration = 3000, animationDuration = { fadeIn: 300, fadeOut: 300 }) {
    // Calculate float values for animation durations in seconds.
    const fadein_duration_float = (animationDuration.fadeIn / 1000).toFixed(2);
    const fadeout_duration_float = (animationDuration.fadeOut / 1000).toFixed(2);
    const total_toast_duration_float = ((duration / 1000) + animationDuration.fadeIn / 1000 + animationDuration.fadeOut / 1000).toFixed(2);

    // Define icon classes based on toast type
    const toast_icons = {
        message: 'fa-solid fa-message',
        info: 'fa-solid fa-circle-info',
        success: 'fa-solid fa-circle-check',
        error: 'fa-solid fa-circle-exclamation'
    };
    var toast_icon = toast_icons[type];
    if (toast_icon === undefined) toast_icon = toast_icons['message'];

    // Create the toast element.
    const toast_element = document.createElement(`div`);
    toast_element.classList.add('toast');
    if (type === 'success')
        toast_element.classList.add('toast-success');
    else if (type === 'error')
        toast_element.classList.add('toast-error');
    toast_element.style.animation = `toast-fade-in ${fadein_duration_float}s ease, toast-fade-out ${fadeout_duration_float}s linear ${total_toast_duration_float}s forwards`;
    toast_element.innerHTML = `
            <div class="toast-icon"><i class="${toast_icon}"></i></div>
            <div class="toast-message">
                <p class="toast-title">${title}</p>
                <p class="toast-desc">${message}</p>
            </div>
            <div class="toast-close"><i class="fa-solid fa-xmark"></i></div>
            `;

    // Set a timeout to remove the toast element after the specified duration.
    const timeout_id = setTimeout(function () {
        toast_element.remove();
    }, (duration + animationDuration.fadeIn + (animationDuration.fadeOut * 2)));

    // Define click event for closing the toast.
    toast_element.onclick = function (event) {
        if (event.target.closest('.toast-close')) {
            toast_element.remove();
            clearTimeout(timeout_id);
        }
    };

    // Append the toast element.
    document.querySelector('#toasts').append(toast_element);
}

/**
 * Show a custom notification toast.
 * @param {String} title Specifies the toast title. (optional - default:<empty string>)
 * @param {String} message Specifies the toast message. (optional - default:<empty string>)
 * @param {String} colors Specifies the toast colors. (optional - default:{titleColor: '#fcfcfa', descColor: '#fcfcfa', backgroundColor: '#2d2a2e', borderColor: '#2d2a2e', iconColor: '#fcfcfa', closeIconColor: '#fcfcfa'})
 * @param {String} iconClasses Specifies the toast icon classes. (optional - default:'fa-solid fa-message')
 * @param {Number} duration Specifies the toast duration in milliseconds. (optional - default:3000)
 * @param {Object} animationDuration Specifies the toast animation duration in milliseconds. (optional - default:{fadeIn: 300, fadeOut: 300})
 * @note For 'title' and 'message' parameters, escape characters like '\n' or html tags can be used.
 */
export function showCustomToast(title = '', message = '', colors = { titleColor: '#fcfcfa', descColor: '#fcfcfa', backgroundColor: '#2d2a2e', borderColor: '#2d2a2e', iconColor: '#fcfcfa', closeIconColor: '#fcfcfa' }, iconClasses = 'fa-solid fa-message', duration = 3000, animationDuration = { fadeIn: 300, fadeOut: 300 }) {
    // Calculate float values for animation durations in seconds.
    const fadein_duration_float = (animationDuration.fadeIn / 1000).toFixed(2);
    const fadeout_duration_float = (animationDuration.fadeOut / 1000).toFixed(2);
    const total_toast_duration_float = ((duration / 1000) + animationDuration.fadeIn / 1000 + animationDuration.fadeOut / 1000).toFixed(2);

    // Define icon classes.
    var toast_icon = iconClasses;

    // Create the toast element.
    const toast_element = document.createElement(`div`);
    toast_element.classList.add('toast');
    toast_element.style.animation = `toast-fade-in ${fadein_duration_float}s ease, toast-fade-out ${fadeout_duration_float}s linear ${total_toast_duration_float}s forwards`;
    toast_element.style.setProperty('--toast-title-color', `${colors.titleColor}`);
    toast_element.style.setProperty('--toast-desc-color', `${colors.descColor}`);
    toast_element.style.setProperty('--toast-background-color', `${colors.backgroundColor}`);
    toast_element.style.setProperty('--toast-border-color', `${colors.borderColor}`);
    toast_element.style.setProperty('--toast-icon-color', `${colors.iconColor}`);
    toast_element.style.setProperty('--toast-close-icon-color', `${colors.closeIconColor}`);
    toast_element.innerHTML = `
            <div class="toast-icon"><i class="${toast_icon}"></i></div>
            <div class="toast-message">
                <p class="toast-title">${title}</p>
                <p class="toast-desc">${message}</p>
            </div>
            <div class="toast-close"><i class="fa-solid fa-xmark"></i></div>
            `;

    // Set a timeout to remove the toast element after the specified duration.
    const timeout_id = setTimeout(function () {
        toast_element.remove();
    }, (duration + animationDuration.fadeIn + (animationDuration.fadeOut * 2)));

    // Define click event for closing the toast.
    toast_element.onclick = function (event) {
        if (event.target.closest('.toast-close')) {
            toast_element.remove();
            clearTimeout(timeout_id);
        }
    };

    // Append the toast element.
    document.querySelector('#toasts').append(toast_element);
}