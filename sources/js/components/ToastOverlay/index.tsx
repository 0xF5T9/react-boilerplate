/**
 * @file index.tsx
 * @description Toast overlay component.
 */

'use strict';
import * as styles from './ToastOverlay.module.css';
const $ = document.querySelector.bind(document);

/**
 * Toast option interface/class.
 *
 * @note Use a class implement from the interface because the interface can't have a default value.
 * @interface ToastOption
 * @member title Toast title.
 * @member message Toast message.
 * @member icon Toast icon class names.
 * @member duration Toast duration. (default: 3000)
 * @member animationDuration Toast animation durations. (default: {fadeIn: 300, fadeOut: 300})
 */
interface ToastOption {
    title: string;
    message: string;
    icon?: string;
    duration?: number;
    animationDuration?: { fadeIn: number; fadeOut: number };
}
class ToastOption implements ToastOption {
    title: string;
    message: string;
    icon?: string;
    duration?: number = 3000;
    animationDuration?: { fadeIn: number; fadeOut: number } = {
        fadeIn: 300,
        fadeOut: 300,
    };

    constructor(type: keyof ToastTypes, options: Partial<ToastOption> = {}) {
        Object.assign(this, options);
        if (!this.icon) {
            switch (type) {
                case 'success':
                    this.icon = 'fa-solid fa-circle-check';
                    break;
                case 'danger':
                    this.icon = 'fa-solid fa-circle-exclamation';
                    break;
                case 'warn':
                    this.icon = 'fa-solid fa-circle-exclamation';
                    break;
                case 'message':
                    this.icon = 'fa-solid fa-message';
                    break;
                case 'info':
                    this.icon = 'fa-solid fa-circle-info';
                    break;
                default:
                    this.icon = 'fa-solid fa-circle-info';
            }
        }
    }
}

interface ToastTypes {
    primary: ToastOption;
    success: ToastOption;
    danger: ToastOption;
    warn: ToastOption;
    message: ToastOption;
    info: ToastOption;
}

/**
 * Show a toast notification.
 * @param type Toast type.
 * @param options Toast options.
 */
function showToast<Type extends keyof ToastTypes>(
    type: Type,
    options: ToastTypes[Type]
): void {
    const toast_overlay = $(`.${styles['toast-overlay'] || ''}`);
    if (!toast_overlay) {
        console.error('Toast overlay not found.');
        return;
    }

    const toast_options = new ToastOption(type, options);

    const fadein_duration_float = (
            toast_options.animationDuration.fadeIn / 1000
        ).toFixed(2),
        fadeout_duration_float = (
            toast_options.animationDuration.fadeOut / 1000
        ).toFixed(2),
        toast_duration_float = (toast_options.duration / 1000).toFixed(2);

    const toast_element = document.createElement(`div`);
    toast_element.classList.add(styles['toast']);
    toast_element.classList.add(styles[`toast-${type}`]);

    toast_element.style.animation = `${styles['toast-fade-in']} ${fadein_duration_float}s ease, ${styles['toast-fade-out']} ${fadeout_duration_float}s linear ${toast_duration_float}s forwards`;
    toast_element.innerHTML = `
            <div class="${styles['toast-icon']}"><i class="${toast_options.icon}"></i></div>
            <div class="${styles['toast-message']}">
                <p class="${styles['toast-title']}">${toast_options.title}</p>
                <p class="${styles['toast-desc']}">${toast_options.message}</p>
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

export { ToastOverlay, showToast };
