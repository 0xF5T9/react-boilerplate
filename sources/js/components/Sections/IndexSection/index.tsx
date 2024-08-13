/**
 * @file index.tsx
 * @description Index section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import { BarsLoading } from '../../Icons/BarsLoading';

/**
 * Index section.
 * @returns Returns the component.
 */
function IndexSection() {
    return (
        <>
            <FlexibleSection
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 20px',
                    alignItems: 'center',
                }}
            >
                <BarsLoading style={{ width: '100px' }} />
                <h3 style={{ marginTop: '26px' }}>Server Under Maintenance</h3>
            </FlexibleSection>
        </>
    );
}

export default IndexSection;
