/**
 * @file index.js
 * @description Login section.
 * @todo TODO: Mock component, to be removed.
 */

'use strict';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import apis from '../../../apis';

import ContentSection from '../../Content/components/ContentSection';
import Input from '../../Input';
import Button from '../../Button';

import * as styles from './LoginSection.module.css';

/**
 * Login section.
 * @returns Returns the component.
 */
function LoginSection() {
    const [username, setUsername] = useState(''),
        [password, setPassword] = useState(''),
        [message, setMessage] = useState(''),
        { authSession, login } = useAuth();

    if (authSession) {
        return <Navigate to="/secret" />;
    }

    async function handleLogin(event) {
        event.preventDefault();

        const { message, success, data } = await apis.mysqlServer.authorize(
            username,
            password
        );
        if (!success) {
            console.warn(message);
            setMessage(message);
            return;
        }

        await login({ username: data.username, token: data.token });
        setMessage(message);
        console.log('Login successfully.');
    }

    return (
        <>
            <ContentSection flexCenter textCenter>
                <h1>Login Section</h1>
                <div className={styles['login-form']}>
                    <label
                        htmlFor="username-input"
                        className={styles['input-label']}
                    >
                        Username
                    </label>
                    <Input
                        id="username-input"
                        value={username}
                        placeholder="Username"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <label
                        htmlFor="password-input"
                        className={styles['input-label']}
                    >
                        Password
                    </label>
                    <Input
                        id="password-input"
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button
                        className={styles['login-button']}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <span className={styles['message']}>{message}</span>
                </div>
            </ContentSection>
        </>
    );
}

export default LoginSection;
