/**
 * @file index.tsx
 * @description Input sample section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { FlexibleSection } from '../../Content/components/GridSection';
import { SectionTitle } from '../../Content/components/GridSection/components';
import Input from '../../Input';
import { Envelope } from '../../Icons/Envelope';
import { Lock } from '../../Icons/Lock';
import { MagnifyingGlass } from '../../Icons/MagnifyingGlass';
import { AddressBook } from '../../Icons/AddressBook';
import { CircleInfo } from '../../Icons/CircleInfo';

/**
 * Input sample section.
 * @returns Returns the component.
 */
const InputSampleSection: FunctionComponent = function () {
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
                        rowGap: '8px',
                    }}
                >
                    <Input
                        type="text"
                        placeholder="Primary"
                        wrapperProps={{ style: { width: '250px' } }}
                    />{' '}
                    <Input
                        type="text"
                        color="red"
                        placeholder="Red"
                        wrapperProps={{ style: { width: '250px' } }}
                    />{' '}
                    <Input
                        type="text"
                        color="orange"
                        placeholder="Orange"
                        wrapperProps={{ style: { width: '250px' } }}
                    />{' '}
                    <Input
                        type="text"
                        color="yellow"
                        placeholder="Yellow"
                        wrapperProps={{ style: { width: '250px' } }}
                    />{' '}
                    <Input
                        type="text"
                        color="green"
                        placeholder="Green"
                        wrapperProps={{ style: { width: '250px' } }}
                    />{' '}
                    <Input
                        type="text"
                        color="blue"
                        placeholder="Blue"
                        wrapperProps={{ style: { width: '250px' } }}
                    />{' '}
                    <Input
                        type="text"
                        color="purple"
                        placeholder="Purple"
                        wrapperProps={{ style: { width: '250px' } }}
                    />{' '}
                </div>
                <SectionTitle style={{ marginTop: '28px' }}>
                    Disabled Inputs
                </SectionTitle>
                <Input
                    type="text"
                    placeholder="This input is disabled"
                    wrapperProps={{ style: { width: '250px' } }}
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
                                position: 'left',
                                icon: Envelope,
                            }}
                            placeholder="Email"
                            wrapperProps={{ style: { width: '250px' } }}
                        />{' '}
                        <Input
                            type="password"
                            icon={{
                                position: 'left',
                                icon: Lock,
                            }}
                            placeholder="Password"
                            wrapperProps={{ style: { width: '250px' } }}
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
                                position: 'right',
                                icon: MagnifyingGlass,
                            }}
                            placeholder="Search"
                            wrapperProps={{ style: { width: '250px' } }}
                        />{' '}
                        <Input
                            type="tel"
                            icon={{
                                position: 'right',
                                icon: AddressBook,
                            }}
                            placeholder="Phone Number"
                            wrapperProps={{ style: { width: '250px' } }}
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
                            inputSize="small"
                            placeholder="Small"
                            wrapperProps={{ style: { width: '100px' } }}
                        />{' '}
                        <Input
                            type="text"
                            placeholder="Default"
                            wrapperProps={{ style: { width: '100px' } }}
                        />{' '}
                        <Input
                            type="text"
                            inputSize="large"
                            placeholder="Large"
                            wrapperProps={{ style: { width: '100px' } }}
                        />
                    </div>
                    <div>
                        {' '}
                        <Input
                            type="text"
                            inputSize="small"
                            icon={{
                                position: 'right',
                                icon: CircleInfo,
                            }}
                            placeholder="Small"
                            wrapperProps={{ style: { width: '100px' } }}
                        />{' '}
                        <Input
                            type="text"
                            icon={{
                                position: 'right',
                                icon: CircleInfo,
                            }}
                            placeholder="Default"
                            wrapperProps={{ style: { width: '100px' } }}
                        />{' '}
                        <Input
                            type="text"
                            inputSize="large"
                            icon={{
                                position: 'right',
                                icon: CircleInfo,
                            }}
                            placeholder="Large"
                            wrapperProps={{ style: { width: '100px' } }}
                        />
                    </div>
                </div>
            </div>
        </FlexibleSection>
    );
};

export default InputSampleSection;
