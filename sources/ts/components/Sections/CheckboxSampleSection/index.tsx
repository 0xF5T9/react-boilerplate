/**
 * @file index.tsx
 * @description Checkbox sample section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { FlexibleSection } from '~/ts/components/Content/components/GridSection';
import { SectionTitle } from '~/ts/components/Content/components/GridSection/components';
import Checkbox from '~/ts/components/Checkbox';

/**
 * Checkbox sample section.
 * @returns Returns the component.
 */
const CheckboxSampleSection: FunctionComponent = function () {
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
                <SectionTitle>Default Checkboxes</SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        columnGap: '8px',
                        rowGap: '12px',
                    }}
                >
                    <Checkbox labelText="Primary" id="cb-1" />{' '}
                    <Checkbox labelText="Red" color="red" id="cb-2" />{' '}
                    <Checkbox labelText="Orange" color="orange" id="cb-3" />{' '}
                    <Checkbox labelText="Yellow" color="yellow" id="cb-4" />{' '}
                    <Checkbox labelText="Green" color="green" id="cb-5" />{' '}
                    <Checkbox labelText="Blue" color="blue" id="cb-6" />{' '}
                    <Checkbox labelText="Purple" color="purple" id="cb-7" />
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Disabled Checkboxes
                </SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        columnGap: '8px',
                        rowGap: '12px',
                    }}
                >
                    <Checkbox labelText="Primary" id="dcb-1" disabled />{' '}
                    <Checkbox labelText="Red" color="red" id="dcb-2" disabled />{' '}
                    <Checkbox
                        labelText="Orange"
                        color="orange"
                        id="dcb-3"
                        disabled
                    />{' '}
                    <Checkbox
                        labelText="Yellow"
                        color="yellow"
                        id="dcb-4"
                        disabled
                    />{' '}
                    <Checkbox
                        labelText="Green"
                        color="green"
                        id="dcb-5"
                        disabled
                    />{' '}
                    <Checkbox
                        labelText="Blue"
                        color="blue"
                        id="dcb-6"
                        disabled
                    />{' '}
                    <Checkbox
                        labelText="Purple"
                        color="purple"
                        id="dcb-7"
                        disabled
                    />
                </div>

                <SectionTitle style={{ marginTop: '28px' }}>
                    Sized Checkboxes
                </SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        columnGap: '8px',
                        rowGap: '12px',
                    }}
                >
                    <Checkbox
                        labelText="Small"
                        inputSize="small"
                        id="scb-small"
                    />
                    <Checkbox labelText="Default" id="scb-default" />
                    <Checkbox
                        labelText="Large"
                        inputSize="large"
                        id="scb-large"
                    />
                </div>
            </div>
        </FlexibleSection>
    );
};

export default CheckboxSampleSection;
