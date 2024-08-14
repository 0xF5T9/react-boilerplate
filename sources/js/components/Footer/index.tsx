/**
 * @file index.tsx
 * @description Footer component.
 */

'use strict';
import { useLayoutEffect, useRef } from 'react';
import { Github } from '../Icons/Github';
import { Discord } from '../Icons/Discord';

const $ = document.querySelector.bind(document);
import * as styles from './Footer.module.css';

/**
 * Footer component.
 * @returns Returns the component.
 */
function Footer() {
    const footer: any = useRef();

    useLayoutEffect(() => {
        function handleFooterResize() {
            const current_footer_height = getComputedStyle(
                document.documentElement
            ).getPropertyValue('--footer-height');
            if (!current_footer_height) {
                console.warn(
                    'Expect footer height variable in root, but none were found.',
                    `\nFound value: '${current_footer_height}'`
                );
                return;
            }

            const footer_height =
                    footer?.current?.getBoundingClientRect()?.height,
                parsed_height = parseFloat(footer_height.toFixed(2));

            document.documentElement.style.setProperty(
                '--footer-height',
                `${parsed_height}px`
            );
        }

        const observer = new ResizeObserver(handleFooterResize);
        observer?.observe(footer?.current);

        return () => {
            observer?.disconnect();

            const current_footer_height = getComputedStyle(
                document.documentElement
            ).getPropertyValue('--footer-height');
            if (!current_footer_height)
                console.warn(
                    'Expect footer height variable in root, but none were found.',
                    `\nFound value: '${current_footer_height}'`
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
                        © Copyright 2024 0xF5T9. All right Reserved.
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
}

export default Footer;
