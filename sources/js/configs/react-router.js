/**
 * @file react-router.js
 * @description React router configurations.
 */

'use strict';
import { GlobalProvider } from '../components/Context/Global';
import { AuthProvider } from '../hooks/useAuth';
import ProtectedRoute from '../components/ProtectedRoute';
import {
    DefaultLayout,
    BlankLayout,
    Error404Layout,
} from '../components/Layouts';
import * as Sections from '../components/Sections';
import { Children } from 'react';

// Routes path.
const routes = {
    home: '/',
    login: '/login',
    profile: '/profile',
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
                    <DefaultLayout />
                </AuthProvider>
            </GlobalProvider>
        ),
        errorElement: (
            <GlobalProvider>
                <AuthProvider>
                    <Error404Layout />
                </AuthProvider>
            </GlobalProvider>
        ),
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
                        path: routes.profile,
                        element: (
                            <ProtectedRoute>
                                <Sections.ProfileSection />
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
