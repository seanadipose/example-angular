import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsService } from '../../services/reactive-forms.service';

@Component({
  selector: 'app-formbuilder',
  template: `
    <mat-card class="contact-form">
      <mat-card-title>Formbuilder Contact Form</mat-card-title>
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
  styleUrls: ['./formbuilder.component.scss'],
})
export class FormbuilderComponent implements OnInit {
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
      personalData: this.formBuilder.group({
        email: 'defaul@email.com',
        mobile: '',
        country: '',
      }),
      requestType: '',
      text: '',
    });
  }
}
