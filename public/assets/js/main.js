/**
 * @file script.js
 * @description Main script file.
 */

import { global } from './global.js';
import * as functions from './function.js';

/*****************************
 * FUNCTIONAL BUTTON SCRIPTS *
 *****************************/

// Header mobile menu button.
document
    .querySelector('#mobile-menu-icon>.header-icon-button-icon')
    .addEventListener('click', function (event) {
        const icon_button = document.querySelector('#mobile-menu-icon');
        const dropdown_window = icon_button.querySelector('.dropdown-window');
        const icon = icon_button.querySelector('i');
        if (!dropdown_window.classList.contains('is-open')) {
            dropdown_window.classList.add('is-open');
        } else {
            dropdown_window.classList.remove('is-open');
        }
    });
for (const list_item of document.querySelectorAll('#mobile-menu-dropdown li')) {
    if (list_item.querySelector('ul')) {
        list_item.addEventListener('click', function (event) {
            if (list_item.classList.contains('is-open')) {
                list_item.classList.remove('is-open');
                const icon = list_item.querySelector('a>i');
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-right');
            } else {
                list_item.classList.add('is-open');
                const icon = list_item.querySelector('a>i');
                icon.classList.remove('fa-caret-right');
                icon.classList.add('fa-caret-down');
            }
        });
    }
}
for (const item_list of document.querySelectorAll('#mobile-menu-dropdown ul')) {
    item_list.addEventListener('click', function (event) {
        event.stopPropagation();
    });
}
document
    .querySelector('#navbar-item-2-buttons')
    .addEventListener('click', function () {
        document.querySelector('#button-sample-section').scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    });
document
    .querySelector('#navbar-item-2-inputs')
    .addEventListener('click', function () {
        document.querySelector('#input-sample-section').scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    });
document
    .querySelector('#navbar-item-2-checkboxes')
    .addEventListener('click', function () {
        document.querySelector('#checkbox-sample-section').scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    });
document
    .querySelector('#navbar-item-2-radios')
    .addEventListener('click', function () {
        document.querySelector('#radio-sample-section').scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    });
document
    .querySelector('#mobile-menu-buttons')
    .addEventListener('click', function () {
        document.querySelector('#button-sample-section').scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    });
document
    .querySelector('#mobile-menu-inputs')
    .addEventListener('click', function () {
        document.querySelector('#input-sample-section').scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    });
document
    .querySelector('#mobile-menu-checkboxes')
    .addEventListener('click', function () {
        document.querySelector('#checkbox-sample-section').scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    });
document
    .querySelector('#mobile-menu-radios')
    .addEventListener('click', function () {
        document.querySelector('#radio-sample-section').scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    });

// Header alert button.
document
    .querySelector('#alert-icon>.header-icon-button-icon')
    .addEventListener('click', function (event) {
        const icon_button = document.querySelector('#alert-icon');
        const dropdown_window = icon_button.querySelector('.dropdown-window');
        const icon = icon_button.querySelector('i');
        if (!dropdown_window.classList.contains('is-open')) {
            dropdown_window.classList.add('is-open');
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            dropdown_window.classList.remove('is-open');
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    });

// Header user button.
document
    .querySelector('#user-icon>.header-icon-button-icon')
    .addEventListener('click', function (event) {
        const icon_button = document.querySelector('#user-icon');
        const dropdown_window = icon_button.querySelector('.dropdown-window');
        if (!dropdown_window.classList.contains('is-open')) {
            dropdown_window.classList.add('is-open');
        } else {
            dropdown_window.classList.remove('is-open');
        }
    });

// Show sample modal window buttons.
document
    .querySelector('#modal-window-sample-button-1')
    .addEventListener('click', function () {
        const modal_window = document.querySelector('#custom-modal-window-1');
        if (functions.isModalOverlayVisible())
            functions.closeModalOverlay(true);
        setTimeout(function () {
            modal_window.classList.add('is-open');
        }, 1);
    });
document
    .querySelector('#modal-window-sample-button-2')
    .addEventListener('click', function () {
        const modal_window = document.querySelector('#custom-modal-window-2');
        if (functions.isModalOverlayVisible())
            functions.closeModalOverlay(true);
        setTimeout(function () {
            modal_window.classList.add('is-open');
        }, 1);
    });

// Show/hide header button.
document
    .querySelector('#show-hide-header-button')
    .addEventListener('click', function (event) {
        if (functions.isHeaderVisible()) {
            event.target.innerHTML = 'Show Header';
            functions.hideHeader();
            functions.showToast(
                'Info',
                'The header has been hidden.',
                'info',
                1000
            );
        } else {
            event.target.innerHTML = 'Hide Header';
            functions.showHeader();
            functions.showToast(
                'Info',
                'The header has been shown.',
                'info',
                1000
            );
        }
    });

// Show/hide footer button.
document
    .querySelector('#show-hide-footer-button')
    .addEventListener('click', function (event) {
        if (functions.isFooterVisible()) {
            event.target.innerHTML = 'Show Footer';
            functions.hideFooter();
            functions.showToast(
                'Info',
                'The footer has been hidden.',
                'info',
                1000
            );
        } else {
            event.target.innerHTML = 'Hide Footer';
            functions.showFooter();
            functions.showToast(
                'Info',
                'The footer has been shown.',
                'info',
                1000
            );
        }
    });

// Click sound button.
document
    .querySelector('#click-sound-button')
    .addEventListener('click', function () {
        const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
        audio.play();
    });

/************************
 * MODAL WINDOW SCRIPTS *
 ************************/

// Disable existing modal window click propagation.
for (const modal_window of document.querySelectorAll('.modal-window')) {
    modal_window.addEventListener('click', function (event) {
        event.stopPropagation();
    });
}

/**************************
 * BROWSER WINDOW SCRIPTS *
 **************************/

// Process browser resize events.
window.onresize = function (event) {
    // Update debug overlay values on browser resizing.
    functions.updateDebugOverlay();
};

// Process on key down events.
window.onkeydown = function (event) {
    if (event.code == 'Num1') {
        const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
        audio.play();
        functions.showToast('Message', 'You have new message(s).', 'message');
    } else if (event.code == 'Digit1') {
        const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
        audio.play();
        functions.showToast(
            'Info',
            'New version available for download!',
            'info'
        );
    } else if (event.code == 'Digit2') {
        const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
        audio.play();
        functions.showToast(
            'Success',
            'Your request has been sent successfully.',
            'success'
        );
    } else if (event.code == 'Digit3') {
        const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
        audio.play();
        functions.showToast(
            'Error',
            'Unable to connect to the remote server.',
            'error'
        );
    } else if (event.code == 'Digit4') {
        const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
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
    } else if (event.code == 'Escape') {
        if (functions.isModalOverlayVisible()) {
            functions.closeModalOverlay(true);
        }
    }

    // functions.message(event.code);
};

// Process on click events.
window.onclick = function (event) {
    // Close modal window on background click.
    // 'The'stopPropagation()' function should be called on the modal window element.
    if (functions.isModalOverlayVisible()) {
        functions.closeModalOverlay();
    }

    // Close all openings drop-down windows on background clicks.
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

// ...

functions.updateDebugOverlay();
functions.message('All operations completed successfully.');
