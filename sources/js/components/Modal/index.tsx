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

import { globalContext } from '../Context/Global';
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
    const { setAllowScrolling } = useContext(globalContext);

    // 'modalVisibility' is used to check if there is an opening modal. (Don't use 'modal')
    // 'setModalVisibility' is used to close any opening modal programmatically.
    const [modal, setModal]: [Modal, ModalSetter] = useState(null),
        [modalVisibility, setModalVisibility] = useState(false);

    useEffect(() => {
        setModalVisibility(!!modal);
        setAllowScrolling(!!!modal);
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
            const alertModal: AlertModal = modal;

            let Icon = alertModal?.icon;
            if (!Icon) {
                switch (alertModal.variant) {
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

            let iconStyle: any = {};
            if (alertModal?.iconColor) iconStyle.color = alertModal.iconColor;
            if (alertModal?.iconWidth) iconStyle.width = alertModal.iconWidth;

            let closeButtonVariant = alertModal?.closeButtonVariant,
                closeButtonText = alertModal?.closeButtonText || 'Close';
            if (!closeButtonVariant) {
                switch (alertModal.variant) {
                    case 'success':
                        closeButtonVariant = 'success';
                        break;
                    case 'danger':
                        closeButtonVariant = 'danger';
                        break;
                    case 'warn':
                        closeButtonVariant = 'warn';
                        break;
                    case 'info':
                        closeButtonVariant = 'info';
                        break;
                }
            }

            Modal = (
                <div
                    ref={modalWindow}
                    onClick={(event) => event.stopPropagation()}
                    className={`${styles['modal-window']} ${styles['alert-modal-window']} ${alertModal?.className || ''} ${styles[alertModal.variant] || ''}`}
                >
                    {Icon && (
                        <Icon className={styles['icon']} style={iconStyle} />
                    )}
                    {alertModal?.title && (
                        <span className={styles['title']}>
                            {alertModal.title}
                        </span>
                    )}
                    {(alertModal?.message &&
                        typeof alertModal.message === 'string' && (
                            <span className={styles['message']}>
                                {alertModal.message}
                            </span>
                        )) ||
                        (alertModal?.message && (
                            <div className={styles['message']}>
                                {alertModal?.message}
                            </div>
                        ))}
                    <div className={styles['button-block']}>
                        {!alertModal.removeDefaultCloseButton && (
                            <Button
                                className={`${alertModal.makeCloseButtonDefault ? 'default' : ''}`}
                                color={closeButtonVariant}
                                onClick={() => closeModal()}
                            >
                                {closeButtonText}
                            </Button>
                        )}
                        {alertModal.customButton}
                    </div>
                </div>
            );
            break;
        case 'custom':
            const customModal: CustomModal = modal;
            Modal = (
                <div
                    ref={modalWindow}
                    onClick={(event) => event.stopPropagation()}
                    className={`${styles['modal-window']} ${customModal?.className || ''}`}
                >
                    {customModal.content}
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
