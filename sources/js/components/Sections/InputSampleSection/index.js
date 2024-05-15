/**
 * @file index.js
 * @description Input sample section.
 */

'use strict';
import ContentSection from '../../Content/components/ContentSection';
import Input from '../../Input';

/**
 * The input sample section.
 */
function InputSampleSection() {
    return (
        <ContentSection id="input-sample-section" flexCenter textCenter>
            <h1>Default Inputs</h1>
            <Input
                type="text"
                placeholder="Primary"
                inputStyle={{ width: '250px' }}
            />{' '}
            <Input
                type="text"
                altStyle
                placeholder="Primary"
                inputStyle={{ width: '250px' }}
            />
            <br />
            <Input
                type="text"
                color="red"
                placeholder="Red"
                inputStyle={{ width: '250px' }}
            />{' '}
            <Input
                type="text"
                color="red"
                altStyle
                placeholder="Red"
                inputStyle={{ width: '250px' }}
            />
            <br />
            <Input
                type="text"
                color="orange"
                placeholder="Orange"
                inputStyle={{ width: '250px' }}
            />{' '}
            <Input
                type="text"
                color="orange"
                altStyle
                placeholder="Orange"
                inputStyle={{ width: '250px' }}
            />
            <br />
            <Input
                type="text"
                color="yellow"
                placeholder="Yellow"
                inputStyle={{ width: '250px' }}
            />{' '}
            <Input
                type="text"
                color="yellow"
                altStyle
                placeholder="Yellow"
                inputStyle={{ width: '250px' }}
            />
            <br />
            <Input
                type="text"
                color="green"
                placeholder="Green"
                inputStyle={{ width: '250px' }}
            />{' '}
            <Input
                type="text"
                color="green"
                altStyle
                placeholder="Green"
                inputStyle={{ width: '250px' }}
            />
            <br />
            <Input
                type="text"
                color="blue"
                placeholder="Blue"
                inputStyle={{ width: '250px' }}
            />{' '}
            <Input
                type="text"
                color="blue"
                altStyle
                placeholder="Blue"
                inputStyle={{ width: '250px' }}
            />
            <br />
            <Input
                type="text"
                color="purple"
                placeholder="Purple"
                inputStyle={{ width: '250px' }}
            />{' '}
            <Input
                type="text"
                color="purple"
                altStyle
                placeholder="Purple"
                inputStyle={{ width: '250px' }}
            />
            <h1 style={{ marginTop: '26px' }}>Disabled Input</h1>
            <Input
                type="text"
                placeholder="This input is disabled"
                inputStyle={{ width: '250px' }}
                disabled
            />{' '}
            <Input
                type="text"
                altStyle
                placeholder="This input is disabled"
                inputStyle={{ width: '250px' }}
                disabled
            />
            <h1 style={{ marginTop: '26px' }}>Icon Input</h1>
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
            <br />
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
                type="text"
                icon={{
                    iconPosition: 'right',
                    iconClass: 'fa-solid fa-address-book',
                }}
                placeholder="Phone Number"
                inputStyle={{ width: '250px' }}
            />
            <h1 style={{ marginTop: '26px' }}>Sized Input</h1>
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
            <br />
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
        </ContentSection>
    );
}

export default InputSampleSection;
