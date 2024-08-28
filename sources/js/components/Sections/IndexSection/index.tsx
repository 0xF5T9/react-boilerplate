/**
 * @file index.tsx
 * @description Index section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { FlexibleSection } from '../../Content/components/GridSection';
import { BarsLoading } from '../../Icons/BarsLoading';
import staticTexts from '../../../render/static-texts';

/**
 * Index section.
 * @returns Returns the component.
 */
const IndexSection: FunctionComponent = function () {
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
                        textAlign: 'center',
                    },
                }}
            >
                <BarsLoading
                    style={{
                        width: '7.142857142857143rem',
                        height: '7.142857142857143rem',
                    }}
                />
                <h5 style={{ marginTop: '28px', opacity: '0.6' }}>
                    {staticTexts.maintenanceText}
                </h5>
            </FlexibleSection>
        </>
    );
};

export default IndexSection;
