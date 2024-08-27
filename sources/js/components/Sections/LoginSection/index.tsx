/**
 * @file index.tsx
 * @description Login section.
 */

'use strict';
import { SessionData } from '../../../types/authentication';
import { FunctionComponent, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import routes from '../../../global/react-router/routes';
import apis from '../../../apis';
import { FlexibleSection } from '../../Content/components/GridSection';
import Input from '../../Input';
import Button from '../../Button';
import ServerMessage from '../../ServerMessage';
import staticRender from '../../../render/static-render';
import * as styles from './LoginSection.module.css';
const staticTexts = staticRender.loginSection;

/**
 * Login section.
 * @returns Returns the component.
 */
const LoginSection: FunctionComponent = function () {
    const { sessionData, login } = useAuth(),
        [pending, setPending] = useState(false),
        [serverMessage, setServerMessage] = useState(null),
        [username, setUsername] = useState(''),
        [password, setPassword] = useState('');

    if (sessionData) {
        return <Navigate to={routes.profile} />;
    }

    async function handleLogin(event: any) {
        event.preventDefault();
        if (!username) {
            document.getElementById('username-input').focus();
            return;
        }
        if (!password) {
            document.getElementById('password-input').focus();
            return;
        }

        setPending(true);

        const { message, success, data } = await apis.backend.authorize(
            username,
            password
        );
        if (!success) {
            console.warn(message);
            setServerMessage({ message: message, type: 'error' });
            setPassword('');
            setPending(false);
            setTimeout(() => {
                document.getElementById('password-input').focus();
            }, 10);
            return;
        }

        const {
            username: dataUsername,
            email: dataEmail,
            role: dataRole,
            token: dataToken,
        }: SessionData = data;
        setServerMessage({
            message: staticTexts.loginSuccessful,
            type: 'success',
        });
        setTimeout(
            async () =>
                await login({
                    username: dataUsername,
                    email: dataEmail,
                    role: dataRole,
                    token: dataToken,
                }),
            300
        );
    }

    return (
        <>
            <FlexibleSection
                contentProps={{
                    style: {
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '50px 20px',
                    },
                }}
            >
                {serverMessage && (
                    <ServerMessage
                        message={serverMessage.message}
                        onClick={() => setServerMessage(null)}
                        type={serverMessage.type}
                    />
                )}
                <div className={styles['wrapper']}>
                    <h5 className={styles['title']}>{staticTexts.title}</h5>

                    <form className={styles['form']}>
                        <div className={styles['form-group']}>
                            <label
                                htmlFor="username-input"
                                className={styles['label']}
                            >
                                {staticTexts.usernameLabel}
                            </label>
                            <Input
                                id="username-input"
                                value={username}
                                placeholder={
                                    staticTexts.usernameInputPlaceholder
                                }
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                                icon={{
                                    iconPosition: 'left',
                                    iconClass: 'fas fa-user',
                                }}
                                disabled={pending ? true : false}
                                autoCapitalize="off"
                            />
                        </div>
                        <div
                            className={styles['form-group']}
                            style={{ position: 'relative' }}
                        >
                            <label
                                htmlFor="password-input"
                                className={styles['label']}
                            >
                                {staticTexts.passwordLabel}
                            </label>
                            <Input
                                id="password-input"
                                value={password}
                                type="password"
                                placeholder={
                                    staticTexts.passwordInputPlaceholder
                                }
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                icon={{
                                    iconPosition: 'left',
                                    iconClass: 'fas fa-lock',
                                }}
                                disabled={pending ? true : false}
                            />
                            <Link
                                className={styles['link']}
                                style={{
                                    position: 'absolute',
                                    top: '1px',
                                    right: 0,
                                    color: 'var(--card-text-highlight-color)',
                                    fontSize: '13px',
                                }}
                                to={routes.forgotPassword}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                {staticTexts.forgotPassword}
                            </Link>
                        </div>

                        <Button
                            className={styles['submit']}
                            onClick={(event: any) => handleLogin(event)}
                            disabled={pending ? true : false}
                            loading={pending}
                        >
                            {staticTexts.loginButton}
                        </Button>

                        <div className={styles['bottom-links']}>
                            <Link
                                className={styles['link']}
                                to={routes.home}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                <i className="fa-solid fa-arrow-left"></i>{' '}
                                {staticTexts.backLink}
                            </Link>
                            <Link
                                className={styles['link']}
                                to={routes.register}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                {staticTexts.registerLink}
                            </Link>
                        </div>
                    </form>
                </div>
            </FlexibleSection>
        </>
    );
};

export default LoginSection;
