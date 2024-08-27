/**
 * @file static-render.ts
 * @description Most of the static render properties of components can be changed here.
 */

'use strict';

const staticRender = {
    brandLogoUrl: '/assets/static/img/brand-logo.png',
    brandLogoAlt: 'Brand logo.',
    brandText: 'React Project',
    headerLoginButtonText: 'Login',
    headerRegisterButtonText: 'Register',
    footerCopyRightText: '© Copyright 2024 0xF5T9. All right Reserved.',
    loginSection: {
        title: 'Login',
        usernameLabel: 'Username',
        usernameInputPlaceholder: 'Username',
        passwordLabel: 'Password',
        passwordInputPlaceholder: 'Password',
        loginButton: 'Login',
        forgotPassword: 'Forgot password?',
        backLink: 'Back',
        registerLink: 'Register',
        loginSuccessful: 'Redirecting...',
    },
    registerSection: {
        title: 'Register',
        emailLabel: 'Email',
        emailInputPlaceholder: 'Email',
        usernameLabel: 'Username',
        usernameInputPlaceholder: 'Username',
        passwordLabel: 'Password',
        passwordInputPlaceholder: 'Password',
        passwordConfirmLabel: 'Confirm Password',
        passwordConfirmInputPlaceholder: 'Password',
        consentText: 'I agree to the',
        termOfService: 'Terms of Service',
        termOfServiceModalText: 'No term of services available.',
        termOfServiceModalButton: 'Close',
        registerButton: 'Register',
        backLink: 'Back',
        loginLink: 'Login',
        consentRequirement:
            'You must agree to the Term of Service to register.',
        passwordNotMatch: 'Password not match.',
    },
    forgotPasswordSection: {
        title: 'Forgot Password',
        emailLabel: 'Email',
        emailInputPlaceholder: 'Enter your email address',
        resetPasswordButton: 'Reset password',
        backLink: 'Back',
        loginLink: 'Login',
    },
    resetPasswordSection: {
        title: 'Reset Password',
        passwordLabel: 'Password',
        passwordInputPlaceholder: 'Enter new password',
        passwordConfirmLabel: 'Confirm Password',
        passwordConfirmInputPlaceholder: 'Password',
        resetPasswordButton: 'Confirm',
        passwordNotMatch: 'Password not match.',
    },
    api: {
        backend: {
            unknownError: 'Unexpected server error occurred.',
            invalidEmail: 'The email address is invalid.',
            invalidUsernameCharacters:
                'The username contains invalid character(s). [a-zA-Z0-9]',
            invalidUsernameLength:
                'The username must have a minimum length of 6 characters and a maximum of 16 characters.',
            invalidPasswordLength:
                'The password must have a minimum length of 8 characters and a maximum of 32 characters.',
            invalidResetPasswordRequest: 'Invalid request.',
        },
    },
} as const;

export default staticRender;
