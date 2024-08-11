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

/**
 * Index section.
 * @returns Returns the component.
 */
function IndexSection() {
    return (
        <>
            <DynamicSection
                defaultContentStyles
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
                <h2>Dynamic Section</h2>
                <span>This section's height is determined by its content.</span>
            </DynamicSection>

            <FixedSection
                defaultContentStyles
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
                <h2>Fixed Section</h2>
                <span>This section has a fixed height of 300 pixels.</span>
            </FixedSection>

            <FlexibleSection
                defaultContentStyles
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
                <h2>Flexible Section</h2>
                <span>
                    This section's height is automatically scaled to fit the
                    remaining space.
                </span>
            </FlexibleSection>
        </>
    );
}

export default IndexSection;
