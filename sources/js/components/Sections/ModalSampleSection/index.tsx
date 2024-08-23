/**
 * @file index.tsx
 * @description Modal sample section.
 */

'use strict';
import { FunctionComponent } from 'react';

import { useModal } from '../../Modal';
import { showToast } from '../../Toast';
import { CircleExclamation } from '../../Icons/CircleExclamation';
import { CircleLoading } from '../../Icons/CircleLoading';
import { FlexibleSection } from '../../Content/components/GridSection';
import {
    SectionTitle,
    SectionBlock,
} from '../../Content/components/GridSection/components';
import Button from '../../Button';

/**
 * Modal sample section.
 * @returns Returns the component.
 */
const ModalSampleSection: FunctionComponent = function () {
    const { setModal, setModalVisibility } = useModal();

    return (
        <FlexibleSection
            style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 20px',
                textAlign: 'center',
            }}
        >
            <SectionBlock>
                <SectionTitle>Alert Modal Variants</SectionTitle>
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
                            setModal({
                                type: 'alert',
                                variant: 'success',
                                title: 'Successfully',
                                message:
                                    'Your request has been sent successfully.',
                                makeCloseButtonDefault: true,
                            })
                        }
                    >
                        Success
                    </Button>
                    <Button
                        color="danger"
                        onClick={() =>
                            setModal({
                                type: 'alert',
                                variant: 'danger',
                                title: 'Error occurred',
                                message:
                                    'Unable to connect to the remote server.',
                                makeCloseButtonDefault: true,
                            })
                        }
                    >
                        Danger
                    </Button>
                    <Button
                        color="warn"
                        onClick={() =>
                            setModal({
                                type: 'alert',
                                variant: 'warn',
                                title: 'Warning',
                                message:
                                    'Your license will expire within 3 days.',
                                makeCloseButtonDefault: true,
                            })
                        }
                    >
                        Warn
                    </Button>
                    <Button
                        color="info"
                        onClick={() =>
                            setModal({
                                type: 'alert',
                                variant: 'info',
                                title: 'Info',
                                message: 'New version available for download!',
                                closeButtonText: 'Update',
                                makeCloseButtonDefault: true,
                            })
                        }
                    >
                        Info
                    </Button>
                    <Button
                        color="gray"
                        onClick={() =>
                            setModal({
                                type: 'alert',
                                icon: CircleLoading,
                                iconColor: 'gray',
                                title: 'Please wait ...',
                                message: 'This might take some time.',
                                closeButtonVariant: 'gray',
                                closeButtonText: 'Cancel',
                                makeCloseButtonDefault: true,
                            })
                        }
                    >
                        Custom
                    </Button>
                </div>
            </SectionBlock>

            <SectionBlock>
                <SectionTitle>Confirmation Modal Variants</SectionTitle>
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
                        color="info"
                        onClick={() =>
                            setModal({
                                type: 'alert',
                                title: 'Confirmation',
                                message: (
                                    <div>
                                        <span>
                                            Are you sure want to do this?
                                        </span>
                                        <br />
                                        <span
                                            style={{
                                                display: 'block',
                                                marginTop: '8px',
                                            }}
                                        >
                                            {
                                                '(Confirm button are focused by default)'
                                            }
                                        </span>
                                    </div>
                                ),
                                closeButtonText: 'Cancel',
                                closeButtonVariant: 'gray',
                                customButton: (
                                    <Button
                                        className="default"
                                        onClick={() => {
                                            setModalVisibility(false);
                                            showToast({
                                                variant: 'success',
                                                title: 'Success',
                                                message:
                                                    'This toast only shows up if you click the confirm button.',
                                            });
                                        }}
                                    >
                                        Confirm
                                    </Button>
                                ),
                            })
                        }
                    >
                        Quick
                    </Button>
                    <Button
                        color="danger"
                        onClick={() =>
                            setModal({
                                type: 'alert',
                                title: 'Confirmation',
                                message: (
                                    <div>
                                        <span>
                                            Are you sure want to delete this?
                                        </span>
                                        <br />
                                        <span
                                            style={{
                                                display: 'block',
                                                marginTop: '8px',
                                                fontWeight: 'bold',
                                                textDecoration: 'underline',
                                            }}
                                        >
                                            This action is irreversible.
                                        </span>
                                        <span
                                            style={{
                                                display: 'block',
                                                marginTop: '8px',
                                            }}
                                        >
                                            {
                                                '(Cancel button are focused by default)'
                                            }
                                        </span>
                                    </div>
                                ),
                                variant: 'danger',
                                icon: CircleExclamation,
                                closeButtonVariant: 'gray',
                                closeButtonText: 'Cancel',
                                makeCloseButtonDefault: true,
                                customButton: (
                                    <Button
                                        color="danger"
                                        onClick={() => {
                                            setModalVisibility(false);
                                            showToast({
                                                variant: 'success',
                                                title: 'Success',
                                                message:
                                                    'This toast only shows up if you click the delete button.',
                                            });
                                        }}
                                    >
                                        Delete
                                    </Button>
                                ),
                            })
                        }
                    >
                        Serious
                    </Button>
                </div>
            </SectionBlock>

            <SectionBlock>
                <SectionTitle>Custom Modal Variants</SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <style>
                        {`
                            .my-custom-modal {
                                width: 100%;
                                max-width: 1024px;
                                padding: 20px;
                                border: 2px solid var(--color-primary);
                                border-radius: 4px;
                                background: #ffffff; 
                            }

                            .my-custom-modal {
                                max-height: calc(100vh - 20px);
                                overflow: auto;
                            }
                            
                            @media only screen and (max-width: 1043px) {
                                .my-custom-modal {
                                    max-width: calc(100% - var(--modal-window-margin));
                                }
                            }

                            @media only screen and (max-width: 800px) {
                                .iframe {
                                    height: 400px;
                                }
                            }

                            @media only screen and (max-width: 412px) {
                                .iframe {
                                    height: 181px;
                                }
                            }
                        `}
                    </style>
                    <Button
                        onClick={() =>
                            setModal({
                                type: 'custom',
                                className: 'my-custom-modal',
                                content: (
                                    <>
                                        <h1>A modal that plays a video.</h1>
                                        <iframe
                                            className="iframe"
                                            width="100%"
                                            height="545"
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&showinfo=0&controls=0"
                                            title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                            style={{
                                                margin: '16px 0px',
                                                border: '0',
                                            }}
                                        ></iframe>
                                        <Button
                                            onClick={() =>
                                                setModalVisibility(false)
                                            }
                                            style={{
                                                display: 'block',
                                                width: '100px',
                                                margin: '0 auto',
                                            }}
                                        >
                                            Close
                                        </Button>
                                    </>
                                ),
                            })
                        }
                    >
                        Custom
                    </Button>
                </div>
            </SectionBlock>
        </FlexibleSection>
    );
};

export default ModalSampleSection;
