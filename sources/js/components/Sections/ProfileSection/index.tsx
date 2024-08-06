/**
 * @file index.tsx
 * @description Profile section.
 * TEST: Test component, subject to changes.
 */

'use strict';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAuth, getAuthSession } from '../../../hooks/useAuth';

import apis from '../../../apis';
import routes from '../../../configs/routes';

import { FlexibleSection } from '../../Content/components/GridSection';
import Button from '../../Button';
import LabeledInput from '../../LabeledInput';
import { showToast } from '../../ToastOverlay';

/**
 * Loader component.
 * @returns Returns the loader data.
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

    const [userInfo, setUserInfo]: any = useState();

    useEffect(() => {
        (async () => {
            const { message, success, data, invalidToken }: any = loaderData;
            if (!success) {
                setTimeout(
                    () =>
                        showToast('danger', {
                            title: 'Error',
                            message,
                            duration: 5000,
                        }),
                    100
                );
                logout(invalidToken ? routes.login : routes.home);
            }
            setUserInfo(data);
        })();
    }, [loaderData]);
    return (
        <>
            <FlexibleSection
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '50px 20px',
                }}
            >
                {userInfo && (
                    <>
                        <h1>Profile</h1>
                        <div
                            style={{
                                display: 'flex',
                                flexFlow: 'column nowrap',
                                alignItems: 'start',
                                rowGap: '4px',
                            }}
                        >
                            <LabeledInput
                                width={270}
                                label="Username"
                                value={authSession.username}
                                readOnly
                            />
                            <LabeledInput
                                width={270}
                                label="Email"
                                value={userInfo.email}
                                readOnly
                            />
                            <LabeledInput
                                width={270}
                                label="Created At"
                                value={new Date(
                                    userInfo.createdAt
                                ).toLocaleString('en-US')}
                                readOnly
                            />
                            <LabeledInput
                                width={270}
                                label="Role"
                                value={userInfo.role}
                                readOnly
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',

                                    columnGap: '4px',
                                    width: '100%',
                                }}
                            >
                                <Button
                                    onClick={() => logout()}
                                    style={{ flex: '1' }}
                                >
                                    Logout
                                </Button>
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
                                    style={{ flex: '1' }}
                                >
                                    Verify
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </FlexibleSection>
        </>
    );
}

export default ProfileSection;
export { loader };
