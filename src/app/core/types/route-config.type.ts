import { Route } from '@angular/compiler/src/core';

export type RouteConfigType = Record<
  string,
  Route & { path: string; name?: string }
>;
