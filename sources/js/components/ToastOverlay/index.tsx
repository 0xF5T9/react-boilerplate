/**
 * @file index.tsx
 * @description Toast overlay component.
 */

'use strict';
import * as styles from './ToastOverlay.module.css';
const $ = document.querySelector.bind(document);

// Toast types.
enum ToastTypes {
    Success,
    Error,
    Message,
    Info,
}

// Toast icons.
enum ToastIcons {
    CircleCheck = 'fa-solid fa-circle-check',
    CircleExclamation = 'fa-solid fa-circle-exclamation',
    Message = 'fa-solid fa-message',
    CircleInfo = 'fa-solid fa-circle-info',
}

/**
 * Show a notification toast.
 * @param title Toast title. (Escape characters like '\n' or html tags can be used)
 * @param message Toast message. (Escape characters like '\n' or html tags can be used)
 * @param type Toast type.
 * @param duration Toast duration in milliseconds. (default: 3000)
 * @param animationDuration Toast animation duration in milliseconds.
 */
function showToast(
    title: string,
    message: string,
    type: ToastTypes,
    duration: number = 3000,
    animationDuration = { fadeIn: 300, fadeOut: 300 }
) {
    const toast_overlay = $(`.${styles['toast-overlay'] || ''}`);
    if (!toast_overlay) {
        console.error('Toast overlay not found.');
        return;
    }

    let toast_icon: ToastIcons;
    switch (type) {
        case ToastTypes.Success:
            toast_icon = ToastIcons.CircleCheck;
            break;
        case ToastTypes.Error:
            toast_icon = ToastIcons.CircleExclamation;
            break;
        case ToastTypes.Message:
            toast_icon = ToastIcons.Message;
            break;
        case ToastTypes.Info:
            toast_icon = ToastIcons.CircleInfo;
            break;
        default:
            toast_icon = ToastIcons.CircleInfo;
            break;
    }

    const fadein_duration_float = (animationDuration.fadeIn / 1000).toFixed(2),
        fadeout_duration_float = (animationDuration.fadeOut / 1000).toFixed(2),
        toast_duration_float = (duration / 1000).toFixed(2);

    const toast_element = document.createElement(`div`);
    toast_element.classList.add(styles['toast']);
    if (type === ToastTypes.Success)
        toast_element.classList.add(styles['toast-success']);
    else if (type === ToastTypes.Error)
        toast_element.classList.add(styles['toast-error']);
    toast_element.style.animation = `${styles['toast-fade-in']} ${fadein_duration_float}s ease, ${styles['toast-fade-out']} ${fadeout_duration_float}s linear ${toast_duration_float}s forwards`;
    toast_element.innerHTML = `
            <div class="${styles['toast-icon']}"><i class="${toast_icon}"></i></div>
            <div class="${styles['toast-message']}">
                <p class="${styles['toast-title']}">${title}</p>
                <p class="${styles['toast-desc']}">${message}</p>
            </div>
            <div class="${styles['toast-close']}"><i class="fa-solid fa-xmark"></i></div>
            `;

    toast_element.onanimationend = (event: any) => {
        if (event.animationName === styles['toast-fade-out'])
            toast_element.remove();
    };

    toast_element.onclick = function (event: any) {
        if (event.target.closest(`.${styles['toast-close']}`)) {
            toast_element.remove();
        }
    };

    toast_overlay.append(toast_element);
}

/**
 * Toast overlay component.
 * @returns Returns the component.
 */
function ToastOverlay() {
    return <div className={styles['toast-overlay']}></div>;
}

export default ToastOverlay;
export { showToast, ToastTypes };
