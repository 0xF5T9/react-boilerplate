/**
 * @file index.js
 * @description Global context for the application.
 */

'use strict';
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Global context.
const GlobalContext = createContext();

/**
 * Global context provider component.
 * @param {Object} props Component properties.
 * @param {*} props.children Context children.
 * @returns Returns the component.
 */
function GlobalProvider({ children }) {
    const [isHeaderVisible, setHeaderVisibility] = useState(true),
        [isFooterVisible, setFooterVisibility] = useState(true),
        [headerHeight, setHeaderHeight] = useState('56.8px'),
        [footerHeight, setFooterHeight] = useState('140px'),
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

    useEffect(() => {
        window.addEventListener('resize', handleUpdateDeviceType);
        return () => {
            window.removeEventListener('resize', handleUpdateDeviceType);
        };
    }, []);

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
        isHeaderVisible,
        setHeaderVisibility,
        isFooterVisible,
        setFooterVisibility,
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        deviceType,
    };

    return (
        <GlobalContext.Provider value={global}>
            {children}
        </GlobalContext.Provider>
    );
}

GlobalProvider.propTypes = {
    children: PropTypes.node,
};

export { GlobalContext, GlobalProvider };
