/**
 * @file index.tsx
 * @description Reset password section.
 */

'use strict';
import { FunctionComponent, useState } from 'react';
import { Navigate, useSearchParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { useModal } from '../../../hooks/useModal';
import routes from '../../../global/react-router/routes';
import apis from '../../../apis';
import { FlexibleSection } from '../../Content/components/GridSection';
import Input from '../../Input';
import Button from '../../Button';
import ServerMessage from '../../ServerMessage';
import { Lock } from '../../Icons/Lock';
import staticTexts from '../../../render/static-texts';
import * as styles from './ResetPasswordSection.module.css';
const texts = staticTexts.resetPasswordSection;

/**
 * Reset password section.
 * @returns Returns the component.
 */
const ResetPasswordSection: FunctionComponent = function () {
    const navigate = useNavigate(),
        token = useSearchParams()[0].get('token'),
        { setModal } = useModal();
    if (!token) return <Navigate to={routes.login} />;

    const { sessionData } = useAuth(),
        [pending, setPending] = useState(false),
        [serverMessage, setServerMessage] = useState(null),
        [password, setPassword] = useState(''),
        [passwordRepeat, setPasswordRepeat] = useState('');

    if (sessionData) {
        return <Navigate to={routes.home} />;
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        setServerMessage(null);
        if (!password) {
            document.getElementById('password-input').focus();
            return;
        }
        if (!passwordRepeat) {
            document.getElementById('password-repeat-input').focus();
            return;
        }
        if (password !== passwordRepeat) {
            setServerMessage({
                message: texts.passwordNotMatch,
                type: 'error',
            });
            return;
        }

        setPending(true);

        const { message, success, data } = await apis.backend.resetPassword(
            token,
            password
        );
        if (!success) {
            console.warn(message);
            setServerMessage({ message: message, type: 'error' });
            setPassword('');
            setPasswordRepeat('');
            setPending(false);
            setTimeout(() => {
                document.getElementById('password-input').focus();
            }, 10);
            return;
        }

        setModal({
            type: 'alert',
            variant: 'success',
            message,
            onClose: () => navigate(routes.login),
        });
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
                        </div>
                        <div className={styles['form-group']}>
                            <label
                                htmlFor="password-repeat-input"
                                className={styles['label']}
                            >
                                {texts.passwordConfirmLabel}
                            </label>
                            <Input
                                id="password-repeat-input"
                                value={passwordRepeat}
                                type="password"
                                placeholder={
                                    texts.passwordConfirmInputPlaceholder
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
                        <Button
                            className={styles['submit']}
                            onClick={(event: any) => handleSubmit(event)}
                            disabled={pending ? true : false}
                            loading={pending}
                        >
                            {texts.resetPasswordButton}
                        </Button>
                    </form>
                </div>
            </FlexibleSection>
        </>
    );
};

export default ResetPasswordSection;
