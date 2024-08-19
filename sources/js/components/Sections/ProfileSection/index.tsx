/**
 * @file index.tsx
 * @description Profile section.
 * TEST: Test component, subject to changes.
 */

'use strict';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAuth, getSessionData } from '../../../hooks/useAuth';

import { APIResult } from '../../../utility/api';
import apis from '../../../apis';
import routes from '../../../configs/routes';

import { FlexibleSection } from '../../Content/components/GridSection';
import { SectionTitle } from '../../Content/components/GridSection/components';
import Button from '../../Button';
import LabeledInput from '../../LabeledInput';
import { showToast } from '../../Toast';

/**
 * Loader component.
 * @returns Returns the loader data.
 */
async function loader(): Promise<APIResult> {
    // Session data should not be null unless local storage is corrupted.
    const sessionData = getSessionData();
    if (!sessionData)
        return new APIResult('Session expired.', false, null, 401);

    const { username, token } = sessionData;

    return await apis.backend.getUserInfo(username, token);
}

/**
 * Profile section.
 * @returns Returns the component.
 */
function ProfileSection() {
    const loaderData = useLoaderData() as APIResult,
        { sessionData, logout } = useAuth();

    const [userInfo, setUserInfo]: any = useState();

    useEffect(() => {
        (async () => {
            const { message, success, data, invalidToken } = loaderData;
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
                        <SectionTitle>Profile</SectionTitle>
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
                                value={sessionData.username}
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
                                                await apis.backend.verifySession(
                                                    sessionData
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
