/**
 * @file index.js
 * @description Index section.
 */

'use strict';
import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../Context/Global';
import Button from '../../Button';
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
    const { theme, setTheme } = useContext(GlobalContext);

    function handleClick() {
        switch (theme) {
            case 'monokai-pro':
                setTheme('monokai-spectrum');
                break;
            default:
                setTheme('monokai-pro');
                break;
        }
    }

    return (
        <>
            <DynamicSection
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 0px',
                    alignItems: 'center',
                }}
            >
                <h1>Test Section</h1>
                <Button whiteOnly onClick={handleClick}>
                    Theme: {theme}
                </Button>
            </DynamicSection>

            <DynamicSection
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 0px',
                    alignItems: 'center',
                    borderTop: '2px solid var(--color-white)',
                }}
            >
                <h1>Dynamic Section</h1>
                <p>This section's height is determined by its content.</p>
            </DynamicSection>

            <FixedSection
                height={300}
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 0px',
                    alignItems: 'center',
                    borderTop: '2px solid var(--color-white)',
                }}
            >
                <h1>Fixed Section</h1>
                <p>This section has a fixed height of 300 pixels.</p>
            </FixedSection>

            <FlexibleSection
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 0px',
                    alignItems: 'center',
                    borderTop: '2px solid var(--color-white)',
                }}
            >
                <h1>Flexible Section</h1>
                <p>
                    This section's height is automatically scaled to fit the
                    remaining space.
                </p>
            </FlexibleSection>
        </>
    );
}

export default IndexSection;
