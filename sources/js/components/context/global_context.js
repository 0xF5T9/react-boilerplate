/**
 * @file global_context.js
 * @description Global context for all react components.
 */

import { createContext, useState, useEffect } from 'react';

// The global context.
const GlobalContext = createContext();

/**
 * The global context provider component.
 * @param {Object} props Component properties.
 * @param {*} props.children Context children.
 */
function GlobalContextProvider({ children }) {
    const [theme, setTheme] = useState('dark'),
        global = { theme, setTheme };

    useEffect(() => {
        // console.log(`Theme context updated. (${theme})`);
    }, [theme]);

    return (
        <GlobalContext.Provider value={global}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalContextProvider };
