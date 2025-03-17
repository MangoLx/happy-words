import { homeRoutes } from './home';
import { errorRoutes } from './error';

export const routes = [...homeRoutes, ...errorRoutes];
