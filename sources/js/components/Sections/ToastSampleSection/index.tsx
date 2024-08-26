/**
 * @file index.tsx
 * @description Toast sample section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { FlexibleSection } from '../../Content/components/GridSection';
import {
    SectionTitle,
    SectionBlock,
} from '../../Content/components/GridSection/components';
import Button from '../../Button';
import { showToast } from '../../Toast';

import * as toastStyles from '../../Toast/Toast.module.css';

/**
 * Toast sample section.
 * @returns Returns the component.
 */
const ToastSampleSection: FunctionComponent = function () {
    return (
        <FlexibleSection
            contentProps={{
                style: {
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '50px 20px',
                    textAlign: 'center',
                },
            }}
        >
            <SectionBlock>
                <SectionTitle>Toast Variants</SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'initial',
                    }}
                >
                    <div
                        className={`${toastStyles['toast']} ${toastStyles['toast-success']}`}
                    >
                        <div className={toastStyles['toast-icon']}>
                            <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <div className={toastStyles['toast-message']}>
                            <div className={toastStyles['toast-title']}>
                                Success
                            </div>
                            <div className={toastStyles['toast-desc']}>
                                Your request has been sent successfully.
                            </div>
                        </div>
                        <div className={toastStyles['toast-close']}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div
                        className={`${toastStyles['toast']} ${toastStyles['toast-danger']}`}
                    >
                        <div className={toastStyles['toast-icon']}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <div className={toastStyles['toast-message']}>
                            <div className={toastStyles['toast-title']}>
                                Error
                            </div>
                            <div className={toastStyles['toast-desc']}>
                                Unable to connect to the remote server.
                            </div>
                        </div>
                        <div className={toastStyles['toast-close']}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div
                        className={`${toastStyles['toast']} ${toastStyles['toast-warn']}`}
                    >
                        <div className={toastStyles['toast-icon']}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <div className={toastStyles['toast-message']}>
                            <div className={toastStyles['toast-title']}>
                                Warn
                            </div>
                            <div className={toastStyles['toast-desc']}>
                                Your license will expire within 3 days.
                            </div>
                        </div>
                        <div className={toastStyles['toast-close']}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div
                        className={`${toastStyles['toast']} ${toastStyles['toast-info']}`}
                    >
                        <div className={toastStyles['toast-icon']}>
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                        <div className={toastStyles['toast-message']}>
                            <div className={toastStyles['toast-title']}>
                                Info
                            </div>
                            <div className={toastStyles['toast-desc']}>
                                New version available for download!
                            </div>
                        </div>
                        <div className={toastStyles['toast-close']}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div
                        className={`${toastStyles['toast']} ${toastStyles['toast-message']}`}
                    >
                        <div className={toastStyles['toast-icon']}>
                            <i className="fa-solid fa-message"></i>
                        </div>
                        <div className={toastStyles['toast-message']}>
                            <div className={toastStyles['toast-title']}>
                                Message
                            </div>
                            <div className={toastStyles['toast-desc']}>
                                You have new message(s).
                            </div>
                        </div>
                        <div className={toastStyles['toast-close']}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock>
                <SectionTitle>Show Toast</SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <Button
                        color="success"
                        onClick={() =>
                            showToast({
                                variant: 'success',
                                title: 'Success',
                                message:
                                    'Your request has been sent successfully.',
                            })
                        }
                    >
                        Success Toast
                    </Button>{' '}
                    <Button
                        color="danger"
                        onClick={() =>
                            showToast({
                                variant: 'danger',
                                title: 'Error',
                                message:
                                    'Unable to connect to the remote server.',
                            })
                        }
                    >
                        Danger Toast
                    </Button>{' '}
                    <Button
                        color="warn"
                        onClick={() =>
                            showToast({
                                variant: 'warn',
                                title: 'Warning',
                                message:
                                    'Your license will expire within 3 days.',
                            })
                        }
                    >
                        Warn Toast
                    </Button>{' '}
                    <Button
                        color="info"
                        onClick={() =>
                            showToast({
                                variant: 'info',
                                title: 'Info',
                                message: 'New version available for download!',
                            })
                        }
                    >
                        Info Toast
                    </Button>{' '}
                    <Button
                        color="info"
                        onClick={() =>
                            showToast({
                                variant: 'message',
                                title: 'Message',
                                message: 'You have new message(s).',
                            })
                        }
                    >
                        Message Toast
                    </Button>
                </div>
            </SectionBlock>
        </FlexibleSection>
    );
};

export default ToastSampleSection;
