/**
 * @file mobile-navbar-items.ts
 * @desc Header mobile navbar items.
 */

'use strict';
import type { MobileNavbarSection } from '../../types/mobile-navbar';
import routes from '../routes';
import { House } from '../../components/Icons/House';
import { User } from '../../components/Icons/User';
import { Code } from '../../components/Icons/Code';
import { showToast } from '../../components/Toast';

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
                image: '/assets/static/img/shutdowntimer.png',
                hideOnClick: false,
                onClick: () =>
                    showToast('info', {
                        title: 'Info',
                        message: 'This application is currently unavailable.',
                    }),
            },
            {
                text: 'ASC File Cryptor',
                desc: 'Private file cryptor',
                image: '/assets/static/img/ascfilecryptor.png',
                hideOnClick: false,
                onClick: () =>
                    showToast('info', {
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
