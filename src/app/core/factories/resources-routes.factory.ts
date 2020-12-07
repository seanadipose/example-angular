import { FormsIntroductionComponent } from 'src/app/pages/forms-practices/pages/forms-introduction/forms-introduction.component';
import { ResourcesComponent } from 'src/app/pages/resources/pages/resources/resources.component';
import { RouteConfigType } from '../types/route-config.type';

export function resourcesRoutesFactory(): RouteConfigType {
  const route = Object.create({});

  Object.assign(route, {
    introduction: {
      path: '',
      component: ResourcesComponent,
      name: 'overview',
    },
  });
  return route;
}
