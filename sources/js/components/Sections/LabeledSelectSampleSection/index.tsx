/**
 * @file index.tsx
 * @description Labeled select sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import LabeledSelect from '../../LabeledSelect';

/**
 * Labeled select sample section.
 * @returns Returns the component.
 */
function LabeledSelectSampleSection() {
    return (
        <FlexibleSection
            defaultContentStyles
            style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 20px',
                textAlign: 'center',
            }}
        >
            <div>
                <h2>Default Inputs</h2>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                        gap: '5px',
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
                <h2 style={{ marginTop: '26px' }}>Disabled Inputs</h2>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                        gap: '5px',
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
                <h2 style={{ marginTop: '26px' }}>Sized Inputs</h2>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <LabeledSelect label="Small" size="small">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>
                    <LabeledSelect label="Default">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>
                    <LabeledSelect label="Large" size="large">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>
                </div>
            </div>
        </FlexibleSection>
    );
}

export default LabeledSelectSampleSection;
