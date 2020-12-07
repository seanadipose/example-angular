import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { resourcesRoutesFactory } from 'src/app/core/factories/resources-routes.factory';
import { routeConfigToArray } from 'src/app/core/functions/route-config-to-array.function';
const resourceRoutes = routeConfigToArray(resourcesRoutesFactory());
const routes: Routes = resourceRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
