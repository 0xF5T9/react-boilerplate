/**
 * @file navbar-items.ts
 * @desc Header navbar items.
 */

'use strict';
import type { NavbarItem } from '../../types/navbar';
import routes from '../routes';
import { Fa6SolidHouse } from '../../components/Icons/FAHome';
import { Fa6SolidCaretDown } from '../../components/Icons/FACaretDown';
import { Fa6SolidCode } from '../../components/Icons/FACode';
import { Fa6SolidUser } from '../../components/Icons/FAUser';

export default [
    {
        text: 'Home',
        to: routes.home,
        icon: Fa6SolidHouse,
    },
    {
        text: 'Softwares',
        icon: Fa6SolidCaretDown,
        items: [
            {
                title: 'Shutdown Timer',
                desc: 'A simple PC shutdown timer',
                image: '/assets/static/img/shutdowntimer.png',
                hideOnClick: true,
            },
            {
                title: 'ASC File Cryptor',
                desc: 'Private file cryptor',
                image: '/assets/static/img/ascfilecryptor.png',
                hideOnClick: true,
            },
        ],
    },
    {
        text: 'Components',
        to: routes.samples.components,
        icon: Fa6SolidCaretDown,
        layout: 'full-4',
        items: [
            {
                title: 'Section',
                to: routes.samples.section,
                icon: Fa6SolidCode,
            },
            {
                title: 'Button',
                to: routes.samples.button,
                icon: Fa6SolidCode,
            },
            {
                title: 'Input',
                to: routes.samples.input,
                icon: Fa6SolidCode,
            },
            {
                title: 'Checkbox',
                to: routes.samples.checkbox,
                icon: Fa6SolidCode,
            },
            {
                title: 'Radio',
                to: routes.samples.radio,
                icon: Fa6SolidCode,
            },
            {
                title: 'Select',
                to: routes.samples.select,
                icon: Fa6SolidCode,
            },
            {
                title: 'Labeled Input',
                to: routes.samples.labeledInput,
                icon: Fa6SolidCode,
            },
            {
                title: 'Labeled Select',
                to: routes.samples.labeledSelect,
                icon: Fa6SolidCode,
            },
            {
                title: 'Toast',
                to: routes.samples.toast,
                icon: Fa6SolidCode,
            },
        ],
    },
    {
        text: 'Profile',
        to: routes.profile,
        icon: Fa6SolidUser,
        authOnly: true,
    },
] satisfies NavbarItem[] as NavbarItem[];
