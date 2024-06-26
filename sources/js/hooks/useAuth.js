/**
 * @file useAuth.js
 * @description Authentication hook.
 */

'use strict';
import { useContext, useMemo, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
import { routes } from '../configs/react-router';
import PropTypes from 'prop-types';

// Authentication context.
const AuthContext = createContext();

/**
 * Authentication context provider component.
 * @param {Object} props Component properties.
 * @param {*} props.children Context children.
 * @returns Returns the component.
 */
function AuthProvider({ children }) {
    const [authSession, setAuthSession] = useLocalStorage('authSession', null),
        navigate = useNavigate();

    async function login(sessionData) {
        const { username, token } = sessionData;
        if (!username || !token) {
            console.error('Invalid session data.');
            navigate(routes.home);
        }

        setAuthSession(sessionData);
        navigate(routes.profile); // Redirect to secret route on successful login. [MOCK]
    }

    async function logout() {
        setAuthSession(null);
        navigate(routes.home, { replace: true });
    }

    const value = useMemo(
        () => ({
            authSession,
            login,
            logout,
        }),
        [authSession]
    );
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

/**
 * Hook provides a convenient way to access and manage user-
 * authentication status from application components.
 */
function useAuth() {
    return useContext(AuthContext);
}

export { useAuth, AuthProvider };
