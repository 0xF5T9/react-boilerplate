/**
 * @file index.js
 * @description The footer component.
 */

'use strict';
import * as Common from '../Common';

/***************************
 * FOOTER CHILD COMPONENTS *
 ***************************/

// ...

/********************
 * FOOTER COMPONENT *
 ********************/

/**
 * Footer component.
 * @returns Returns the footer component.
 */
function Footer() {
    return (
        <footer id="footer" className="top-border">
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

// Exports:
export default Footer;
