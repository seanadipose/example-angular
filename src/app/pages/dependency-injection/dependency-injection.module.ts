import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInjectionRoutingModule } from './dependency-injection-routing.module';
import { ServicesIntroductionComponent } from './pages/services-introduction/services-introduction.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  INTRODUCTION_CARDS_TOKEN,
  SERVICES_CARDS_TOKEN,
} from 'src/app/core/tokens/dashboard-cards.token';
import { SERVICES_CARDS } from 'src/app/core/constants/services-cards.constant';
import { ServicesWhyComponent } from './pages/services-why/services-why.component';
import { ServicesBestPracticesComponent } from './pages/best-practices/services-best-practices.component';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { SERVICES_INTRODUCTION_CARDS } from 'src/app/core/constants/introduction-cards.constant';

@NgModule({
  declarations: [
    ServicesIntroductionComponent,
    ServicesWhyComponent,
    ServicesBestPracticesComponent,
    DependencyInjectionComponent,
  ],
  imports: [CommonModule, SharedModule, DependencyInjectionRoutingModule],

  providers: [
    { provide: SERVICES_CARDS_TOKEN, useValue: SERVICES_CARDS },
    {
      provide: INTRODUCTION_CARDS_TOKEN,
      useValue: SERVICES_INTRODUCTION_CARDS,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DependencyInjectionModule {}
