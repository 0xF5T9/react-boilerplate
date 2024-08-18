/**
 * @file mobile-navbar.d.ts
 * @description Header mobile navbar item types.
 */

export type MobileNavbarSection = {
    title: string;
    to?: string;
    authOnly?: boolean;
    items: MobileNavbarItem[];
};

export type MobileNavbarItem = {
    text: string;
    desc?: string;
    image?: string;
    icon?: (...args: any[]) => any;
    to?: string;
    href?: string;
    target?: string;
    authOnly?: boolean;
    hideOnClick?: boolean;
    onClick?: (...args: any[]) => any;
};
