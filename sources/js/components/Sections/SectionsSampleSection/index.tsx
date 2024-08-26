/**
 * @file index.tsx
 * @description Section samples section.
 */

'use strict';
import { FunctionComponent } from 'react';
import {
    DynamicSection,
    FixedSection,
    FlexibleSection,
} from '../../Content/components/GridSection';
import {
    SectionTitle,
    SectionSubtitle,
    SectionBlock,
} from '../../Content/components/GridSection/components';

/**
 * Index section.
 * @returns Returns the component.
 */
const IndexSection: FunctionComponent = function () {
    return (
        <>
            <DynamicSection
                noGutters
                sectionProps={{
                    id: 'dynamic-section',
                    className: 'dynamic-section',
                }}
                contentProps={{
                    style: {
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        padding: '50px 20px',
                        alignItems: 'center',
                        border: '2px solid var(--color-red)',
                        textAlign: 'center',
                    },
                }}
            >
                <SectionTitle>Dynamic Section</SectionTitle>
                <SectionSubtitle>
                    This section's height is determined by its content.
                </SectionSubtitle>
            </DynamicSection>

            <FixedSection
                noGutters
                height={300}
                sectionProps={{
                    id: 'fixed-section',
                    className: 'fixed-section',
                }}
                contentProps={{
                    style: {
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        padding: '50px 20px',
                        alignItems: 'center',
                        border: '2px solid var(--color-green)',
                        textAlign: 'center',
                    },
                }}
            >
                <SectionTitle>Fixed Section</SectionTitle>
                <SectionSubtitle>
                    This section has a fixed height of 300 pixels.
                </SectionSubtitle>
            </FixedSection>

            <FlexibleSection
                noGutters
                sectionProps={{
                    id: 'flexible-section',
                    className: 'flexible-section',
                }}
                contentProps={{
                    style: {
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        padding: '50px 20px',
                        alignItems: 'center',
                        border: '2px solid var(--color-blue)',
                        textAlign: 'center',
                    },
                }}
            >
                <SectionTitle>Flexible Section</SectionTitle>
                <SectionSubtitle>
                    This section's height is automatically scaled to fit the
                    remaining space.
                </SectionSubtitle>
            </FlexibleSection>
        </>
    );
};

export default IndexSection;
