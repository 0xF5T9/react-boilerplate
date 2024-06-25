/**
 * @file index.js
 * @description Protect route component.
 */

'use strict';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/useAuth';

/**
 * This component is used to prevent unauthenticated users from accessing private routes.
 * @param {Object} props Component properties.
 * @param {*} props.children Component children.
 * @returns Returns the component.
 */
function ProtectedRoute({ children }) {
    const { authSession } = useAuth();

    if (!authSession) {
        return <Navigate to="/login" />; // Redirect to login route if no authentication session found. [MOCK]
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};

export default ProtectedRoute;
