/**
 * @file index.js
 * @description Profile section.
 * @todo TODO: Mock component, to be removed.
 */

'use strict';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAuth, getAuthSession } from '../../../hooks/useAuth';

import apis from '../../../apis';
import { routes } from '../../../configs/react-router';

import ContentSection from '../../Content/components/ContentSection';
import Button from '../../Button';
import { showToast } from '../../ToastOverlay';

/**
 * Loader component.
 * @returns {*} Returns the loader data.
 */
async function loader() {
    const authSession = getAuthSession();
    if (!authSession)
        // NOTE:
        // Polyfill the loader object as the component only expects an APIResponse object.
        // If the 'authSession' is null and <ProtectedRoute /> component didn't prevent-
        // this component from being rendered, meaning the 'authSession' data has been tampered.
        return {
            message:
                'Invalid session detected. This incident will be reported.',
            success: false,
            data: null,
            invalidToken: true,
        };

    const { username, token } = authSession;

    return await apis.mysqlServer.getUserInfo(username, token);
}

/**
 * Profile section.
 * @returns Returns the component.
 */
function ProfileSection() {
    const loaderData = useLoaderData(),
        { authSession, logout } = useAuth();

    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        (async () => {
            const { message, success, data, invalidToken } = loaderData;
            if (!success) {
                setTimeout(
                    () => showToast('Error', message, 'error', 5000),
                    100
                );
                logout(invalidToken ? routes.login : routes.home);
            }
            setUserInfo(data);
        })();
    }, [loaderData]);

    return (
        <>
            <ContentSection flexCenter textCenter>
                {userInfo && (
                    <>
                        <h1>Profile Section</h1>
                        <h3>
                            Logged as {authSession.username} ({userInfo.email})
                        </h3>
                        <h3>
                            Created At:{' '}
                            {new Date(userInfo.createdAt).toLocaleString(
                                'en-US'
                            )}
                        </h3>
                        <Button onClick={() => logout()}>Logout</Button>
                        <Button
                            onClick={() => {
                                (async () => {
                                    console.log(
                                        await apis.mysqlServer.verifySession(
                                            authSession
                                        )
                                    );
                                })();
                            }}
                        >
                            Verify
                        </Button>
                    </>
                )}
            </ContentSection>
        </>
    );
}

export default ProfileSection;
export { loader };
