/**
 * @file index.js
 * @description Index section.
 */

'use strict';
import ContentSection from '../../Content/components/ContentSection';

/**
 * Index section.
 * @returns Returns the component.
 */
function IndexSection() {
    return (
        <>
            <ContentSection
                flexCenter
                textCenter
                fixedHeight
                sectionStyle={{ height: '300px' }}
            >
                <h1>Fixed Height Section</h1>
                <p>This content section has a fixed height of 300 pixels.</p>
            </ContentSection>

            <ContentSection flexCenter textCenter topBorder>
                <h1>Default Section</h1>
                <p>This content section's height is automatically scaled.</p>
            </ContentSection>
        </>
    );
}

export default IndexSection;
