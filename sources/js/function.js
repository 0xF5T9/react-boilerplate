/**
 * @file function.js
 * @description Website specific function definitions.
 * @todo TODO: To be removed.
 */

'use strict';

const $$ = document.querySelectorAll.bind(document);

/**
 * Check if there are any drop-down windows open.
 * @returns {boolean} Returns true if there are any drop-down windows open, otherwise returns false.
 */
export function isDropdownWindowOpen() {
    return $$('.dropdown-window.is-open').length ? true : false;
}

/**
 * Validate all dropdown windows.
 */
export function validateAllDropdownWindows() {
    for (const dropdown of $$('.dropdown-window')) {
        if (dropdown.id == 'alert-dropdown') {
            if (dropdown.classList.contains('is-open')) {
                // ...
            } else {
                dropdown.parentNode.querySelector('i').classList.remove('fas');
                dropdown.parentNode.querySelector('i').classList.add('far');
            }
        }
    }
}

/**
 * Close all drop-down windows.
 */
export function closeAllDropdownWindows() {
    for (const dropdown of $$('.dropdown-window.is-open')) {
        dropdown.classList.remove('is-open');
        validateAllDropdownWindows();
    }
}
