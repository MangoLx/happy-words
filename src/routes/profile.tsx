import { lazy } from 'react';

const Profile = lazy(() => import('@/pages/profile'));

export const profileRoutes = [
  {
    path: '/profile',
    element: <Profile />
  }
]; 