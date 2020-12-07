import { InjectionToken } from '@angular/core';
import { DashboardCardListType } from '../types/dashboard-cards.type';
import { ResourceCardsType } from '../types/resource-cards.type';
import { ServicesCardsType } from '../types/services-cards.type';

export const INTRODUCTION_CARDS_TOKEN = new InjectionToken<
  DashboardCardListType[]
>('Dashboard cards for introductions component');

export const FORM_INTRODUCTION_CARDS_TOKEN = new InjectionToken<
  DashboardCardListType[]
>('Dashboard cards for introductions component');

export const RESOURCES_CARDS_TOKEN = new InjectionToken<ResourceCardsType>(
  'resources cards'
);
export const SERVICES_CARDS_TOKEN = new InjectionToken<ServicesCardsType>(
  'resources cards'
);
