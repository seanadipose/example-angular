import { ReactiveFormsComponent } from 'src/app/pages/forms-practices/pages/reactive-forms/reactive-forms.component';
import { ValidatorsComponent } from 'src/app/pages/forms-practices/pages/validators/validators.component';
import { RouteConfigType } from '../types/route-config.type';

export function formPracticesRoutesFactory(): RouteConfigType {
  const route = Object.create({});

  Object.assign(route, {
    reactiveForms: {
      path: 'reactive-forms',
      component: ReactiveFormsComponent,
    },
    validators: {
      path: 'validators',
      component: ValidatorsComponent,
    },
  });
  return route;
}
