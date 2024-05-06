/**
 * @file index.js
 * @description Radio sample section.
 */

'use strict';
import ContentSection from '../../Content/ContentSection';
import Radio from '../../Radio';

/**
 * The radio sample section.
 */
function RadioSampleSection() {
    return (
        <ContentSection id="radio-sample-section" flexCenter textCenter>
            <h1>Default Radios</h1>
            <Radio
                labelText="Primary"
                id="r-1"
                name="rg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Red"
                color="red"
                id="r-2"
                name="rg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Orange"
                color="orange"
                id="r-3"
                name="rg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Yellow"
                color="yellow"
                id="r-4"
                name="rg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Green"
                color="green"
                id="r-5"
                name="rg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Blue"
                color="blue"
                id="r-6"
                name="rg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Purple"
                color="purple"
                id="r-7"
                name="rg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <h1 style={{ marginTop: '26px' }}>Alternative Radios 1</h1>
            <Radio
                labelText="Primary"
                altStyle="alt-1"
                id="ra-1"
                name="rg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Red"
                color="red"
                altStyle="alt-1"
                id="ra-2"
                name="rg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Orange"
                color="orange"
                altStyle="alt-1"
                id="ra-3"
                name="rg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Yellow"
                color="yellow"
                altStyle="alt-1"
                id="ra-4"
                name="rg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Green"
                color="green"
                altStyle="alt-1"
                id="ra-5"
                name="rg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Blue"
                color="blue"
                altStyle="alt-1"
                id="ra-6"
                name="rg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Purple"
                color="purple"
                altStyle="alt-1"
                id="ra-7"
                name="rg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <h1 style={{ marginTop: '26px' }}>Alternative Radios 2</h1>
            <Radio
                labelText="Primary"
                altStyle="alt-2"
                id="ra2-1"
                name="rg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Red"
                color="red"
                altStyle="alt-2"
                id="ra2-2"
                name="rg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Orange"
                color="orange"
                altStyle="alt-2"
                id="ra2-3"
                name="rg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Yellow"
                color="yellow"
                altStyle="alt-2"
                id="ra2-4"
                name="rg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Green"
                color="green"
                altStyle="alt-2"
                id="ra2-5"
                name="rg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Blue"
                color="blue"
                altStyle="alt-2"
                id="ra2-6"
                name="rg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Purple"
                color="purple"
                altStyle="alt-2"
                id="ra2-7"
                name="rg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <h1 style={{ marginTop: '26px' }}>White-Only Radios</h1>
            <Radio
                labelText="Primary"
                id="wr-1"
                name="rg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
            />
            <Radio
                labelText="Red"
                color="red"
                id="wr-2"
                name="rg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
            />
            <Radio
                labelText="Orange"
                color="orange"
                id="wr-3"
                name="rg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
            />
            <Radio
                labelText="Yellow"
                color="yellow"
                id="wr-4"
                name="rg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
            />
            <Radio
                labelText="Green"
                color="green"
                id="wr-5"
                name="rg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
            />
            <Radio
                labelText="Blue"
                color="blue"
                id="wr-6"
                name="rg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
            />
            <Radio
                labelText="Purple"
                color="purple"
                id="wr-7"
                name="rg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
            />
            <h1 style={{ marginTop: '26px' }}>Disabled Radios</h1>
            <Radio
                labelText="Primary"
                id="dr-1"
                name="drg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Red"
                color="red"
                id="dr-2"
                name="drg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Orange"
                color="orange"
                id="dr-3"
                name="drg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Yellow"
                color="yellow"
                id="dr-4"
                name="drg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Green"
                color="green"
                id="dr-5"
                name="drg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Blue"
                color="blue"
                id="dr-6"
                name="drg-1"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Purple"
                color="purple"
                id="dr-7"
                name="drg-1"
                disabled
            />
            <br />
            <Radio
                labelText="Primary"
                altStyle="alt-1"
                id="dra-1"
                name="drg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Red"
                color="red"
                altStyle="alt-1"
                id="dra-2"
                name="drg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Orange"
                color="orange"
                altStyle="alt-1"
                id="dra-3"
                name="drg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Yellow"
                color="yellow"
                altStyle="alt-1"
                id="dra-4"
                name="drg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Green"
                color="green"
                altStyle="alt-1"
                id="dra-5"
                name="drg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Blue"
                color="blue"
                altStyle="alt-1"
                id="dra-6"
                name="drg-2"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Purple"
                color="purple"
                altStyle="alt-1"
                id="dra-7"
                name="drg-2"
                disabled
            />
            <br />
            <Radio
                labelText="Primary"
                altStyle="alt-2"
                id="dra2-1"
                name="drg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Red"
                color="red"
                altStyle="alt-2"
                id="dra2-2"
                name="drg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Orange"
                color="orange"
                altStyle="alt-2"
                id="dra2-3"
                name="drg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Yellow"
                color="yellow"
                altStyle="alt-2"
                id="dra2-4"
                name="drg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Green"
                color="green"
                altStyle="alt-2"
                id="dra2-5"
                name="drg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Blue"
                color="blue"
                altStyle="alt-2"
                id="dra2-6"
                name="drg-3"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                disabled
            />
            <Radio
                labelText="Purple"
                color="purple"
                altStyle="alt-2"
                id="dra2-7"
                name="drg-3"
                disabled
            />
            <br />
            <Radio
                labelText="Primary"
                id="dwr-1"
                name="drg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
                disabled
            />
            <Radio
                labelText="Red"
                color="red"
                id="dwr-2"
                name="drg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
                disabled
            />
            <Radio
                labelText="Orange"
                color="orange"
                id="dwr-3"
                name="drg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
                disabled
            />
            <Radio
                labelText="Yellow"
                color="yellow"
                id="dwr-4"
                name="drg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
                disabled
            />
            <Radio
                labelText="Green"
                color="green"
                id="dwr-5"
                name="drg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
                disabled
            />
            <Radio
                labelText="Blue"
                color="blue"
                id="dwr-6"
                name="drg-4"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
                whiteOnly
                disabled
            />
            <Radio
                labelText="Purple"
                color="purple"
                id="dwr-7"
                name="drg-4"
                whiteOnly
                disabled
            />
            <h1 style={{ marginTop: '26px' }}>Sized Radios</h1>
            <Radio
                labelText="Small"
                id="sr-small"
                size="small"
                name="srg"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio
                labelText="Default"
                id="sr-default"
                name="srg"
                radioWrapperProps={{ style: { marginRight: '10px' } }}
            />
            <Radio labelText="Large" id="sr-large" size="large" name="srg" />
        </ContentSection>
    );
}

export default RadioSampleSection;
