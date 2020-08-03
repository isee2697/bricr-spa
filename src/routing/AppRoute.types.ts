import { AppRoute } from './AppRoute.enum';

export type AppRouteAliases = {
  [Key in AppRoute]?: string;
};
