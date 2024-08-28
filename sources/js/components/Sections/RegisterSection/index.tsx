/**
 * @file index.tsx
 * @description Register section.
 */

'use strict';
import type { SessionData } from '../../../types/authentication';
import { FunctionComponent, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { useModal } from '../../../hooks/useModal';
import routes from '../../../global/react-router/routes';
import apis from '../../../apis';
import { FlexibleSection } from '../../Content/components/GridSection';
import Input from '../../Input';
import Checkbox from '../../Checkbox';
import Button from '../../Button';
import ServerMessage from '../../ServerMessage';
import { Envelope } from '../../Icons/Envelope';
import { User } from '../../Icons/User';
import { Lock } from '../../Icons/Lock';
import staticRender from '../../../render/static-render';
import * as styles from './RegisterSection.module.css';
const staticTexts = staticRender.registerSection;

/**
 * Register section.
 * @returns Returns the component.
 */
const RegisterSection: FunctionComponent = function () {
    const { setModal } = useModal();

    const { sessionData, login } = useAuth(),
        [pending, setPending] = useState(false),
        [serverMessage, setServerMessage] = useState(null),
        [email, setEmail] = useState(''),
        [username, setUsername] = useState(''),
        [password, setPassword] = useState(''),
        [passwordRepeat, setPasswordRepeat] = useState(''),
        [agreement, setAgreement] = useState(false);

    if (sessionData) {
        return <Navigate to={routes.profile} />;
    }

    async function handleRegister(event: any) {
        event.preventDefault();
        setServerMessage(null);
        if (!email) {
            document?.getElementById('email-input')?.focus();
            return;
        }
        if (!username) {
            document?.getElementById('username-input')?.focus();
            return;
        }
        if (!password) {
            document?.getElementById('password-input')?.focus();
            return;
        }
        if (!passwordRepeat) {
            document?.getElementById('password-repeat-input')?.focus();
            return;
        }
        if (password !== passwordRepeat) {
            setServerMessage({
                message: staticTexts.passwordNotMatch,
                type: 'error',
            });
            return;
        }
        if (!agreement) {
            setServerMessage({
                message: staticTexts.consentRequirement,
                type: 'error',
            });
            document?.getElementById('agreement-checkbox')?.focus();
            return;
        }

        setPending(true);

        const { message: registerMessage, success: isRegisterSuccess } =
            await apis.backend.register(email, username, password);
        if (!isRegisterSuccess) {
            console.warn(registerMessage);
            setServerMessage({ message: registerMessage, type: 'error' });
            setPassword('');
            setPasswordRepeat('');
            setPending(false);
            return;
        }

        const {
            message: loginMessage,
            success: isLoginSuccess,
            data,
        } = await apis.backend.authorize(username, password);
        if (!isLoginSuccess) {
            console.warn(loginMessage);
            setServerMessage({ message: loginMessage, type: 'error' });
            setPassword('');
            setPasswordRepeat('');
            setPending(false);
            return;
        }

        setTimeout(async () => await login(data as SessionData), 300);

        setServerMessage({ message: registerMessage, type: 'success' });
    }

    return (
        <>
            <style>
                {`
                            .my-custom-modal {
                                width: 100%;
                                max-width: 1024px;
                                padding: 20px;
                              
                                border-radius: 4px;
                              
                            }

                            .my-custom-modal {
                                max-height: calc(100vh - 20px);
                                overflow: auto;
                            }
                            
                            @media only screen and (max-width: 1043px) {
                                .my-custom-modal {
                                    max-width: calc(100% - var(--modal-window-margin));
                                }
                            }

                           
                        `}
            </style>
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
                                htmlFor="email-input"
                                className={styles['label']}
                            >
                                {staticTexts.emailLabel}
                            </label>
                            <Input
                                type="email"
                                id="email-input"
                                value={email}
                                placeholder={staticTexts.emailInputPlaceholder}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                icon={{
                                    position: 'left',
                                    icon: Envelope,
                                }}
                                disabled={pending ? true : false}
                            />
                        </div>
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
                                    position: 'left',
                                    icon: User,
                                }}
                                disabled={pending ? true : false}
                                autoCapitalize="off"
                            />
                        </div>
                        <div className={styles['form-group']}>
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
                                    position: 'left',
                                    icon: Lock,
                                }}
                                disabled={pending ? true : false}
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label
                                htmlFor="password-repeat-input"
                                className={styles['label']}
                            >
                                {staticTexts.passwordConfirmLabel}
                            </label>
                            <Input
                                id="password-repeat-input"
                                value={passwordRepeat}
                                type="password"
                                placeholder={
                                    staticTexts.passwordConfirmInputPlaceholder
                                }
                                onChange={(event) =>
                                    setPasswordRepeat(event.target.value)
                                }
                                icon={{
                                    position: 'left',
                                    icon: Lock,
                                }}
                                disabled={pending ? true : false}
                            />
                        </div>
                        <div
                            className={styles['form-group']}
                            style={{ marginTop: '8px' }}
                        >
                            <Checkbox
                                labelHTML={
                                    <span>
                                        {staticTexts.consentText}{' '}
                                        <span
                                            className={styles['link']}
                                            style={{
                                                color: 'var(--card-text-highlight-color)',
                                            }}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setModal({
                                                    type: 'alert',
                                                    title: staticTexts.termOfService,
                                                    message:
                                                        staticTexts.termOfServiceModalText,
                                                    closeButtonText:
                                                        staticTexts.termOfServiceModalButton,
                                                });
                                            }}
                                        >
                                            {staticTexts.termOfService}
                                        </span>
                                        .
                                    </span>
                                }
                                id="agreement-checkbox"
                                checked={agreement}
                                onChange={(event) =>
                                    setAgreement(event.currentTarget.checked)
                                }
                                required
                            />
                        </div>
                        <Button
                            className={styles['submit']}
                            onClick={(event: any) => handleRegister(event)}
                            disabled={pending ? true : false}
                            loading={pending}
                        >
                            {staticTexts.registerButton}
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
                                to={routes.login}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                {staticTexts.loginLink}
                            </Link>
                        </div>{' '}
                    </form>
                </div>
            </FlexibleSection>
        </>
    );
};

export default RegisterSection;
