/**
 * @file react-router.js
 * @description React router configurations.
 */

'use strict';
import { GlobalProvider } from '../components/Context/Global';
import { AuthProvider } from '../hooks/useAuth';
import ProtectedRoute from '../components/ProtectedRoute';

import App, { loader as appLoader } from '../components/App';
import App404 from '../components/App404';
import * as Sections from '../components/Sections';

// Routes path.
const routes = {
    home: '/',
    login: '/login',
    secret: '/secret',
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
            <GlobalProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </GlobalProvider>
        ),
        errorElement: (
            <GlobalProvider>
                <AuthProvider>
                    <App404 />
                </AuthProvider>
            </GlobalProvider>
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
                        path: routes.login,
                        element: <Sections.LoginSection />,
                    },
                    {
                        path: routes.secret,
                        element: (
                            <ProtectedRoute>
                                <Sections.SecretSection />
                            </ProtectedRoute>
                        ),
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
