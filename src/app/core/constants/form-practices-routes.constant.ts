import { ReactiveFormsComponent } from 'src/app/pages/forms-practices/pages/reactive-forms/reactive-forms.component';
import { RouteConfigType } from '../types/route-config.type';

export function formPracticesRoutesFactory(): RouteConfigType {
  const route = Object.create({});

  Object.assign(route, {
    reactiveForms: {
      path: 'reactive-forms',
      component: ReactiveFormsComponent,
    },
  });
  return route;
}
