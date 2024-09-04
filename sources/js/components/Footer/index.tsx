/**
 * @file index.tsx
 * @description Footer.
 */

'use strict';
import { FunctionComponent, useLayoutEffect, useRef } from 'react';

import { Github } from '../Icons/Github';
import { Discord } from '../Icons/Discord';
import staticTexts from '../../render/static-texts';
import * as styles from './Footer.module.css';
const { footerCopyRightText } = staticTexts;

/**
 * Footer.
 * @returns Returns the component.
 */
const Footer: FunctionComponent = function () {
    const footer = useRef<HTMLElement>(),
        timeoutId = useRef<NodeJS.Timeout>(null);

    useLayoutEffect(() => {
        function handleFooterResize() {
            if (timeoutId?.current) clearTimeout(timeoutId.current);

            timeoutId.current = setTimeout(() => {
                const currentFooterHeight = getComputedStyle(
                    document.documentElement
                ).getPropertyValue('--footer-height');
                if (!currentFooterHeight) {
                    console.warn(
                        'Expect footer height variable in root, but none were found.',
                        `\nFound value: '${currentFooterHeight}'`
                    );
                    return;
                }

                const footerHeight =
                        footer?.current?.getBoundingClientRect()?.height,
                    parsedHeight = parseFloat(footerHeight.toFixed(2));

                document.documentElement.style.setProperty(
                    '--footer-height',
                    `${parsedHeight}px`
                );
            }, 1);
        }

        // BUG: ResizeObserver loop completed with undelivered notifications.
        // Added 1ms debounce. To be observed.
        const observer = new ResizeObserver(handleFooterResize);
        observer?.observe(footer?.current);

        return () => {
            observer?.disconnect();

            const currentFooterHeight = getComputedStyle(
                document.documentElement
            ).getPropertyValue('--footer-height');
            if (!currentFooterHeight)
                console.warn(
                    'Expect footer height variable in root, but none were found.',
                    `\nFound value: '${currentFooterHeight}'`
                );
            document.documentElement.style.setProperty(
                '--footer-height',
                `0px`
            );
        };
    }, []);

    return (
        <footer ref={footer} className={styles['footer']}>
            <div className={styles['footer-content']}>
                <div className={styles['business-section']}></div>

                <div className={styles['bottom-section']}>
                    <span className={styles['copyright']}>
                        {footerCopyRightText}
                    </span>
                    <div className={styles['social-links']}>
                        <a
                            className={styles['social-link']}
                            style={
                                {
                                    '--social-link-color-hover': '#3a3a3a',
                                    '--social-link-filter-hover':
                                        'brightness(1)',
                                } as React.CSSProperties
                            }
                            href="https://github.com/0xF5T9"
                            target="_blank"
                        >
                            <Github />
                        </a>
                        <a
                            className={styles['social-link']}
                            style={
                                {
                                    '--social-link-color-hover': '#5868f2',
                                    '--social-link-filter-hover':
                                        'brightness(1)',
                                } as React.CSSProperties
                            }
                            href="https://discord.com/"
                            target="_blank"
                        >
                            <Discord />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
