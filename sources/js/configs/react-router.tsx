/**
 * @file react-router.tsx
 * @description React router configurations.
 */

'use strict';
import routes from './routes';
import { AuthProvider } from '../hooks/useAuth';
import { GlobalProvider } from '../components/Context/Global';
import { ModalProvider } from '../components/Modal';
import ProtectedRoute from '../components/ProtectedRoute';
import { DefaultLayout, BlankLayout, ErrorLayout } from '../components/Layouts';
import * as Sections from '../components/Sections';

const appRouter = [
    {
        path: routes.home,
        element: (
            <GlobalProvider>
                <AuthProvider>
                    <ModalProvider>
                        <DefaultLayout />
                    </ModalProvider>
                </AuthProvider>
            </GlobalProvider>
        ),
        errorElement: (
            <GlobalProvider>
                <AuthProvider>
                    <ModalProvider>
                        <ErrorLayout />
                    </ModalProvider>
                </AuthProvider>
            </GlobalProvider>
        ),
        children: [
            {
                // errorElement: <div>Error Section Here</div>,
                children: [
                    {
                        index: true,
                        element: <Sections.IndexSection />,
                    },
                    {
                        path: routes.profile,
                        element: (
                            <ProtectedRoute>
                                <Sections.ProfileSection />
                            </ProtectedRoute>
                        ),
                        loader: Sections.ProfileSectionLoader,
                    },
                    {
                        path: routes.samples.components,
                        element: <Sections.ComponentsSection />,
                    },
                    {
                        path: routes.samples.section,
                        element: <Sections.SectionsSampleSection />,
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
                    {
                        path: routes.samples.select,
                        element: <Sections.SelectSampleSection />,
                    },
                    {
                        path: routes.samples.labeledInput,
                        element: <Sections.LabeledInputSampleSection />,
                    },
                    {
                        path: routes.samples.labeledSelect,
                        element: <Sections.LabeledSelectSampleSection />,
                    },
                    {
                        path: routes.samples.toast,
                        element: <Sections.ToastSampleSection />,
                    },
                    {
                        path: routes.samples.modal,
                        element: <Sections.ModalSampleSection />,
                    },
                ],
            },
        ],
    },
    {
        path: routes.login,
        element: (
            <GlobalProvider>
                <AuthProvider>
                    <ModalProvider>
                        <BlankLayout />
                    </ModalProvider>
                </AuthProvider>
            </GlobalProvider>
        ),
        children: [
            {
                index: true,
                element: <Sections.LoginSection />,
            },
        ],
    },
    {
        path: routes.register,
        element: (
            <GlobalProvider>
                <AuthProvider>
                    <ModalProvider>
                        <BlankLayout />
                    </ModalProvider>
                </AuthProvider>
            </GlobalProvider>
        ),
        children: [
            {
                index: true,
                element: <Sections.RegisterSection />,
            },
        ],
    },
];

export default appRouter;
