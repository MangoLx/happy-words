import { homeRoutes } from './home';
import { errorRoutes } from './error';
import { todoRoutes } from './todo';

export const routes = [...homeRoutes, ...errorRoutes, ...todoRoutes];
