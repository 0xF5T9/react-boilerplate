/**
 * @file index.tsx
 * @description Modal component.
 */

'use strict';
import {
    FunctionComponent,
    CSSProperties,
    useState,
    useEffect,
    useRef,
    useContext,
    createContext,
    ReactNode,
} from 'react';
import PropTypes from 'prop-types';
import { AlertModal, CustomModal, Modal, ModalHook } from '../../types/modal';

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
const ModalProvider: FunctionComponent<{ children: ReactNode }> = function ({
    children,
}) {
    const { setAllowScrolling } = useContext(globalContext);

    // 'modalVisibility' is used to check if there is an opening modal. (Don't use 'modal')
    // 'setModalVisibility' is used to close any opening modal programmatically.
    const [modal, setModal] = useState<Modal>(null),
        [modalVisibility, setModalVisibility] = useState(false);

    useEffect(() => {
        setModalVisibility(!!modal);
        setAllowScrolling(!!!modal);
    }, [modal]);

    const value: ModalHook = {
        modal,
        setModal,
        modalVisibility,
        setModalVisibility,
    };

    return (
        <modalContext.Provider value={value}>{children}</modalContext.Provider>
    );
};

ModalProvider.propTypes = {
    children: PropTypes.node,
};

/**
 * Modal overlay.
 * @returns Returns the component.
 */
const ModalOverlay: FunctionComponent = function () {
    const { modal, setModal, modalVisibility } = useModal();

    const modalOverlay = useRef<HTMLDivElement>(),
        modalWindow = useRef<HTMLDivElement>();

    function closeModal() {
        // Trigger modal window close animation animation.
        modalWindow?.current?.classList?.add(`${styles['is-close']}`);

        // Improvise: For chrome version less than 127, animation events and :has css pseudo are not supported.
        if (
            !!!getComputedStyle(modalOverlay?.current).animation.includes(
                styles['modal-overlay-fade-out'] // It should be fade-out if :has is supported.
            )
        ) {
            modalOverlay?.current?.classList.add(`${styles['is-close']}`);
            setTimeout(
                () => {
                    modalOverlay?.current?.classList.remove(
                        `${styles['is-close']}`
                    );
                    setModal(null);
                },
                parseFloat(
                    getComputedStyle(
                        modalOverlay?.current
                    ).animationDuration.replace('s', '')
                ) *
                    1000 +
                    1
            );
        }
    }

    // Actually destroy the modal element on the animation end.
    useEffect(() => {
        function handleModalOverlayCloseAnimationEnd(event: AnimationEvent) {
            if (
                event.target === event.currentTarget &&
                event.animationName === styles['modal-overlay-fade-out']
            )
                setModal(null);
        }

        modalOverlay?.current?.addEventListener(
            'animationend',
            handleModalOverlayCloseAnimationEnd
        );

        return () => {
            modalOverlay?.current?.removeEventListener(
                'animationend',
                handleModalOverlayCloseAnimationEnd
            );
        };
    }, []);

    useEffect(() => {
        // Close modal on escape key press.
        function handleKeyDown(event: any) {
            if (modal && event.keyCode === 27) closeModal();
        }
        window.addEventListener('keydown', handleKeyDown);

        // Set focus for default button.
        setTimeout(() => {
            (
                modalWindow?.current?.querySelector(
                    'button.default'
                ) as HTMLButtonElement
            )?.focus();
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

            let iconStyle: CSSProperties = {};
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
            ref={modalOverlay}
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
};

/**
 * Hook provides a convenient way to use modal component.
 * @returns modal, setModal, modalVisibility, setModalVisibility
 */
function useModal(): ModalHook {
    return useContext(modalContext);
}

export { ModalOverlay, ModalProvider, useModal };
