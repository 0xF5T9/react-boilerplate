/**
 * @file index.tsx
 * @description Typography section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { FlexibleSection } from '../../Content/components/GridSection';

/**
 * Typography section.
 * @returns Returns the component.
 */
const TypographySection: FunctionComponent = function () {
    return (
        <>
            <FlexibleSection
                contentProps={{
                    style: {
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        padding: '50px 20px',
                        alignItems: 'center',
                    },
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        rowGap: '8px',
                    }}
                >
                    <h1>Heading text 1</h1>
                    <h2>Heading text 2</h2>
                    <h3>Heading text 3</h3>
                    <h4>Heading text 4</h4>
                    <h5>Heading text 5</h5>
                    <h6>Heading text 6</h6>
                    <p>Paragraph text</p>
                    <small>Small text</small>
                </div>
            </FlexibleSection>
        </>
    );
};

export default TypographySection;
