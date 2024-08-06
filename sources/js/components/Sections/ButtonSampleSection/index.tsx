/**
 * @file index.tsx
 * @description Button sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import Button from '../../Button';
import { MLLoading } from '../../Icons/MLLoading';
import { showToast, ToastTypes } from '../../ToastOverlay';

import * as styles from './ButtonSampleSection.module.css';

/**
 * Button sample section.
 * @returns Returns the component.
 */
function ButtonSampleSection() {
    function handlePlayClickSound() {
        const audio = new Audio('/assets/static/sound/ClickSoundEffect.wav');
        audio.play();
    }

    return (
        <FlexibleSection
            style={{
                display: 'flex',
                flexFlow: 'columm nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 20px',
                textAlign: 'center',
            }}
        >
            <div className={styles['content']}>
                <h1>Button Variants</h1>
                <Button>Primary</Button> <Button color="danger">Danger</Button>{' '}
                <Button color="success">Success</Button>{' '}
                <Button color="warn">Warn</Button>{' '}
                <Button color="info">Info</Button>{' '}
                <Button color="gray">Gray</Button>{' '}
                <Button color="white">White</Button>
                <h1 style={{ marginTop: '26px' }}>Disabled Buttons</h1>
                <Button disabled>Primary</Button>{' '}
                <Button disabled color="danger">
                    Danger
                </Button>{' '}
                <Button disabled color="success">
                    Success
                </Button>{' '}
                <Button disabled color="warn">
                    Warn
                </Button>{' '}
                <Button disabled color="info">
                    Info
                </Button>{' '}
                <Button disabled color="gray">
                    Gray
                </Button>{' '}
                <Button disabled color="white">
                    White
                </Button>
                <h1 style={{ marginTop: '26px' }}>Icon Buttons</h1>
                <Button color="success">
                    <i className="fa-solid fa-plus"></i> Create
                </Button>{' '}
                <Button color="danger">
                    <i className="fa-solid fa-trash"></i> Delete
                </Button>{' '}
                <Button color="warn">
                    <i className="fa-solid fa-rotate"></i> Update
                </Button>{' '}
                <Button color="info">
                    <i className="fa-solid fa-upload"></i> Upload
                </Button>{' '}
                <Button
                    color="gray"
                    style={{
                        display: 'inline-flex',
                        columnGap: '4px',
                        verticalAlign: 'bottom',
                    }}
                >
                    <MLLoading style={{ height: '1em', alignSelf: 'center' }} />
                    Loading
                </Button>{' '}
                <Button color="white">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                    Open
                </Button>
                <h1 style={{ marginTop: '26px' }}>Sized Buttons</h1>
                <Button size="small">Small</Button> <Button>Default</Button>{' '}
                <Button size="large">Large</Button>
                <h1 style={{ marginTop: '26px' }}>Functional Buttons</h1>
                <Button id="click-sound-button" onClick={handlePlayClickSound}>
                    Click Sound
                </Button>{' '}
                <Button
                    color="danger"
                    onClick={() =>
                        showToast(
                            'Error',
                            'Unable to connect to the remote server.',
                            ToastTypes.Error
                        )
                    }
                >
                    Danger Toast
                </Button>{' '}
                <Button
                    color="warn"
                    onClick={() =>
                        showToast(
                            'Warning',
                            'Your license will expire within 3 days.',
                            ToastTypes.Warn
                        )
                    }
                >
                    Warn Toast
                </Button>{' '}
                <Button
                    color="success"
                    onClick={() =>
                        showToast(
                            'Success',
                            'Your request has been sent successfully.',
                            ToastTypes.Success
                        )
                    }
                >
                    Success Toast
                </Button>{' '}
                <Button
                    color="info"
                    onClick={() =>
                        showToast(
                            'Info',
                            'New version available for download!',
                            ToastTypes.Info
                        )
                    }
                >
                    Info Toast
                </Button>{' '}
                <Button
                    color="info"
                    onClick={() =>
                        showToast(
                            'Message',
                            'You have new message(s).',
                            ToastTypes.Message
                        )
                    }
                >
                    Message Toast
                </Button>
            </div>
        </FlexibleSection>
    );
}

export default ButtonSampleSection;
