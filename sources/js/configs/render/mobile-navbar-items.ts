/**
 * @file mobile-navbar-items.ts
 * @desc Header mobile navbar items.
 */

'use strict';
import type { MobileNavbarSection } from '../../types/mobile-navbar';
import routes from '../routes';
import { Fa6SolidHouse } from '../../components/Icons/FAHome';
import { Fa6SolidUser } from '../../components/Icons/FAUser';
import { Fa6SolidCode } from '../../components/Icons/FACode';
import { showToast } from '../../components/ToastOverlay';

export default [
    {
        title: 'Navigation',
        items: [
            {
                text: 'Home',
                to: routes.home,
                icon: Fa6SolidHouse,
            },
            {
                text: 'Profile',
                to: routes.profile,
                icon: Fa6SolidUser,
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
                icon: Fa6SolidCode,
            },
            {
                text: 'Button',
                to: routes.samples.button,
                icon: Fa6SolidCode,
            },
            {
                text: 'Input',
                to: routes.samples.input,
                icon: Fa6SolidCode,
            },
            {
                text: 'Checkbox',
                to: routes.samples.checkbox,
                icon: Fa6SolidCode,
            },
            {
                text: 'Radio',
                to: routes.samples.radio,
                icon: Fa6SolidCode,
            },
            {
                text: 'Select',
                to: routes.samples.select,
                icon: Fa6SolidCode,
            },
            {
                text: 'Labeled Input',
                to: routes.samples.labeledInput,
                icon: Fa6SolidCode,
            },
            {
                text: 'Labeled Select',
                to: routes.samples.labeledSelect,
                icon: Fa6SolidCode,
            },
            {
                text: 'Toast',
                to: routes.samples.toast,
                icon: Fa6SolidCode,
            },
        ],
    },
] satisfies MobileNavbarSection[] as MobileNavbarSection[];
