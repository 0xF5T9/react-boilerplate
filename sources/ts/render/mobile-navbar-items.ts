/**
 * @file mobile-navbar-items.ts
 * @desc Header mobile navbar items.
 */

'use strict';
import type { MobileNavbarSection } from '~/ts/types/mobile-navbar';
import routes from '~/ts/global/react-router/routes';
import { House } from '~/ts/components/Icons/House';
import { User } from '~/ts/components/Icons/User';
import { Code } from '~/ts/components/Icons/Code';
import { showToast } from '~/ts/components/Toast';

export default [
    {
        title: 'Navigation',
        items: [
            {
                text: 'Home',
                to: routes.home,
                icon: House,
            },
            {
                text: 'Profile',
                to: routes.profile,
                icon: User,
                authOnly: true,
            },
        ],
    },
    {
        title: 'Softwares',
        items: [
            {
                text: 'Shutdown Timer',
                desc: 'A simple PC shutdown timer',
                image: '/assets/boilerplate/img/shutdowntimer.png',
                hideOnClick: false,
                onClick: () =>
                    showToast({
                        variant: 'info',
                        title: 'Info',
                        message: 'This application is currently unavailable.',
                    }),
            },
            {
                text: 'ASC File Cryptor',
                desc: 'Private file cryptor',
                image: '/assets/boilerplate/img/ascfilecryptor.png',
                hideOnClick: false,
                onClick: () =>
                    showToast({
                        variant: 'info',
                        title: 'Info',
                        message: 'This application is currently unavailable.',
                    }),
            },
        ],
    },
    {
        title: 'Components',
        to: routes.samples.components,
        items: [
            {
                text: 'Section',
                to: routes.samples.section,
                icon: Code,
            },
            {
                text: 'Button',
                to: routes.samples.button,
                icon: Code,
            },
            {
                text: 'Input',
                to: routes.samples.input,
                icon: Code,
            },
            {
                text: 'Checkbox',
                to: routes.samples.checkbox,
                icon: Code,
            },
            {
                text: 'Radio',
                to: routes.samples.radio,
                icon: Code,
            },
            {
                text: 'Select',
                to: routes.samples.select,
                icon: Code,
            },
            {
                text: 'Labeled Input',
                to: routes.samples.labeledInput,
                icon: Code,
            },
            {
                text: 'Labeled Select',
                to: routes.samples.labeledSelect,
                icon: Code,
            },
            {
                text: 'Toast',
                to: routes.samples.toast,
                icon: Code,
            },
            {
                text: 'Modal',
                to: routes.samples.modal,
                icon: Code,
            },
            {
                text: 'Typography',
                to: routes.samples.typography,
                icon: Code,
            },
        ],
    },
] satisfies MobileNavbarSection[] as MobileNavbarSection[];
