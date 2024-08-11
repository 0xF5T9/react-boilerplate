/**
 * @file index.tsx
 * @description Input sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import Input from '../../Input';

/**
 * Input sample section.
 * @returns Returns the component.
 */
function InputSampleSection() {
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
                        rowGap: '5px',
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
                <h2 style={{ marginTop: '26px' }}>Disabled Inputs</h2>
                <Input
                    type="text"
                    placeholder="This input is disabled"
                    inputStyle={{ width: '250px' }}
                    disabled
                />{' '}
                <h2 style={{ marginTop: '26px' }}>Icon Inputs</h2>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                        rowGap: '5px',
                    }}
                >
                    <div>
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
                    <div>
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
                <h2 style={{ marginTop: '26px' }}>Sized Inputs</h2>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                        rowGap: '5px',
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
