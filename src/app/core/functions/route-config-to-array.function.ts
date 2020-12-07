import { Routes } from '@angular/router';
import { RouteConfigType } from '../types/route-config.type';

export function routeConfigToArray(
  routeConfig: RouteConfigType
): Routes & { name?: string } {
  const routes = Object.entries(routeConfig).reduce(
    (prev, curr) => prev.concat(curr[1]),
    []
  );
  return routes;
}
