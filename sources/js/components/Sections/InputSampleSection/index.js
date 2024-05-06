/**
 * @file index.js
 * @description Input sample section.
 */

'use strict';
import ContentSection from '../../Content/ContentSection';
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
                inputProps={{ style: { width: '250px' } }}
            />{' '}
            <Input
                type="text"
                altStyle="alt"
                placeholder="Primary"
                inputProps={{ style: { width: '250px' } }}
            />
            <br />
            <Input
                type="text"
                color="red"
                placeholder="Red"
                inputProps={{ style: { width: '250px' } }}
            />{' '}
            <Input
                type="text"
                color="red"
                altStyle="alt"
                placeholder="Red"
                inputProps={{ style: { width: '250px' } }}
            />
            <br />
            <Input
                type="text"
                color="orange"
                placeholder="Orange"
                inputProps={{ style: { width: '250px' } }}
            />{' '}
            <Input
                type="text"
                color="orange"
                altStyle="alt"
                placeholder="Orange"
                inputProps={{ style: { width: '250px' } }}
            />
            <br />
            <Input
                type="text"
                color="yellow"
                placeholder="Yellow"
                inputProps={{ style: { width: '250px' } }}
            />{' '}
            <Input
                type="text"
                color="yellow"
                altStyle="alt"
                placeholder="Yellow"
                inputProps={{ style: { width: '250px' } }}
            />
            <br />
            <Input
                type="text"
                color="green"
                placeholder="Green"
                inputProps={{ style: { width: '250px' } }}
            />{' '}
            <Input
                type="text"
                color="green"
                altStyle="alt"
                placeholder="Green"
                inputProps={{ style: { width: '250px' } }}
            />
            <br />
            <Input
                type="text"
                color="blue"
                placeholder="Blue"
                inputProps={{ style: { width: '250px' } }}
            />{' '}
            <Input
                type="text"
                color="blue"
                altStyle="alt"
                placeholder="Blue"
                inputProps={{ style: { width: '250px' } }}
            />
            <br />
            <Input
                type="text"
                color="purple"
                placeholder="Purple"
                inputProps={{ style: { width: '250px' } }}
            />{' '}
            <Input
                type="text"
                color="purple"
                altStyle="alt"
                placeholder="Purple"
                inputProps={{ style: { width: '250px' } }}
                disabled
            />
            <h1 style={{ marginTop: '26px' }}>Disabled Input</h1>
            <Input
                type="text"
                placeholder="This input is disabled"
                inputProps={{ style: { width: '250px' } }}
                disabled
            />{' '}
            <Input
                type="text"
                altStyle="alt"
                placeholder="This input is disabled"
                inputProps={{ style: { width: '250px' } }}
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
                inputProps={{ style: { width: '250px' } }}
            />{' '}
            <Input
                type="password"
                icon={{
                    iconPosition: 'left',
                    iconClass: 'fa-solid fa-lock',
                }}
                placeholder="Password"
                inputProps={{ style: { width: '250px' } }}
            />
            <br />
            <Input
                type="text"
                icon={{
                    iconPosition: 'right',
                    iconClass: 'fa-solid fa-search',
                }}
                placeholder="Search"
                inputProps={{ style: { width: '250px' } }}
            />{' '}
            <Input
                type="text"
                icon={{
                    iconPosition: 'right',
                    iconClass: 'fa-solid fa-address-book',
                }}
                placeholder="Phone Number"
                inputProps={{ style: { width: '250px' } }}
            />
            <h1 style={{ marginTop: '26px' }}>Sized Input</h1>
            <Input
                type="text"
                size="small"
                placeholder="Small"
                inputProps={{ style: { width: '100px' } }}
            />{' '}
            <Input
                type="text"
                placeholder="Default"
                inputProps={{ style: { width: '100px' } }}
            />{' '}
            <Input
                type="text"
                size="large"
                placeholder="Large"
                inputProps={{ style: { width: '100px' } }}
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
                inputProps={{ style: { width: '100px' } }}
            />{' '}
            <Input
                type="text"
                icon={{
                    iconPosition: 'right',
                    iconClass: 'fa-solid fa-info-circle',
                }}
                placeholder="Default"
                inputProps={{ style: { width: '100px' } }}
            />{' '}
            <Input
                type="text"
                size="large"
                icon={{
                    iconPosition: 'right',
                    iconClass: 'fa-solid fa-info-circle',
                }}
                placeholder="Large"
                inputProps={{ style: { width: '100px' } }}
            />
        </ContentSection>
    );
}

export default InputSampleSection;
