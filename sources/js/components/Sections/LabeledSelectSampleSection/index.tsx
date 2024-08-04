/**
 * @file index.tsx
 * @description Labeled select sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import LabeledSelect from '../../LabeledSelect';

import * as styles from './LabeledSelectSampleSection.module.css';

/**
 * Labeled select sample section.
 * @returns Returns the component.
 */
function LabeledSelectSampleSection() {
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
                    <LabeledSelect label="Primary" width={250} labelWidth={72}>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </LabeledSelect>
                    <br />
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
                    <br />
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
                    <br />
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
                    <br />
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
                    <br />
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
                    <br />
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
                <h1 style={{ marginTop: '26px' }}>Disabled Inputs</h1>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column wrap',
                        alignItems: 'center',
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
                    <br />
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
                    <br />
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
                    <br />
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
                    <br />
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
                    <br />
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
                    <br />
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
                <h1 style={{ marginTop: '26px' }}>Sized Inputs</h1>
                <LabeledSelect label="Small" size="small">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </LabeledSelect>{' '}
                <LabeledSelect label="Default">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </LabeledSelect>{' '}
                <LabeledSelect label="Large" size="large">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </LabeledSelect>
            </div>
        </FlexibleSection>
    );
}

export default LabeledSelectSampleSection;
