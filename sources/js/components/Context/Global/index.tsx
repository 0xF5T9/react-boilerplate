/**
 * @file index.tsx
 * @description Global context for the application.
 */

'use strict';
import { ReactNode, createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Themes from '../../Theme';

// Global context.
const globalContext = createContext(null);

/**
 * Global context provider component.
 * @param props Component properties.
 * @param props.children Context children.
 * @returns Returns the component.
 */
function GlobalProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState(() => {
            let theme = localStorage.getItem('theme');
            if (!theme || (theme !== 'light' && theme !== 'dark')) {
                localStorage.setItem('theme', 'dark');
                theme = 'dark';
            }

            return theme;
        }),
        [deviceType, setDeviceType] = useState(() => ({
            deviceType:
                window.innerWidth >= 1024
                    ? 'Desktop'
                    : window.innerWidth >= 741
                      ? 'Tablet'
                      : 'Mobile',
            deviceWidth: window.innerWidth,
            deviceHeight: window.innerHeight,
        }));

    let Theme;
    switch (theme) {
        case 'light':
            Theme = Themes['Light'];
            break;
        case 'dark':
            Theme = Themes['Dark'];
            break;
        default:
            console.warn('Unknown theme name detected, fallback to default.');
            Theme = Themes['Dark'];
    }

    useEffect(() => {
        window.addEventListener('resize', handleUpdateDeviceType);
        return () => {
            window.removeEventListener('resize', handleUpdateDeviceType);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    function handleUpdateDeviceType() {
        const device_type =
            window.innerWidth >= 1024
                ? 'Desktop'
                : window.innerWidth >= 741
                  ? 'Tablet'
                  : 'Mobile';
        setDeviceType({
            deviceType: device_type,
            deviceWidth: window.innerWidth,
            deviceHeight: window.innerHeight,
        });
    }

    const global = {
        theme,
        setTheme,
        deviceType,
    };

    return (
        <globalContext.Provider value={global}>
            {Theme && <Theme />}
            {children}
        </globalContext.Provider>
    );
}

GlobalProvider.propTypes = {
    children: PropTypes.node,
};

export { globalContext, GlobalProvider };
