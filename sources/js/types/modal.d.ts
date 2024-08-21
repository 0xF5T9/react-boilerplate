/**
 * @file modal.d.ts
 * @description Modal related types.
 */

import { FunctionComponent } from 'react';

export type AlertModal = {
    type: 'alert';
    className?: string;
    variant?: 'success' | 'danger' | 'warn' | 'info';
    icon?: FunctionComponent<any>;
    iconColor?: string;
    iconWidth?: string;
    title?: string;
    message?: string | JSX.Element;
    closeButtonText?: string;
    closeButtonVariant?:
        | 'success'
        | 'danger'
        | 'warn'
        | 'info'
        | 'gray'
        | 'white';
    removeDefaultCloseButton?: boolean;
    makeCloseButtonDefault?: boolean;
    customButton?: JSX.Element;
};

export type CustomModal = {
    type: 'custom';
    content: JSX.Element;
    className?: string;
};

// This type is used to enforce typing on modal context values.
export type Modal =
    | (AlertModal & { preventCloseOnBackgroundClick?: boolean })
    | (CustomModal & { preventCloseOnBackgroundClick?: boolean })
    | null;

export type ModalHook = {
    modal: Modal;
    setModal: React.Dispatch<React.SetStateAction<Modal>>;
    modalVisibility: boolean;
    setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};
