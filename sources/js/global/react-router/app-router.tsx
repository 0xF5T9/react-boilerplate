/**
 * @file app-router.tsx
 * @description React router app router.
 */

'use strict';
import { RouteObject } from 'react-router-dom';
import routes from './routes';
import { AuthProvider } from '../../hooks/useAuth';
import { GlobalProvider } from '../../components/Context/Global';
import { ModalProvider } from '../../components/Modal';
import App from '../../components/App';
import ProtectedRoute from '../../components/ProtectedRoute';
import { DefaultLayout, BlankLayout } from '../../components/Layouts';
import * as Sections from '../../components/Sections';

const appRouter: Readonly<RouteObject[]> = [
    {
        path: routes.home,
        element: (
            <GlobalProvider>
                <AuthProvider>
                    <ModalProvider>
                        <App />
                    </ModalProvider>
                </AuthProvider>
            </GlobalProvider>
        ),
        errorElement: (
            <GlobalProvider>
                <AuthProvider>
                    <ModalProvider>
                        <div id="app">
                            <BlankLayout>
                                <Sections.ErrorSection />
                            </BlankLayout>
                        </div>
                    </ModalProvider>
                </AuthProvider>
            </GlobalProvider>
        ),
        children: [
            {
                children: [
                    {
                        index: true,
                        element: (
                            <DefaultLayout>
                                <Sections.IndexSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.login,
                        element: (
                            <BlankLayout>
                                <Sections.LoginSection />
                            </BlankLayout>
                        ),
                    },
                    {
                        path: routes.register,
                        element: (
                            <BlankLayout>
                                <Sections.RegisterSection />
                            </BlankLayout>
                        ),
                    },
                    {
                        path: routes.forgotPassword,
                        element: (
                            <BlankLayout>
                                <Sections.ForgotPasswordSection />
                            </BlankLayout>
                        ),
                    },
                    {
                        path: routes.resetPassword,
                        element: (
                            <BlankLayout>
                                <Sections.ResetPasswordSection />
                            </BlankLayout>
                        ),
                    },
                    {
                        path: routes.profile,
                        element: (
                            <DefaultLayout>
                                <ProtectedRoute>
                                    <Sections.ProfileSection />
                                </ProtectedRoute>
                            </DefaultLayout>
                        ),
                        loader: Sections.ProfileSectionLoader,
                    },
                    {
                        path: routes.samples.components,
                        element: (
                            <DefaultLayout>
                                <Sections.ComponentsSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.section,
                        element: (
                            <DefaultLayout>
                                <Sections.SectionsSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.button,
                        element: (
                            <DefaultLayout>
                                <Sections.ButtonSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.input,
                        element: (
                            <DefaultLayout>
                                <Sections.InputSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.checkbox,
                        element: (
                            <DefaultLayout>
                                <Sections.CheckboxSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.radio,
                        element: (
                            <DefaultLayout>
                                <Sections.RadioSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.select,
                        element: (
                            <DefaultLayout>
                                <Sections.SelectSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.labeledInput,
                        element: (
                            <DefaultLayout>
                                <Sections.LabeledInputSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.labeledSelect,
                        element: (
                            <DefaultLayout>
                                <Sections.LabeledSelectSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.toast,
                        element: (
                            <DefaultLayout>
                                <Sections.ToastSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.modal,
                        element: (
                            <DefaultLayout>
                                <Sections.ModalSampleSection />
                            </DefaultLayout>
                        ),
                    },
                    {
                        path: routes.samples.typography,
                        element: (
                            <DefaultLayout>
                                <Sections.TypographySection />
                            </DefaultLayout>
                        ),
                    },
                ],
            },
        ],
    },
];

export default appRouter;
