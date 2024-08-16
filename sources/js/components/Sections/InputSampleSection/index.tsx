/**
 * @file index.tsx
 * @description Input sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import { SectionTitle } from '../../Content/components/GridSection/components';
import Input from '../../Input';

/**
 * Input sample section.
 * @returns Returns the component.
 */
function InputSampleSection() {
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
                <SectionTitle>Default Inputs</SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                        rowGap: '8px',
                    }}
                >
                    <Input
                        type="text"
                        placeholder="Primary"
                        inputStyle={{ width: '250px' }}
                    />{' '}
                    <Input
                        type="text"
                        color="red"
                        placeholder="Red"
                        inputStyle={{ width: '250px' }}
                    />{' '}
                    <Input
                        type="text"
                        color="orange"
                        placeholder="Orange"
                        inputStyle={{ width: '250px' }}
                    />{' '}
                    <Input
                        type="text"
                        color="yellow"
                        placeholder="Yellow"
                        inputStyle={{ width: '250px' }}
                    />{' '}
                    <Input
                        type="text"
                        color="green"
                        placeholder="Green"
                        inputStyle={{ width: '250px' }}
                    />{' '}
                    <Input
                        type="text"
                        color="blue"
                        placeholder="Blue"
                        inputStyle={{ width: '250px' }}
                    />{' '}
                    <Input
                        type="text"
                        color="purple"
                        placeholder="Purple"
                        inputStyle={{ width: '250px' }}
                    />{' '}
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Disabled Inputs
                </SectionTitle>
                <Input
                    type="text"
                    placeholder="This input is disabled"
                    inputStyle={{ width: '250px' }}
                    disabled
                />{' '}
                <SectionTitle style={{ marginTop: '28px' }}>
                    Icon Inputs
                </SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                        rowGap: '8px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexFlow: 'row wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                    >
                        <Input
                            type="email"
                            icon={{
                                iconPosition: 'left',
                                iconClass: 'fa-solid fa-envelope',
                            }}
                            placeholder="Email"
                            inputStyle={{ width: '250px' }}
                        />{' '}
                        <Input
                            type="password"
                            icon={{
                                iconPosition: 'left',
                                iconClass: 'fa-solid fa-lock',
                            }}
                            placeholder="Password"
                            inputStyle={{ width: '250px' }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexFlow: 'row wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                    >
                        <Input
                            type="text"
                            icon={{
                                iconPosition: 'right',
                                iconClass: 'fa-solid fa-search',
                            }}
                            placeholder="Search"
                            inputStyle={{ width: '250px' }}
                        />{' '}
                        <Input
                            type="tel"
                            icon={{
                                iconPosition: 'right',
                                iconClass: 'fa-solid fa-address-book',
                            }}
                            placeholder="Phone Number"
                            inputStyle={{ width: '250px' }}
                        />
                    </div>
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Sized Inputs
                </SectionTitle>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                        rowGap: '8px',
                    }}
                >
                    <div>
                        <Input
                            type="text"
                            size="small"
                            placeholder="Small"
                            inputStyle={{ width: '100px' }}
                        />{' '}
                        <Input
                            type="text"
                            placeholder="Default"
                            inputStyle={{ width: '100px' }}
                        />{' '}
                        <Input
                            type="text"
                            size="large"
                            placeholder="Large"
                            inputStyle={{ width: '100px' }}
                        />
                    </div>
                    <div>
                        {' '}
                        <Input
                            type="text"
                            size="small"
                            icon={{
                                iconPosition: 'right',
                                iconClass: 'fa-solid fa-info-circle',
                            }}
                            placeholder="Small"
                            inputStyle={{ width: '100px' }}
                        />{' '}
                        <Input
                            type="text"
                            icon={{
                                iconPosition: 'right',
                                iconClass: 'fa-solid fa-info-circle',
                            }}
                            placeholder="Default"
                            inputStyle={{ width: '100px' }}
                        />{' '}
                        <Input
                            type="text"
                            size="large"
                            icon={{
                                iconPosition: 'right',
                                iconClass: 'fa-solid fa-info-circle',
                            }}
                            placeholder="Large"
                            inputStyle={{ width: '100px' }}
                        />
                    </div>
                </div>
            </div>
        </FlexibleSection>
    );
}

export default InputSampleSection;
