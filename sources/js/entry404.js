/**
 * @file entry404.js
 * @description 404 page entry script file.
 */

'use strict';

import '../css/404.css';
import { createRoot } from 'react-dom/client';
import { ContentSection } from './components/Content';
import Button from './components/Button';
const $ = document.querySelector.bind(document);

// Render the application.
(() => {
    function Content404() {
        return (
            <div id="content-wrapper">
                <ContentSection id="section-404" flexCenter textCenter>
                    <h1 id="title-404">404</h1>
                    <h1 id="subtitle-404">Page Not Found</h1>
                    <Button
                        id="homepage-link-404"
                        elementType="a"
                        buttonProps={{ href: '/' }}
                    >
                        <i className="fa-solid fa-arrow-left"></i> Back To
                        Homepage
                    </Button>
                </ContentSection>
            </div>
        );
    }

    function App404() {
        return (
            <div id="app">
                <Content404 />
            </div>
        );
    }

    const render = createRoot($('#root'));
    render.render(<App404 />);
})();
