/**
 * @file index.tsx
 * @description Modal component.
 */

'use strict';
import {
    useState,
    useEffect,
    useRef,
    useContext,
    createContext,
    ReactNode,
} from 'react';
import PropTypes from 'prop-types';
import { AlertModal, CustomModal, Modal, ModalSetter } from '../../types/modal';

import { CircleExclamation } from '../Icons/CircleExclamation';
import { CircleInfo } from '../Icons/CircleInfo';
import { CircleCheck } from '../Icons/CircleCheck';
import Button from '../Button';

import * as styles from './Modal.module.css';

// Modal context.
const modalContext = createContext(null);

/**
 * Modal context provider component.
 * @param props Component properties.
 * @param props.children Context children.
 * @returns Returns the component.
 */
function ModalProvider({ children }: { children: ReactNode }) {
    // 'modalVisibility' is used to check if there is an opening modal. (Don't use 'modal')
    // 'setModalVisibility' is used to close any opening modal programmatically.
    const [modal, setModal]: [Modal, ModalSetter] = useState(null),
        [modalVisibility, setModalVisibility] = useState(false);

    useEffect(() => {
        setModalVisibility(!!modal);
    }, [modal]);

    const value = {
        modal,
        setModal,
        modalVisibility,
        setModalVisibility,
    };

    return (
        <modalContext.Provider value={value}>{children}</modalContext.Provider>
    );
}

ModalProvider.propTypes = {
    children: PropTypes.node,
};

/**
 * Modal overlay.
 * @returns Returns the component.
 */
function ModalOverlay() {
    const {
        modal,
        setModal,
        modalVisibility,
    }: { modal: any; setModal: ModalSetter; modalVisibility: any } =
        useContext(modalContext);

    const modalOverlay: any = useRef(),
        modalWindow: any = useRef();

    function closeModal() {
        // Trigger close animation animation.
        modalWindow?.current?.classList?.add(`${styles['is-close']}`);

        // Actually destroy the modal element on the animation end.
        modalOverlay?.current?.addEventListener(
            'animationend',
            (event: any) => {
                if (event.target === event.currentTarget) {
                    setModal(null);
                }
            }
        );

        // Improvise:  Polyfill as animationend event may not be available on old browser.
        // Make sure the duration fit modal-overdal fadeout animation duration.
        setTimeout(() => {
            setModal(null);
        }, 101); // 0.1s
    }

    // Close modal on escape key press.
    useEffect(() => {
        function handleKeyDown(event: any) {
            if (modal && event.keyCode === 27) closeModal();
        }
        window.addEventListener('keydown', handleKeyDown);

        setTimeout(() => {
            modalWindow?.current?.querySelector('button.default')?.focus();
        }, 50);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modal]);

    // Close the modal programmatically.
    useEffect(() => {
        if (!modalVisibility && modal) closeModal();
    }, [modalVisibility]);

    let Modal: JSX.Element = null;
    switch (modal?.type) {
        case 'alert':
            const alert_modal: AlertModal = modal;

            let Icon = alert_modal?.icon;
            if (!Icon) {
                switch (alert_modal.variant) {
                    case 'success':
                        Icon = CircleCheck;
                        break;
                    case 'danger':
                        Icon = CircleExclamation;
                        break;
                    case 'warn':
                        Icon = CircleExclamation;
                        break;
                    case 'info':
                        Icon = CircleInfo;
                        break;
                }
            }

            let icon_style: any = {};
            if (alert_modal?.iconColor)
                icon_style.color = alert_modal.iconColor;
            if (alert_modal?.iconWidth)
                icon_style.width = alert_modal.iconWidth;

            let close_button_variant = alert_modal?.closeButtonVariant,
                close_button_text = alert_modal?.closeButtonText || 'Close';
            if (!close_button_variant) {
                switch (alert_modal.variant) {
                    case 'success':
                        close_button_variant = 'success';
                        break;
                    case 'danger':
                        close_button_variant = 'danger';
                        break;
                    case 'warn':
                        close_button_variant = 'warn';
                        break;
                    case 'info':
                        close_button_variant = 'info';
                        break;
                }
            }

            Modal = (
                <div
                    ref={modalWindow}
                    onClick={(event) => event.stopPropagation()}
                    className={`${styles['modal-window']} ${styles['alert-modal-window']} ${alert_modal?.className || ''} ${styles[alert_modal.variant] || ''}`}
                >
                    {Icon && (
                        <Icon className={styles['icon']} style={icon_style} />
                    )}
                    {alert_modal?.title && (
                        <span className={styles['title']}>
                            {alert_modal.title}
                        </span>
                    )}
                    {(alert_modal?.message &&
                        typeof alert_modal.message === 'string' && (
                            <span className={styles['message']}>
                                {alert_modal.message}
                            </span>
                        )) ||
                        (alert_modal?.message && (
                            <div className={styles['message']}>
                                {alert_modal?.message}
                            </div>
                        ))}
                    <div className={styles['button-block']}>
                        {!alert_modal.removeDefaultCloseButton && (
                            <Button
                                className={`${alert_modal.makeCloseButtonDefault ? 'default' : ''}`}
                                color={close_button_variant}
                                onClick={() => closeModal()}
                            >
                                {close_button_text}
                            </Button>
                        )}
                        {alert_modal.customButton}
                    </div>
                </div>
            );
            break;
        case 'custom':
            const custom_modal: CustomModal = modal;
            Modal = (
                <div
                    ref={modalWindow}
                    onClick={(event) => event.stopPropagation()}
                    className={`${styles['modal-window']} ${custom_modal?.className || ''}`}
                >
                    {custom_modal.content}
                </div>
            );
            break;
    }

    return (
        <div
            className={styles['modal-overlay']}
            onClick={
                modal?.preventCloseOnBackgroundClick
                    ? undefined
                    : () => closeModal()
            }
        >
            {Modal}
        </div>
    );
}

export { ModalOverlay, modalContext, ModalProvider };
