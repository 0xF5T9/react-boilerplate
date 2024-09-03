/**
 * @file index.tsx
 * @description Labeled input sample section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { FlexibleSection } from '../../Content/components/GridSection';
import { SectionTitle } from '../../Content/components/GridSection/components';
import LabeledInput from '../../LabeledInput';

/**
 * Labeled input sample section.
 * @returns Returns the component.
 */
const LabeledInputSampleSection: FunctionComponent = function () {
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
                <SectionTitle>Default Inputs</SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <LabeledInput
                        label="Primary"
                        placeholder="Primary"
                        width={250}
                        labelWidth={72}
                    />
                    <LabeledInput
                        label="Red"
                        placeholder="Red"
                        color="red"
                        width={250}
                        labelWidth={72}
                    />
                    <LabeledInput
                        label="Orange"
                        placeholder="Orange"
                        color="orange"
                        width={250}
                        labelWidth={72}
                    />
                    <LabeledInput
                        label="Yellow"
                        placeholder="Yellow"
                        color="yellow"
                        width={250}
                        labelWidth={72}
                    />
                    <LabeledInput
                        label="Green"
                        placeholder="Green"
                        color="green"
                        width={250}
                        labelWidth={72}
                    />
                    <LabeledInput
                        label="Blue"
                        placeholder="Blue"
                        color="blue"
                        width={250}
                        labelWidth={72}
                    />
                    <LabeledInput
                        label="Purple"
                        placeholder="Purple"
                        color="purple"
                        width={250}
                        labelWidth={72}
                    />
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Disabled Inputs
                </SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <LabeledInput
                        label="Primary"
                        placeholder="This input is disabled"
                        width={250}
                        labelWidth={72}
                        disabled
                    />

                    <LabeledInput
                        label="Red"
                        placeholder="This input is disabled"
                        color="red"
                        width={250}
                        labelWidth={72}
                        disabled
                    />

                    <LabeledInput
                        label="Orange"
                        placeholder="This input is disabled"
                        color="orange"
                        width={250}
                        labelWidth={72}
                        disabled
                    />

                    <LabeledInput
                        label="Yellow"
                        placeholder="This input is disabled"
                        color="yellow"
                        width={250}
                        labelWidth={72}
                        disabled
                    />

                    <LabeledInput
                        label="Green"
                        placeholder="This input is disabled"
                        color="green"
                        width={250}
                        labelWidth={72}
                        disabled
                    />

                    <LabeledInput
                        label="Blue"
                        placeholder="This input is disabled"
                        color="blue"
                        width={250}
                        labelWidth={72}
                        disabled
                    />

                    <LabeledInput
                        label="Purple"
                        placeholder="This input is disabled"
                        color="purple"
                        width={250}
                        labelWidth={72}
                        disabled
                    />
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Sized Inputs
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
                    <LabeledInput
                        label="Small"
                        placeholder="Small"
                        inputSize="small"
                        width={150}
                    />
                    <LabeledInput
                        label="Default"
                        placeholder="Default"
                        width={150}
                    />
                    <LabeledInput
                        label="Large"
                        placeholder="Large"
                        inputSize="large"
                        width={150}
                    />
                </div>
            </div>
        </FlexibleSection>
    );
};

export default LabeledInputSampleSection;
