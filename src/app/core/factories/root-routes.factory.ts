import { RouteConfigType } from '../types/route-config.type';
import { IntroductionComponent } from '../../home/pages/introduction/introduction.component';

export function rootRoutesFactory(): RouteConfigType {
  const route = Object.create({});

  Object.assign(route, {
    introduction: {
      path: 'intro',
      component: IntroductionComponent,
    },
    forms: {
      path: 'forms',
      loadChildren: () =>
        import('../../pages/forms-practices/forms-practices.module').then(
          (m) => m.FormsPracticesModule
        ),
    },
    resources: {
      path: 'resources',
      loadChildren: () =>
        import('../../pages/resources/resources.module').then(
          (m) => m.ResourcesModule
        ),
    },
    services: {
      path: 'services',
      loadChildren: () =>
        import(
          '../../pages/dependency-injection/dependency-injection.module'
        ).then((m) => m.DependencyInjectionModule),
    },
    redirect: {
      path: '',
      redirectTo: 'intro',
      pathMatch: 'full',
    },
  });
  return route;
}
