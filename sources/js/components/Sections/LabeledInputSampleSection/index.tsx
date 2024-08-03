/**
 * @file index.tsx
 * @description Labeled input sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import LabeledInput from '../../LabeledInput';

import * as styles from './LabeledInputSampleSection.module.css';

/**
 * Labeled input sample section.
 * @returns Returns the component.
 */
function LabeledInputSampleSection() {
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
                <h1>Default Inputs</h1>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column wrap',
                        alignItems: 'center',
                    }}
                >
                    <LabeledInput label="Primary" width={250} labelWidth={72} />
                    <br />
                    <LabeledInput
                        label="Red"
                        color="red"
                        width={250}
                        labelWidth={72}
                    />
                    <br />
                    <LabeledInput
                        label="Orange"
                        color="orange"
                        width={250}
                        labelWidth={72}
                    />
                    <br />
                    <LabeledInput
                        label="Yellow"
                        color="yellow"
                        width={250}
                        labelWidth={72}
                    />
                    <br />
                    <LabeledInput
                        label="Green"
                        color="green"
                        width={250}
                        labelWidth={72}
                    />
                    <br />
                    <LabeledInput
                        label="Blue"
                        color="blue"
                        width={250}
                        labelWidth={72}
                    />
                    <br />
                    <LabeledInput
                        label="Purple"
                        color="purple"
                        width={250}
                        labelWidth={72}
                    />
                </div>
                <h1 style={{ marginTop: '26px' }}>Disabled Inputs</h1>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column wrap',
                        alignItems: 'center',
                    }}
                >
                    <LabeledInput
                        label="Primary"
                        width={250}
                        labelWidth={72}
                        disabled
                    />
                    <br />
                    <LabeledInput
                        label="Red"
                        color="red"
                        width={250}
                        labelWidth={72}
                        disabled
                    />
                    <br />
                    <LabeledInput
                        label="Orange"
                        color="orange"
                        width={250}
                        labelWidth={72}
                        disabled
                    />
                    <br />
                    <LabeledInput
                        label="Yellow"
                        color="yellow"
                        width={250}
                        labelWidth={72}
                        disabled
                    />
                    <br />
                    <LabeledInput
                        label="Green"
                        color="green"
                        width={250}
                        labelWidth={72}
                        disabled
                    />
                    <br />
                    <LabeledInput
                        label="Blue"
                        color="blue"
                        width={250}
                        labelWidth={72}
                        disabled
                    />
                    <br />
                    <LabeledInput
                        label="Purple"
                        color="purple"
                        width={250}
                        labelWidth={72}
                        disabled
                    />
                </div>
                <h1 style={{ marginTop: '26px' }}>Sized Inputs</h1>
                <LabeledInput label="Small" size="small" width={150} />{' '}
                <LabeledInput label="Default" width={150} />{' '}
                <LabeledInput label="Large" size="large" width={150} />
            </div>
        </FlexibleSection>
    );
}

export default LabeledInputSampleSection;
