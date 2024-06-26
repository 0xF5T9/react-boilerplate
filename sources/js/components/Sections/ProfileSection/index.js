/**
 * @file index.js
 * @description Profile section.
 * @todo TODO: Mock component, to be removed.
 */

'use strict';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

import ContentSection from '../../Content/components/ContentSection';
import Button from '../../Button';

/**
 * Profile section.
 * @returns Returns the component.
 */
function ProfileSection() {
    const { authSession, logout } = useAuth();

    async function handleLogout(event) {
        logout();
    }

    return (
        <>
            <ContentSection flexCenter textCenter>
                <h1>Profile Section</h1>
                <h3>Logged as {authSession.username}</h3>
                <Button onClick={handleLogout}>Logout</Button>
            </ContentSection>
        </>
    );
}

export default ProfileSection;
