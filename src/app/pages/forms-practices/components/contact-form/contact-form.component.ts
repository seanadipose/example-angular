import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsService } from '../../services/reactive-forms.service';

@Component({
  selector: 'app-contact-form',
  template: `
    <mat-card class="contact-form">
      <mat-card-title>Formbuilder Class Contact Form</mat-card-title>
      <mat-card-content>
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
                  <mat-option
                    *ngFor="let country of countries"
                    [value]="country"
                  >
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
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>
          <ng-content select="action-button" color="primary"></ng-content>
        </button>
        <button mat-button color="warn">
          <ng-content select="cancel-button"></ng-content>
        </button>
      </mat-card-actions>
      <mat-card-footer>
        <ng-content select="submit-button"></ng-content>
      </mat-card-footer>
    </mat-card>
  `,
  styleUrls: ['./contact-form.component.scss'],
  exportAs: 'contactForm',
})
export class ContactFormComponent implements OnInit {
  fg: FormGroup;

  @Input('fg') set _fg(fg: FormGroup) {
    this.fg = fg;
  }
  constructor(public reactiveFormSvc: ReactiveFormsService) {}

  ngOnInit(): void {}
}
