/**
 * @file routes.ts
 * @description React router routes.
 */

const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    profile: '/profile',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    samples: {
        components: '/samples/components',
        section: '/samples/section',
        button: '/samples/button',
        input: '/samples/input',
        checkbox: '/samples/checkbox',
        radio: '/samples/radio',
        select: '/samples/select',
        labeledInput: '/samples/labeled-input',
        labeledSelect: '/samples/labeled-select',
        toast: '/samples/toast',
        modal: '/samples/modal',
        typography: '/samples/typography',
    },
} as const;

export default routes;
