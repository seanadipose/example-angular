import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonalData } from '../../models/contact-request.model';
import { ReactiveFormsService } from '../../services/reactive-forms.service';

@Component({
  selector: 'app-formbuilder-class',
  template: `
    <mat-card class="contact-form">
      <mat-card-title>Formbuilder Class Contact Form</mat-card-title>
      <form [formGroup]="fg" fxLayout="column">
        <div formGroupName="personalData" fxLayout="column">
          <mat-form-field>
            <mat-label>Email</mat-label>

            <input matInput formControlName="email" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Mobile</mat-label>

            <input matInput formControlName="mobile" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Country</mat-label>

            <mat-select formControlName="country">
              <ng-container
                *ngIf="reactiveFormSvc.countries$ | async as countries"
              >
                <mat-option *ngFor="let country of countries" [value]="country">
                  {{ country }}</mat-option
                >
              </ng-container>
            </mat-select>
          </mat-form-field>
        </div>
        <mat-form-field>
          <mat-label>Request Type</mat-label>
          <mat-select formControlName="requestType">
            <ng-container
              *ngIf="reactiveFormSvc.requestTypes$ | async as types"
            >
              <mat-option *ngFor="let type of types" [value]="type">
                {{ type }}</mat-option
              >
            </ng-container>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Text</mat-label>
          <textarea matInput formControlName="text"></textarea>
        </mat-form-field>
      </form>
    </mat-card>
  `,
  styleUrls: ['./formbuilder-class.component.scss'],
})
export class FormbuilderClassComponent implements OnInit {
  fg: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public reactiveFormSvc: ReactiveFormsService
  ) {}

  ngOnInit(): void {
    this.fg = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      personalData: this.formBuilder.group(new PersonalData()),
      requestType: '',
      text: '',
    });
  }
}
