import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './pages/resources/resources.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RESOURCES_CARDS_TOKEN } from 'src/app/core/tokens/dashboard-cards.token';
import { RESOURCES_CARDS } from 'src/app/core/constants/resource-cards.constant';
import { ResourcesTitleCardComponent } from './components/resources-title-card/resources-title-card.component';

@NgModule({
  declarations: [ResourcesComponent, ResourcesTitleCardComponent],
  imports: [CommonModule, ResourcesRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RESOURCES_CARDS_TOKEN, useValue: RESOURCES_CARDS }],
})
export class ResourcesModule {}
