import { lazy } from 'react';

const Learn = lazy(() => import('@/pages/learn'));

export const learnRoutes = [
  {
    path: '/learn',
    element: <Learn />
  }
]; 