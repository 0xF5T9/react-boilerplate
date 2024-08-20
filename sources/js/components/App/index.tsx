/**
 * @file index.tsx
 * @description App component.
 */

import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Application component.
 * @returns Returns the component.
 */
const App: FunctionComponent = function () {
    return (
        <div id="app">
            <Outlet />
        </div>
    );
};

export default App;
