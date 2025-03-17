import { lazy } from 'react';

const NotFound = lazy(() => import('@/pages/error/404'));

export const errorRoutes = [
  { path: '/404', element: <NotFound /> },
];