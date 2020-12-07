import { RouteConfigType } from '../types/route-config.type';
import { IntroductionComponent } from '../../home/pages/introduction/introduction.component';

export function rootRoutesFactory(): RouteConfigType {
  const route = Object.create({});

  Object.assign(route, {
    introduction: {
      path: '',
      component: IntroductionComponent,
    },
    forms: {
      path: 'forms',
      loadChildren: () =>
        import('../../pages/forms-practices/forms-practices.module').then(
          (m) => m.FormsPracticesModule
        ),
    },
  });
  return route;
}