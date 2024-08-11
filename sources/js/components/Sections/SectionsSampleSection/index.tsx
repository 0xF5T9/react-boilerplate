/**
 * @file index.tsx
 * @description Section samples section.
 */

'use strict';
import {
    DynamicSection,
    FixedSection,
    FlexibleSection,
} from '../../Content/components/GridSection';
import {
    SectionTitle,
    SectionSubtitle,
} from '../../Content/components/GridSection/components';

/**
 * Index section.
 * @returns Returns the component.
 */
function IndexSection() {
    return (
        <>
            <DynamicSection
                noGutters
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 20px',
                    alignItems: 'center',
                    border: '2px solid var(--color-red)',
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
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 20px',
                    alignItems: 'center',
                    border: '2px solid var(--color-green)',
                }}
            >
                <SectionTitle>Fixed Section</SectionTitle>
                <SectionSubtitle>
                    This section has a fixed height of 300 pixels.
                </SectionSubtitle>
            </FixedSection>

            <FlexibleSection
                noGutters
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 20px',
                    alignItems: 'center',
                    border: '2px solid var(--color-blue)',
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
}

export default IndexSection;
