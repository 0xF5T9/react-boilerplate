/**
 * @file index.js
 * @description The footer component.
 */

'use strict';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/Global';
import * as Common from '../Common';
import './Footer.css';
const $ = document.querySelector.bind(document);

/**
 * Check if the footer is visible.
 * @returns {boolean} Returns true if the footer is visible, otherwise returns false.
 */
function isFooterComponentVisible() {
    const footer = $('#footer');
    if (!footer) throw `'#footer' element not found.`;

    return getComputedStyle(footer).getPropertyValue('display') != 'none'
        ? true
        : false;
}

/**
 * Footer component.
 * @returns Returns the footer component.
 */
function Footer() {
    const { isFooterVisible, footerHeight } = useContext(GlobalContext);

    useEffect(() => {
        if (!isFooterVisible) {
            document.documentElement.style.setProperty(
                '--footer-height',
                '0px'
            );
        } else {
            document.documentElement.style.setProperty(
                '--footer-height',
                footerHeight
            );
        }
    }, [isFooterVisible]);

    return (
        <footer
            id="footer"
            className="top-border"
            style={{ display: isFooterVisible ? 'flex' : 'none' }}
        >
            <div id="social-link-wrapper">
                <Common.Anchor noDefault>
                    <i className="fa-brands fa-github"></i>
                </Common.Anchor>

                <Common.Anchor noDefault>
                    <i className="fa-brands fa-facebook"></i>
                </Common.Anchor>

                <Common.Anchor noDefault>
                    <i className="fa-brands fa-instagram"></i>
                </Common.Anchor>

                <Common.Anchor noDefault>
                    <i className="fa-brands fa-snapchat"></i>
                </Common.Anchor>

                <Common.Anchor noDefault>
                    <i className="fa-brands fa-pinterest-p"></i>
                </Common.Anchor>

                <Common.Anchor noDefault>
                    <i className="fa-brands fa-twitter"></i>
                </Common.Anchor>

                <Common.Anchor noDefault>
                    <i className="fa-brands fa-linkedin-in"></i>
                </Common.Anchor>
            </div>
            <p id="powered-text">
                Powered by <Common.Anchor noDefault>0xF5T9</Common.Anchor>
            </p>
        </footer>
    );
}

export default Footer;
export { isFooterComponentVisible };
