import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsService } from '../../services/reactive-forms.service';

@Component({
  selector: 'app-formgroup',
  template: `
    <mat-card class="contact-form">
      <mat-card-title>Contact Form</mat-card-title>
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
  styleUrls: ['./formgroup.component.scss'],
})
export class FormgroupComponent implements OnInit {
  fg: FormGroup;

  constructor(public reactiveFormSvc: ReactiveFormsService) {}

  ngOnInit(): void {
    this.fg = this.createFormGroup();
  }
  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(''),
        mobile: new FormControl(''),
        country: new FormControl(''),
      }),
      requestType: new FormControl(''),
      text: new FormControl(''),
    });
  }
}
