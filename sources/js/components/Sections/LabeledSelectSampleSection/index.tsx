/**
 * @file index.tsx
 * @description Labeled select sample section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { FlexibleSection } from '../../Content/components/GridSection';
import { SectionTitle } from '../../Content/components/GridSection/components';
import LabeledSelect from '../../LabeledSelect';

/**
 * Labeled select sample section.
 * @returns Returns the component.
 */
const LabeledSelectSampleSection: FunctionComponent = function () {
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
                    <LabeledSelect label="Primary" width={250} labelWidth={72}>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Red"
                        color="red"
                        width={250}
                        labelWidth={72}
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Orange"
                        color="orange"
                        width={250}
                        labelWidth={72}
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Yellow"
                        color="yellow"
                        width={250}
                        labelWidth={72}
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Green"
                        color="green"
                        width={250}
                        labelWidth={72}
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Blue"
                        color="blue"
                        width={250}
                        labelWidth={72}
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Purple"
                        color="purple"
                        width={250}
                        labelWidth={72}
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>
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
                    <LabeledSelect
                        label="Primary"
                        width={250}
                        labelWidth={72}
                        disabled
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Red"
                        color="red"
                        width={250}
                        labelWidth={72}
                        disabled
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Orange"
                        color="orange"
                        width={250}
                        labelWidth={72}
                        disabled
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Yellow"
                        color="yellow"
                        width={250}
                        labelWidth={72}
                        disabled
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Green"
                        color="green"
                        width={250}
                        labelWidth={72}
                        disabled
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Blue"
                        color="blue"
                        width={250}
                        labelWidth={72}
                        disabled
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>

                    <LabeledSelect
                        label="Purple"
                        color="purple"
                        width={250}
                        labelWidth={72}
                        disabled
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>
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
                    <LabeledSelect label="Small" inputSize="small">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>
                    <LabeledSelect label="Default">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>
                    <LabeledSelect label="Large" inputSize="large">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>
                </div>
            </div>
        </FlexibleSection>
    );
};

export default LabeledSelectSampleSection;
