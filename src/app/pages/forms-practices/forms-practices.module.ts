import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsPracticesRoutingModule } from './forms-practices-routing.module';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormgroupComponent } from './components/formgroup/formgroup.component';
import { FormbuilderComponent } from './components/formbuilder/formbuilder.component';
import { FormbuilderClassComponent } from './components/formbuilder-class/formbuilder-class.component';

@NgModule({
  declarations: [
    ReactiveFormsComponent,
    FormgroupComponent,
    FormbuilderComponent,
    FormbuilderClassComponent,
  ],
  imports: [CommonModule, SharedModule, FormsPracticesRoutingModule],
})
export class FormsPracticesModule {}
