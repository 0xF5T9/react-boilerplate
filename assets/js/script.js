/**
 * @file script.js
 * @description Main script file.
 */

import { global } from './global.js';
import * as functions from './function.js';

/*****************************
 * FUNCTIONAL BUTTON SCRIPTS *
 *****************************/

// Show/hide the mobile menu button.
document.querySelector('#mobile-menu-icon').addEventListener('click', function (event) {
    if (functions.isMobileMenuOpen())
        functions.closeMobileMenu();
    else
        functions.openMobileMenu();
});
document.querySelector('#mobile-menu-container').addEventListener('click', function (event) {
    event.stopPropagation();
});

// Navigation menu buttons
document.querySelector('#navbar-item-2-buttons').addEventListener('click', function () {
    document.querySelector('#button-sample-section').scrollIntoView();
    global.lastHeaderHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
    var lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
    lastHeaderHeightValue = -lastHeaderHeightValue;
    window.scrollBy({
        top: lastHeaderHeightValue,
        behavior: "instant",
    });
});
document.querySelector('#navbar-item-2-inputs').addEventListener('click', function () {
    document.querySelector('#input-sample-section').scrollIntoView();
    global.lastHeaderHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
    var lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
    lastHeaderHeightValue = -lastHeaderHeightValue;
    window.scrollBy({
        top: lastHeaderHeightValue,
        behavior: "instant",
    });
});
document.querySelector('#navbar-item-2-checkboxes').addEventListener('click', function () {
    document.querySelector('#checkbox-sample-section').scrollIntoView();
    global.lastHeaderHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
    var lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
    lastHeaderHeightValue = -lastHeaderHeightValue;
    window.scrollBy({
        top: lastHeaderHeightValue,
        behavior: "instant",
    });
});
document.querySelector('#navbar-item-2-radios').addEventListener('click', function () {
    document.querySelector('#radio-sample-section').scrollIntoView();
    global.lastHeaderHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
    var lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
    lastHeaderHeightValue = -lastHeaderHeightValue;
    window.scrollBy({
        top: lastHeaderHeightValue,
        behavior: "instant",
    });
});

// Show sample modal window buttons.
document.querySelector("#modal-window-sample-button-1").addEventListener('click', function (event) {
    functions.openModalWindow(document.querySelector('#sample-modal-window-1'));
});
document.querySelector("#modal-window-sample-button-2").addEventListener('click', function (event) {
    functions.openModalWindow(document.querySelector('#sample-modal-window-2'));
});

// Show/hide header button.
document.querySelector('#show-hide-header-button').addEventListener('click', function (event) {
    if (functions.isHeaderVisible()) {
        event.target.innerHTML = "Show Header";
        functions.hideHeader();
    }
    else {
        event.target.innerHTML = "Hide Header";
        functions.showHeader();
    }
});

// Show/hide footer button.
document.querySelector('#show-hide-footer-button').addEventListener('click', function (event) {
    if (functions.isFooterVisible()) {
        event.target.innerHTML = "Show Footer";
        functions.hideFooter();
    }
    else {
        event.target.innerHTML = "Hide Footer";
        functions.showFooter();
    }
});

// Click sound button.
document.querySelector('#click-sound-button').addEventListener('click', function () {
    const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
    audio.play();
});

/*************************
 * MODAL OVERLAY SCRIPTS *
 *************************/

// Close opening modal window on overlay click.
document.querySelector('#modal-overlay').addEventListener('click', function (event) {
    functions.closeModalWindow();
});

// Prevent click events on modal windows from reaching the overlay (avoids unintended close modal window actions).
for (const modal_window of document.querySelector('#modal-overlay').querySelectorAll('.modal-window')) {
    modal_window.addEventListener('click', function (event) {
        event.stopPropagation();
    })
};

/**************************
 * BROWSER WINDOW SCRIPTS *
 **************************/

// Close opening modal window on escape key press.
window.onkeydown = function (event) {
    if (event.code === 'Escape' && functions.isModalOverlayOpen())
        functions.closeModalWindow();
}

functions.message("All operations completed successfully.");