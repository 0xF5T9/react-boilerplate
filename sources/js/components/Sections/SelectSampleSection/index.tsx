/**
 * @file index.tsx
 * @description Select sample section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { FlexibleSection } from '../../Content/components/GridSection';
import { SectionTitle } from '../../Content/components/GridSection/components';
import Select from '../../Select';

/**
 * Select sample section.
 * @returns Returns the component.
 */
const SelectSampleSection: FunctionComponent = function () {
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
                <SectionTitle>Default Selects</SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <Select>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="orange">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="red">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="yellow">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="green">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="blue">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="purple">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Disabled Selects
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
                    <Select disabled>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="orange" disabled>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="red" disabled>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="yellow" disabled>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="green" disabled>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="blue" disabled>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select color="purple" disabled>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Sized Selects
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
                    <Select inputSize="small">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select inputSize="large">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>
            </div>
        </FlexibleSection>
    );
};

export default SelectSampleSection;
