/**
 * @file index.tsx
 * @description Radio sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import Radio from '../../Radio';

/**
 * Radio sample section.
 * @returns Returns the component.
 */
function RadioSampleSection() {
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
            <div>
                <h1>Default Radios</h1>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    {' '}
                    <Radio
                        labelText="Primary"
                        id="r-1"
                        name="rg-1"
                        value="r1"
                    />
                    <Radio
                        labelText="Red"
                        color="red"
                        id="r-2"
                        name="rg-1"
                        value="r2"
                    />
                    <Radio
                        labelText="Orange"
                        color="orange"
                        id="r-3"
                        name="rg-1"
                        value="r3"
                    />
                    <Radio
                        labelText="Yellow"
                        color="yellow"
                        id="r-4"
                        name="rg-1"
                        value="r4"
                    />
                    <Radio
                        labelText="Green"
                        color="green"
                        id="r-5"
                        name="rg-1"
                        value="r5"
                    />
                    <Radio
                        labelText="Blue"
                        color="blue"
                        id="r-6"
                        name="rg-1"
                        value="r6"
                    />
                    <Radio
                        labelText="Purple"
                        color="purple"
                        id="r-7"
                        name="rg-1"
                        value="r7"
                    />
                </div>

                <h1 style={{ marginTop: '26px' }}>Disabled Radios</h1>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <Radio
                        labelText="Primary"
                        id="dr-1"
                        name="drg-1"
                        value="dr1"
                        disabled
                    />
                    <Radio
                        labelText="Red"
                        color="red"
                        id="dr-2"
                        name="drg-1"
                        value="dr2"
                        disabled
                    />
                    <Radio
                        labelText="Orange"
                        color="orange"
                        id="dr-3"
                        name="drg-1"
                        value="dr3"
                        disabled
                    />
                    <Radio
                        labelText="Yellow"
                        color="yellow"
                        id="dr-4"
                        name="drg-1"
                        value="dr4"
                        disabled
                    />
                    <Radio
                        labelText="Green"
                        color="green"
                        id="dr-5"
                        name="drg-1"
                        value="dr5"
                        disabled
                    />
                    <Radio
                        labelText="Blue"
                        color="blue"
                        id="dr-6"
                        name="drg-1"
                        value="dr6"
                        disabled
                    />
                    <Radio
                        labelText="Purple"
                        color="purple"
                        id="dr-7"
                        name="drg-1"
                        value="dr7"
                        disabled
                    />
                </div>

                <h1 style={{ marginTop: '26px' }}>Sized Radios</h1>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <Radio
                        labelText="Small"
                        id="sr-small"
                        size="small"
                        name="srg"
                        value="srsmall"
                    />
                    <Radio
                        labelText="Default"
                        id="sr-default"
                        name="srg"
                        value="srdefault"
                    />
                    <Radio
                        labelText="Large"
                        id="sr-large"
                        size="large"
                        name="srg"
                        value="srlarge"
                    />
                </div>
            </div>
        </FlexibleSection>
    );
}

export default RadioSampleSection;
