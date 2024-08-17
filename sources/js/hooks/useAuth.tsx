/**
 * @file useAuth.tsx
 * @description Authentication hook.
 */

'use strict';
import type {
    SessionData,
    SessionLogin,
    SessionLogout,
    UseAuth,
} from '../types/authentication';
import { useLocalStorage } from './useLocalStorage';
import { ReactNode, useContext, useMemo, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../configs/routes';

// Authentication context.
const authContext = createContext(null);

/**
 * Authentication context provider component.
 * @param props Component properties.
 * @param props.children Context children.
 * @returns Returns the component.
 */
function AuthProvider({ children }: { children: ReactNode }) {
    const [sessionData, setSessionData] = useLocalStorage('sessionData', null),
        navigate = useNavigate();

    const login: SessionLogin = async (sessionData: SessionData) => {
        const { username, email, role, token } = sessionData;
        if (!username || !token || !email || !role) {
            console.error('Invalid session data.');
            navigate(routes.home);
        }

        setSessionData(sessionData);
        navigate(routes.profile); // Redirect to secret route on successful login. [MOCK]
    };

    const logout: SessionLogout = async (route?: string) => {
        setSessionData(null);
        navigate(route || routes.home, { replace: true });
    };

    const value = useMemo(
        () =>
            ({
                sessionData,
                login,
                logout,
            }) as UseAuth,
        [sessionData]
    );
    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

/**
 * Hook provides a convenient way to access and manage user-
 * authentication status from application components.
 * @returns sessionData, login, logout
 */
function useAuth() {
    return useContext(authContext);
}

/**
 * Get the authentication session data directly from the local storage.
 * Use this when we can't use the `useAuth()` hook, such as outside a component function.
 * @returns Returns the authentication session data.
 */
function getSessionData(): SessionData | null {
    try {
        const value = window.localStorage.getItem('sessionData');
        if (!value) return null;
        const parsedValue = JSON.parse(value);
        return parsedValue;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { useAuth, AuthProvider, getSessionData };
