import { lazy } from 'react';

const Todo = lazy(() => import('@/pages/todo'));

export const todoRoutes = [
  { path: '/todo', element: <Todo /> },
];
