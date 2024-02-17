import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoot from '@components/AppRoot';
import CenterCenterStack from '@components/CenterCenterStack';
import { lazyImport } from '@core/utils/lazyImport';

const { Dispatcher } = lazyImport(() => import('./dispatcher'), 'Dispatcher');

const ErrorPage = () => <CenterCenterStack>Error page this is</CenterCenterStack>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dispatcher />,
      },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
