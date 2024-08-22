/**
 * @file index.tsx
 * @description Forgot password section.
 */

'use strict';
import { FunctionComponent, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import routes from '../../../configs/routes';
import apis from '../../../apis';

import { FlexibleSection } from '../../Content/components/GridSection';
import Input from '../../Input';
import Button from '../../Button';
import ServerMessage from '../../ServerMessage';

import * as styles from './ForgotPasswordSection.module.css';

/**
 * Forgot password section.
 * @returns Returns the component.
 */
const ForgotPasswordSection: FunctionComponent = function () {
    const { sessionData } = useAuth(),
        [pending, setPending] = useState(false),
        [serverMessage, setServerMessage]: any = useState(null),
        [email, setEmail] = useState('');

    if (sessionData) {
        return <Navigate to={routes.home} />;
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        setServerMessage(null);
        if (!email) {
            document.getElementById('email-input').focus();
            return;
        }

        setPending(true);

        const { message, success, data } =
            await apis.backend.forgotPassword(email);
        if (!success) {
            console.warn(message);
            setServerMessage({ message: message, type: 'error' });
            setEmail('');
            setPending(false);
            setTimeout(() => {
                document.getElementById('email-input').focus();
            }, 10);
            return;
        }

        setPending(false);
        setEmail('');
        setServerMessage({ message, type: 'success' });
    }

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
                {serverMessage && (
                    <ServerMessage
                        message={serverMessage.message}
                        onClick={() => setServerMessage(null)}
                        type={serverMessage.type}
                    />
                )}
                <div className={styles['wrapper']}>
                    <h5 className={styles['title']}>Forgot Password</h5>

                    <form className={styles['form']}>
                        <div className={styles['form-group']}>
                            <label
                                htmlFor="email-input"
                                className={styles['label']}
                            >
                                Email
                            </label>
                            <Input
                                id="email-input"
                                type="email"
                                value={email}
                                placeholder="Enter your email address"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                icon={{
                                    iconPosition: 'left',
                                    iconClass: 'fas fa-envelope',
                                }}
                                disabled={pending ? true : false}
                            />
                        </div>
                        <Button
                            className={styles['submit']}
                            onClick={(event: any) => handleSubmit(event)}
                            disabled={pending ? true : false}
                            loading={pending}
                        >
                            Reset password
                        </Button>
                        <div className={styles['bottom-links']}>
                            <Link
                                className={styles['link']}
                                to={routes.login}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </Link>
                            <Link
                                className={styles['link']}
                                to={routes.login}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                Login
                            </Link>
                        </div>{' '}
                    </form>
                </div>
            </FlexibleSection>
        </>
    );
};

export default ForgotPasswordSection;
