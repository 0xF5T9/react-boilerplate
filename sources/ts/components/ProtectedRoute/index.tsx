/**
 * @file index.tsx
 * @description Protect route wrapper component.
 */

'use strict';
import { FunctionComponent, ReactNode, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '~/ts/hooks/useAuth';
import apis from '~/ts/apis';
import routes from '~/ts/global/react-router/routes';
import { showToast } from '~/ts/components/Toast';
import { FlexibleSection } from '~/ts/components/Content/components/GridSection';
import { CircleLoading } from '~/ts/components/Icons/CircleLoading';

/**
 * This component is used to prevent unauthenticated users from accessing private routes.
 * @param props Component properties.
 * @param props.children Component children.
 * @returns Returns the component.
 */
const ProtectedRoute: FunctionComponent<{ children: ReactNode }> = function ({
    children,
}) {
    const { sessionData, logout } = useAuth(),
        [isVerifying, setIsVerifying] = useState(true);

    // Redirect to login route if no authentication session found.
    if (!sessionData) {
        return <Navigate to={routes.login} />;
    }

    // If the session token is invalid (expired, tampered) redirect to login page.
    // If the verification failed due to server error, redirect to homepage instead.
    async function verifySession() {
        const result = await apis.backend.verifySession(sessionData),
            { message, success, invalidToken } = result;
        if (!success) {
            setTimeout(
                () =>
                    showToast({
                        variant: 'danger',
                        title: 'Error',
                        message,
                        duration: 5000,
                    }),
                100
            );
            logout(invalidToken ? routes.login : routes.home);
        }
        setIsVerifying(false);
    }

    // Verify the authentication session. (Check if token is still valid.)
    useEffect(() => {
        verifySession();
    }, [sessionData]);

    // Display loading component while verifying the session.
    if (isVerifying)
        return (
            <FlexibleSection
                contentProps={{
                    style: {
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '50px 20px',
                        textAlign: 'center',
                    },
                }}
            >
                <CircleLoading style={{ width: '30px' }} />
            </FlexibleSection>
        );

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};

export default ProtectedRoute;
