import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsPracticesRoutingModule } from './forms-practices-routing.module';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormgroupComponent } from './components/formgroup/formgroup.component';
import { FormbuilderComponent } from './components/formbuilder/formbuilder.component';
import { FormbuilderClassComponent } from './components/formbuilder-class/formbuilder-class.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ValidatorsComponent } from './pages/validators/validators.component';
import { EaFormsModule } from 'src/app/modules/forms/forms.module';
import { FormsIntroductionComponent } from './pages/forms-introduction/forms-introduction.component';
import { FORM_INTRODUCTION_CARDS_TOKEN } from 'src/app/core/tokens/dashboard-cards.token';
import { FORMS_INTRODUCTION_CARDS } from 'src/app/core/constants/introduction-cards.constant';

@NgModule({
  declarations: [
    ReactiveFormsComponent,
    FormgroupComponent,
    FormbuilderComponent,
    FormbuilderClassComponent,
    ContactFormComponent,
    ValidatorsComponent,
    FormsIntroductionComponent,
  ],
  imports: [
    CommonModule,
    EaFormsModule,
    SharedModule,
    FormsPracticesRoutingModule,
  ],
  providers: [
    {
      provide: FORM_INTRODUCTION_CARDS_TOKEN,
      useValue: FORMS_INTRODUCTION_CARDS,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormsPracticesModule {}
