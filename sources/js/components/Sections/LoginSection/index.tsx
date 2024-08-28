/**
 * @file index.tsx
 * @description Login section.
 */

'use strict';
import type { SessionData } from '../../../types/authentication';
import { FunctionComponent, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import routes from '../../../global/react-router/routes';
import apis from '../../../apis';
import { FlexibleSection } from '../../Content/components/GridSection';
import Input from '../../Input';
import Button from '../../Button';
import ServerMessage from '../../ServerMessage';
import { User } from '../../Icons/User';
import { Lock } from '../../Icons/Lock';
import staticTexts from '../../../render/static-texts';
import * as styles from './LoginSection.module.css';
const texts = staticTexts.loginSection;

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

        setServerMessage({
            message: texts.loginSuccessful,
            type: 'success',
        });
        setTimeout(async () => await login(data as SessionData), 300);
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
                    <h5 className={styles['title']}>{texts.title}</h5>

                    <form className={styles['form']}>
                        <div className={styles['form-group']}>
                            <label
                                htmlFor="username-input"
                                className={styles['label']}
                            >
                                {texts.usernameLabel}
                            </label>
                            <Input
                                id="username-input"
                                value={username}
                                placeholder={texts.usernameInputPlaceholder}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                                icon={{
                                    position: 'left',
                                    icon: User,
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
                                {texts.passwordLabel}
                            </label>
                            <Input
                                id="password-input"
                                value={password}
                                type="password"
                                placeholder={texts.passwordInputPlaceholder}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                icon={{
                                    position: 'left',
                                    icon: Lock,
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
                                {texts.forgotPassword}
                            </Link>
                        </div>

                        <Button
                            className={styles['submit']}
                            onClick={(event: any) => handleLogin(event)}
                            disabled={pending ? true : false}
                            loading={pending}
                        >
                            {texts.loginButton}
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
                                {texts.backLink}
                            </Link>
                            <Link
                                className={styles['link']}
                                to={routes.register}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                {texts.registerLink}
                            </Link>
                        </div>
                    </form>
                </div>
            </FlexibleSection>
        </>
    );
};

export default LoginSection;
