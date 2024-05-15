/**
 * @file index.js
 * @description Global context for the application.
 */

import { createContext, useState } from 'react';

// The global context.
const GlobalContext = createContext();

/**
 * Global context provider component.
 * @param {Object} props Component properties.
 * @param {*} props.children Context children.
 * @returns Returns the component.
 */
function GlobalContextProvider({ children }) {
    const [isHeaderVisible, setHeaderVisibility] = useState(true),
        [isFooterVisible, setFooterVisibility] = useState(true),
        [headerHeight, setHeaderHeight] = useState('56.8px'),
        [footerHeight, setFooterHeight] = useState('140px');
    global = {
        isHeaderVisible,
        setHeaderVisibility,
        isFooterVisible,
        setFooterVisibility,
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
    };

    return (
        <GlobalContext.Provider value={global}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalContextProvider };
