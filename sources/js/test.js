/**
 * @file test.js
 * @description Test script file.
 * @todo TODO: To be removed.
 */

import { useContext } from 'react';
import { GlobalContext } from './components/Context/Global';
import { ContentSection } from './components/Content';
import Button from './components/Button';
console.log('test.js loaded.');

const EnableTest = false;

function TestContent() {
    const { theme, setTheme } = useContext(GlobalContext);

    function handleSwitchTheme() {
        setTheme(theme == 'dark' ? 'light' : 'dark');
    }

    return (
        <div id="content-wrapper">
            <ContentSection
                flexCenter
                textCenter
                sectionProps={{
                    style: {
                        border: '2px solid var(--color-red)',
                    },
                }}
            >
                <h1>Test Section</h1>
                <h3>Theme: {theme}</h3>
                <Button buttonProps={{ onClick: handleSwitchTheme }}>
                    Switch Theme
                </Button>
            </ContentSection>
        </div>
    );
}

export default EnableTest;
export { TestContent };
