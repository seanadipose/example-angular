import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './home/pages/introduction/introduction.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        children: [
          {
            path: '',
            component: IntroductionComponent,
          },
          {
            path: 'forms',
            loadChildren: () =>
              import('./pages/forms-practices/forms-practices.module').then(
                (m) => m.FormsPracticesModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
