import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));

export const homeRoutes = [
  {
    path: '/home',
    element: <Home />
  }
];
