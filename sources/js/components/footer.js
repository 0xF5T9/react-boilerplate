/**
 * @file footer.js
 * @description The footer component.
 */

'use strict';
import * as commonComponents from './common.js';

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
export function Footer() {
    return (
        <footer id="footer" className="top-border">
            <div id="social-link-wrapper">
                <commonComponents.Anchor noDefault>
                    <i className="fa-brands fa-github"></i>
                </commonComponents.Anchor>

                <commonComponents.Anchor noDefault>
                    <i className="fa-brands fa-facebook"></i>
                </commonComponents.Anchor>

                <commonComponents.Anchor noDefault>
                    <i className="fa-brands fa-instagram"></i>
                </commonComponents.Anchor>

                <commonComponents.Anchor noDefault>
                    <i className="fa-brands fa-snapchat"></i>
                </commonComponents.Anchor>

                <commonComponents.Anchor noDefault>
                    <i className="fa-brands fa-pinterest-p"></i>
                </commonComponents.Anchor>

                <commonComponents.Anchor noDefault>
                    <i className="fa-brands fa-twitter"></i>
                </commonComponents.Anchor>

                <commonComponents.Anchor noDefault>
                    <i className="fa-brands fa-linkedin-in"></i>
                </commonComponents.Anchor>
            </div>
            <p id="powered-text">
                Powered by{' '}
                <commonComponents.Anchor noDefault>
                    0xF5T9
                </commonComponents.Anchor>
            </p>
        </footer>
    );
}
