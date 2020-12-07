import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './home/pages/introduction/introduction.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { rootRoutesFactory } from './core/factories/root-routes.factory';
import { routeConfigToArray } from './core/functions/route-config-to-array.function';

const rootChildren = routeConfigToArray(rootRoutesFactory());

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        children: rootChildren,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
