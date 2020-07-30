import { AppRoute } from './AppRoute.enum';
import { AppRouteAliases } from './AppRoute.types';

export const appRouteAliases: AppRouteAliases = {
  [AppRoute.pim]: AppRoute.project,
};

export const matchesRouteAlias = (pathname: string, route: AppRoute) =>
  appRouteAliases[route] && pathname.startsWith(appRouteAliases[route]!);
