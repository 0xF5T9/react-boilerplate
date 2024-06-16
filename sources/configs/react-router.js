/**
 * @file react-router.js
 * @description React router configurations.
 */

'use strict';
import { GlobalContextProvider } from '../js/components/Context/Global';
import App, { loader as appLoader } from '../js/components/App';
import App404 from '../js/components/App404';
import * as Sections from '../js/components/Sections';

// Routes path.
const routes = {
    home: '/',
    samples: {
        button: '/samples/button',
        input: '/samples/input',
        checkbox: '/samples/checkbox',
        radio: '/samples/radio',
    },
};

// Application router.
const appRouter = [
    {
        path: routes.home,
        element: (
            <GlobalContextProvider>
                <App />
            </GlobalContextProvider>
        ),
        errorElement: (
            <GlobalContextProvider>
                <App404 />
            </GlobalContextProvider>
        ),
        loader: appLoader,
        children: [
            {
                errorElement: <div>Error Section Here</div>, // TODO: add error section.
                children: [
                    {
                        index: true,
                        element: <Sections.IndexSection />,
                    },
                    {
                        path: routes.samples.button,
                        element: <Sections.ButtonSampleSection />,
                    },
                    {
                        path: routes.samples.input,
                        element: <Sections.InputSampleSection />,
                    },
                    {
                        path: routes.samples.checkbox,
                        element: <Sections.CheckboxSampleSection />,
                    },
                    {
                        path: routes.samples.radio,
                        element: <Sections.RadioSampleSection />,
                    },
                ],
            },
        ],
    },
];

const config = {
    routes,
    appRouter,
};

export default config;
export { routes, appRouter };
