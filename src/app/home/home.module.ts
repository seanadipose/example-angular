import {
  CUSTOM_ELEMENTS_SCHEMA,
  InjectionToken,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatTreeModule } from '@angular/material/tree';

import {
  FORMS_INTRODUCTION_CARDS,
  INTRODUCTION_CARDS,
} from '../core/constants/introduction-cards.constant';
import { INTRODUCTION_CARDS_TOKEN } from '../core/tokens/dashboard-cards.token';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [NavigationComponent, HomePageComponent, IntroductionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatExpansionModule,
    MatTreeModule,
  ],
  exports: [NavigationComponent, HomePageComponent, IntroductionComponent],
  providers: [
    { provide: INTRODUCTION_CARDS_TOKEN, useValue: INTRODUCTION_CARDS },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
