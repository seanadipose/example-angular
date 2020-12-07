import { ServicesBestPracticesComponent } from 'src/app/pages/dependency-injection/pages/best-practices/services-best-practices.component';
import { DependencyInjectionComponent } from 'src/app/pages/dependency-injection/pages/dependency-injection/dependency-injection.component';
import { ServicesIntroductionComponent } from 'src/app/pages/dependency-injection/pages/services-introduction/services-introduction.component';
import { ServicesWhyComponent } from 'src/app/pages/dependency-injection/pages/services-why/services-why.component';
import { RouteConfigType } from '../types/route-config.type';

export function dependencyInjectionRoutesFactory(): RouteConfigType {
  const route = Object.create({});

  Object.assign(route, {
    introduction: {
      path: '',
      component: ServicesIntroductionComponent,
      name: 'introduction',
    },
    bestPractices: {
      path: 'practices',
      component: ServicesBestPracticesComponent,
      name: 'Best Practices',
    },
    dependencyInjection: {
      path: 'dependency-injection',
      component: DependencyInjectionComponent,
      name: 'Dependency Injection',
    },
  });
  return route;
}
