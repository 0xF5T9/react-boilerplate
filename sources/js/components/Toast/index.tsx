/**
 * @file index.tsx
 * @description Toast component.
 */

'use strict';
import type { ToastOption, ToastMap } from '../../types/toast';
import * as styles from './Toast.module.css';
const $ = document.querySelector.bind(document);

class CToastOption implements ToastOption {
    variant: string = '';
    title: string = '';
    message: string = '';
    icon?: string = '';
    duration?: number = 3000;
    animationDuration?: { fadeIn: number; fadeOut: number } = {
        fadeIn: 300,
        fadeOut: 300,
    };

    constructor(options: ToastOption) {
        const validOptions: ToastOption & { [key: string]: any } = {
            ...options,
        };
        Object.keys(validOptions)
            .filter((key) => !(key in this))
            .forEach((key) => {
                delete validOptions[key];
            });
        Object.assign(this, validOptions);

        if (!this.icon) {
            switch (validOptions.variant) {
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

/**
 * Show a toast notification.
 * @param type Toast type.
 * @param options Toast options.
 */
function showToast(toast: ToastMap): void {
    const toast_overlay = $(`.${styles['toast-overlay'] || ''}`);
    if (!toast_overlay) {
        console.error('Toast overlay not found.');
        return;
    }

    const toast_options = new CToastOption(toast);

    const fadein_duration_float = (
            toast_options.animationDuration.fadeIn / 1000
        ).toFixed(2),
        fadeout_duration_float = (
            toast_options.animationDuration.fadeOut / 1000
        ).toFixed(2),
        fadeOutDelayDuration = (
            toast_options.animationDuration.fadeIn / 1000 +
            toast_options.duration / 1000
        ).toFixed(2);

    const toast_element = document.createElement(`div`);
    toast_element.classList.add(styles['toast']);
    toast_element.classList.add(styles[`toast-${toast_options.variant}`]);

    toast_element.style.animation = `${styles['toast-fade-in']} ${fadein_duration_float}s ease, ${styles['toast-fade-out']} ${fadeout_duration_float}s linear ${fadeOutDelayDuration}s forwards`;
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
