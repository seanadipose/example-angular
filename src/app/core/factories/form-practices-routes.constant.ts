import { FormsIntroductionComponent } from 'src/app/pages/forms-practices/pages/forms-introduction/forms-introduction.component';
import { ReactiveFormsComponent } from 'src/app/pages/forms-practices/pages/reactive-forms/reactive-forms.component';
import { ValidatorsComponent } from 'src/app/pages/forms-practices/pages/validators/validators.component';
import { RouteConfigType } from '../types/route-config.type';

export function formPracticesRoutesFactory(): RouteConfigType {
  const route = Object.create({});

  Object.assign(route, {
    introduction: {
      path: '',
      component: FormsIntroductionComponent,
      name: 'overview',
    },
    reactiveForms: {
      path: 'reactive-forms',
      component: ReactiveFormsComponent,
      name: 'Reactive Forms',
    },
    validators: {
      path: 'validators',
      component: ValidatorsComponent,
      name: 'Validators',
    },
  });
  return route;
}
