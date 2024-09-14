/**
 * @file index.tsx
 * @description Button sample section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { FlexibleSection } from '~/ts/components/Content/components/GridSection';
import { SectionTitle } from '~/ts/components/Content/components/GridSection/components';
import Button from '~/ts/components/Button';
import { CircleLoading } from '~/ts/components/Icons/CircleLoading';

/**
 * Button sample section.
 * @returns Returns the component.
 */
const ButtonSampleSection: FunctionComponent = function () {
    function handlePlayClickSound() {
        const audio = new Audio(
            '/assets/boilerplate/sound/ClickSoundEffect.wav'
        );
        audio.play();
    }

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
            <div>
                <SectionTitle>Button Variants</SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <Button>Primary</Button>{' '}
                    <Button color="danger">Danger</Button>{' '}
                    <Button color="success">Success</Button>{' '}
                    <Button color="warn">Warn</Button>{' '}
                    <Button color="info">Info</Button>{' '}
                    <Button color="gray">Gray</Button>{' '}
                    <Button color="white">White</Button>
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Disabled Buttons
                </SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
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
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Icon Buttons
                </SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
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
                            // verticalAlign: 'bottom',
                        }}
                    >
                        <CircleLoading
                            style={{ height: '1em', alignSelf: 'center' }}
                        />
                        Loading
                    </Button>{' '}
                    <Button color="white">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                        Open
                    </Button>
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Sized Buttons
                </SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <Button size="small">Small</Button>
                    <Button>Default</Button>
                    <Button size="large">Large</Button>
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Functional Buttons
                </SectionTitle>
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
                        id="click-sound-button"
                        onClick={handlePlayClickSound}
                    >
                        Click Sound
                    </Button>
                </div>
            </div>
        </FlexibleSection>
    );
};

export default ButtonSampleSection;
