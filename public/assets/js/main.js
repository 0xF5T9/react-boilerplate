/**
 * @file script.js
 * @description Main script file.
 */

import { global } from './global.js';
import * as functions from './function.js';
import * as helper from './helper.js';
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/*****************************
 * FUNCTIONAL BUTTON SCRIPTS *
 *****************************/

// Header mobile menu button.
$('#mobile-menu-icon>.header-icon-button-icon').addEventListener(
    'click',
    function (event) {
        const icon_button = $('#mobile-menu-icon');
        const dropdown_window = icon_button.querySelector('.dropdown-window');
        const icon = icon_button.querySelector('i');
        if (!dropdown_window.classList.contains('is-open')) {
            dropdown_window.classList.add('is-open');
        } else {
            dropdown_window.classList.remove('is-open');
        }
    }
);
for (const list_item of $$('#mobile-menu-dropdown li')) {
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
for (const item_list of $$('#mobile-menu-dropdown ul')) {
    item_list.addEventListener('click', function (event) {
        event.stopPropagation();
    });
}
$('#navbar-item-2-buttons').addEventListener('click', function () {
    $('#button-sample-section').scrollIntoView();
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
$('#navbar-item-2-inputs').addEventListener('click', function () {
    $('#input-sample-section').scrollIntoView();
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
$('#navbar-item-2-checkboxes').addEventListener('click', function () {
    $('#checkbox-sample-section').scrollIntoView();
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
$('#navbar-item-2-radios').addEventListener('click', function () {
    $('#radio-sample-section').scrollIntoView();
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
$('#mobile-menu-buttons').addEventListener('click', function () {
    $('#button-sample-section').scrollIntoView();
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
$('#mobile-menu-inputs').addEventListener('click', function () {
    $('#input-sample-section').scrollIntoView();
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
$('#mobile-menu-checkboxes').addEventListener('click', function () {
    $('#checkbox-sample-section').scrollIntoView();
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
$('#mobile-menu-radios').addEventListener('click', function () {
    $('#radio-sample-section').scrollIntoView();
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
$('#alert-icon>.header-icon-button-icon').addEventListener(
    'click',
    function (event) {
        const icon_button = $('#alert-icon');
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
    }
);

// Header user button.
$('#user-icon>.header-icon-button-icon').addEventListener(
    'click',
    function (event) {
        const icon_button = $('#user-icon');
        const dropdown_window = icon_button.querySelector('.dropdown-window');
        if (!dropdown_window.classList.contains('is-open')) {
            dropdown_window.classList.add('is-open');
        } else {
            dropdown_window.classList.remove('is-open');
        }
    }
);

// Show sample modal window buttons.
$('#modal-window-sample-button-1').addEventListener('click', function () {
    const modal_window = $('#custom-modal-window-1');
    if (functions.isModalOverlayVisible()) functions.closeModalOverlay(true);
    setTimeout(function () {
        modal_window.classList.add('is-open');
    }, 1);
});
$('#modal-window-sample-button-2').addEventListener('click', function () {
    const modal_window = $('#custom-modal-window-2');
    if (functions.isModalOverlayVisible()) functions.closeModalOverlay(true);
    setTimeout(function () {
        modal_window.classList.add('is-open');
    }, 1);
});

// Show/hide header button.
$('#show-hide-header-button').addEventListener('click', function (event) {
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
        functions.showToast('Info', 'The header has been shown.', 'info', 1000);
    }
});

// Show/hide footer button.
$('#show-hide-footer-button').addEventListener('click', function (event) {
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
        functions.showToast('Info', 'The footer has been shown.', 'info', 1000);
    }
});

// Click sound button.
$('#click-sound-button').addEventListener('click', function () {
    const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
    audio.play();
});

/************************
 * MODAL WINDOW SCRIPTS *
 ************************/

// Disable existing modal window click propagation.
for (const modal_window of $$('.modal-window')) {
    modal_window.addEventListener('click', function (event) {
        event.stopPropagation();
    });
}

/****************
 * FORM SCRIPTS *
 ****************/

{
    // Get the test form and its form groups.
    const test_form = $('#test-form'),
        test_form_email_group = test_form.querySelector('.email-group'),
        test_form_password_group = test_form.querySelector('.password-group'),
        test_form_submit = test_form.querySelector('button[type="submit"]');

    // Disable submit button default behavior
    test_form_submit.onclick = function () {
        return false;
    };

    const validateEmailGroup = function (formGroup) {
        const input = formGroup.querySelector('input'),
            form_message = formGroup.querySelector('.output-message');
        if (!input.value) {
            form_message.innerHTML = 'This field is required.';
            return false;
        } else if (!helper.validateEmailString(input.value)) {
            form_message.innerHTML = 'The entered email is invalid.';
            return false;
        }

        form_message.innerHTML = '';
        return true;
    };
    helper.setInputValidateCallback(test_form_email_group, validateEmailGroup);

    const validatePasswordGroup = function (formGroup) {
        const input = formGroup.querySelector('input'),
            form_message = formGroup.querySelector('.output-message');
        if (!input.value) {
            form_message.innerHTML = 'This field is required.';
            return false;
        } else if (input.value.length < 6) {
            form_message.innerHTML = 'The entered password is too short.';
            return false;
        }

        form_message.innerHTML = '';
        return true;
    };
    helper.setInputValidateCallback(
        test_form_password_group,
        validatePasswordGroup
    );

    test_form_submit.addEventListener('click', function (event) {
        let are_all_validation_success = false,
            error_message = '';
        while (!are_all_validation_success) {
            const email_validation_result = validateEmailGroup(
                    test_form_email_group
                ),
                password_validation_result = validatePasswordGroup(
                    test_form_password_group
                ),
                is_validation_success =
                    email_validation_result && password_validation_result;
            if (!is_validation_success) {
                error_message = 'Form validation failed.';
                break;
            }

            test_form_email_group.querySelector('input').value = '';
            test_form_password_group.querySelector('input').value = '';
            console.log('Success');

            are_all_validation_success = true;
        }

        if (!are_all_validation_success) console.log(error_message);
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
    switch (event.code) {
        case 'Digit1': {
            const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
            audio.play();
            functions.showToast(
                'Info',
                'New version available for download!',
                'info'
            );
            break;
        }
        case 'Digit2': {
            const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
            audio.play();
            functions.showToast(
                'Success',
                'Your request has been sent successfully.',
                'success'
            );
            break;
        }
        case 'Digit3': {
            const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
            audio.play();
            functions.showToast(
                'Error',
                'Unable to connect to the remote server.',
                'error'
            );
            break;
        }
        case 'Digit4': {
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
            break;
        }
        case 'Digit5': {
            const audio = new Audio('/assets/sound/ClickSoundEffect.wav');
            audio.play();
            functions.showToast(
                'Message',
                'You have new message(s).',
                'message'
            );
            break;
        }
        case 'Escape': {
            if (functions.isModalOverlayVisible()) {
                functions.closeModalOverlay(true);
            }
            break;
        }
        case 'F1': {
            const modal_window = $('#custom-modal-window-3');
            if (functions.isModalOverlayVisible())
                functions.closeModalOverlay(true);
            else
                setTimeout(function () {
                    modal_window.classList.add('is-open');
                }, 1);
            break;
        }
        default:
            // console.log('Key pressed:', event.code);
            break;
    }
};

// Process on click events.
window.onclick = function (event) {
    // Close modal window on background click.
    // 'The'stopPropagation()' function should be called on the modal window element.
    if (functions.isModalOverlayVisible()) {
        functions.closeModalOverlay();
    }

    // Close all openings drop-down windows on background clicks.
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

functions.updateDebugOverlay();
helper.message('All operations completed successfully.');
