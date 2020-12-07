import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const modules = [
  MatSelectModule,
  MatInputModule,
  ReactiveFormsModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class EaFormsModule {}
