/**
 * @file index.js
 * @description Secret section.
 * @todo TODO: Mock component, to be removed.
 */

'use strict';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

import ContentSection from '../../Content/components/ContentSection';
import Button from '../../Button';

/**
 * Secret section.
 * @returns Returns the component.
 */
function SecretSection() {
    const { authSession, logout } = useAuth();

    async function handleLogout(event) {
        logout();
    }

    return (
        <>
            <ContentSection flexCenter textCenter>
                <h1>Secret Section</h1>
                <h3>Logged as {authSession.username}</h3>
                <Button onClick={handleLogout}>Logout</Button>
            </ContentSection>
        </>
    );
}

export default SecretSection;
