import { InjectionToken } from '@angular/core';
import { DashboardCardListType } from '../types/dashboard-cards.type';

export const INTRODUCTION_CARDS_TOKEN = new InjectionToken<
  DashboardCardListType[]
>('Dashboard cards for introductions component');

export const FORM_INTRODUCTION_CARDS_TOKEN = new InjectionToken<
  DashboardCardListType[]
>('Dashboard cards for introductions component');
