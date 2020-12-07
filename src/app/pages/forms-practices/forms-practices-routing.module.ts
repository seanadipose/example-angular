import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { formPracticesRoutesFactory } from 'src/app/core/constants/form-practices-routes.constant';
import { routeConfigToArray } from 'src/app/core/functions/route-config-to-array.function';

const formRoutes = formPracticesRoutesFactory();

const routes: Routes = routeConfigToArray(formRoutes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsPracticesRoutingModule {}
