import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { dependencyInjectionRoutesFactory } from 'src/app/core/factories/dependency-injection-routes.factory';
import { routeConfigToArray } from 'src/app/core/functions/route-config-to-array.function';

const routes: Routes = routeConfigToArray(dependencyInjectionRoutesFactory());

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependencyInjectionRoutingModule {}
