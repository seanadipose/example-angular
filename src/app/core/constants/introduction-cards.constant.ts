import { DashboardCard } from 'src/app/shared/models/dashboard-card.model';
import { dependencyInjectionRoutesFactory } from '../factories/dependency-injection-routes.factory';
import { formPracticesRoutesFactory } from '../factories/form-practices-routes.constant';
import { rootRoutesFactory } from '../factories/root-routes.factory';

const formRoutes = formPracticesRoutesFactory();
const servicesRoutes = dependencyInjectionRoutesFactory();
const root = rootRoutesFactory();

export const INTRODUCTION_CARDS: readonly DashboardCard[] = [
  {
    title: 'Forms',
    link: [root.forms.path],
    description: 'Angular Form Examples using Reactive Forms',
    linkText: 'Tutorial and examples',
  },
  {
    title: 'Resources',
    link: [root.resources.path],
    description:
      'Helpful links, packages, resources and tutorials to succeed in Angular.',
    linkText: 'Resources',
  },
];

export const FORMS_INTRODUCTION_CARDS: readonly DashboardCard[] = [
  {
    title: 'Forms',
    link: [root.forms.path, formRoutes.reactiveForms.path],
    description: 'Angular Form Examples using Reactive Forms and RxWebForms',
    linkText: 'Tutorial and examples',
  },
  {
    title: 'Validators',
    link: [root.forms.path, formRoutes.validators.path],
    description: 'Angular Validator Examples',
    linkText: 'Tutorial and examples',
  },
];

export const SERVICES_INTRODUCTION_CARDS: readonly DashboardCard[] = [
  {
    title: 'Best Practices',
    link: [root.services.path, servicesRoutes.bestPractices.path],
    description: 'Angular Form Examples using Reactive Forms and RxWebForms',
    linkText: 'Tutorial and examples',
  },
  {
    title: 'Dependency Injection',
    link: [root.services.path, servicesRoutes.dependencyInjection.path],
    description: 'Angular Validator Examples',
    linkText: 'Tutorial and examples',
  },
];
