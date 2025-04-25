import { Navigate } from 'react-router-dom';
import { homeRoutes } from './home';
import { errorRoutes } from './error';
import { todoRoutes } from './todo';
import { learnRoutes } from './learn';
import { profileRoutes } from './profile';

// 添加根路径重定向到/home
const rootRoute = {
  path: '/',
  element: <Navigate to="/home" replace />
};

export const routes = [
  rootRoute,
  ...homeRoutes, 
  ...learnRoutes, 
  ...profileRoutes, 
  ...errorRoutes, 
  ...todoRoutes
];
