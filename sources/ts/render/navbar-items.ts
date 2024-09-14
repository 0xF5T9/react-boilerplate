/**
 * @file navbar-items.ts
 * @desc Header navbar items.
 */

'use strict';
import type { NavbarItem } from '~/ts/types/navbar';
import routes from '~/ts/global/react-router/routes';
import { House } from '~/ts/components/Icons/House';
import { CaretDown } from '~/ts/components/Icons/CaretDown';
import { Code } from '~/ts/components/Icons/Code';
import { User } from '~/ts/components/Icons/User';

export default [
    {
        text: 'Home',
        to: routes.home,
        icon: House,
    },
    {
        text: 'Softwares',
        icon: CaretDown,
        items: [
            {
                title: 'Shutdown Timer',
                desc: 'A simple PC shutdown timer',
                image: '/assets/boilerplate/img/shutdowntimer.png',
                hideOnClick: true,
            },
            {
                title: 'ASC File Cryptor',
                desc: 'Private file cryptor',
                image: '/assets/boilerplate/img/ascfilecryptor.png',
                hideOnClick: true,
            },
        ],
    },
    {
        text: 'Components',
        to: routes.samples.components,
        icon: CaretDown,
        layout: 'full-4',
        items: [
            {
                title: 'Section',
                to: routes.samples.section,
                icon: Code,
            },
            {
                title: 'Button',
                to: routes.samples.button,
                icon: Code,
            },
            {
                title: 'Input',
                to: routes.samples.input,
                icon: Code,
            },
            {
                title: 'Checkbox',
                to: routes.samples.checkbox,
                icon: Code,
            },
            {
                title: 'Radio',
                to: routes.samples.radio,
                icon: Code,
            },
            {
                title: 'Select',
                to: routes.samples.select,
                icon: Code,
            },
            {
                title: 'Labeled Input',
                to: routes.samples.labeledInput,
                icon: Code,
            },
            {
                title: 'Labeled Select',
                to: routes.samples.labeledSelect,
                icon: Code,
            },
            {
                title: 'Toast',
                to: routes.samples.toast,
                icon: Code,
            },
            {
                title: 'Modal',
                to: routes.samples.modal,
                icon: Code,
            },
            {
                title: 'Typography',
                to: routes.samples.typography,
                icon: Code,
            },
        ],
    },
    {
        text: 'Profile',
        to: routes.profile,
        icon: User,
        authOnly: true,
    },
] satisfies NavbarItem[] as NavbarItem[];
