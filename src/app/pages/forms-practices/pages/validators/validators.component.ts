import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsService } from '../../services/reactive-forms.service';

@Component({
  selector: 'app-validators',
  template: `
    <app-page-container>
      <h1>Form Validators</h1>
      <p>Simple validator examples</p>
      <a href="https://angular.io/guide/reactive-forms">Reactive Forms</a>
      <p>
        The examples below show 3 different ways to declare new forms. This is
        taken from this tutorial:

        <a
          href="https://malcoded.com/posts/angular-fundamentals-reactive-forms/"
          >Reactive Forms</a
        >
      </p>
      <h2>Declare Validators Explicitly</h2>
      <p>
        This example shows explicitly declared validators. Submission is
        disabled based on the state of the validators.
      </p>
      <div fxLayout="row" fxLayoutAlign="start start" fxLayoutGap="15px">
        <app-contact-form [fg]="explicitFg" #validatorExample="contactForm">
          <submit-button>
            <button
              mat-raised-button
              color="primary"
              [disabled]="validatorExample.fg.invalid"
              style="margin: 15px;"
              (click)="submit(validatorExample.fg)"
            >
              Submit
            </button>
          </submit-button>
        </app-contact-form>
        <mat-card *ngIf="submitted" class="submit-card">
          <mat-card-title>Contact Form Values</mat-card-title>
          {{ validatorExample.fg.getRawValue() | json }}
        </mat-card>
      </div>
      <h2>Dynamically Add Validators</h2>
      <p>In the example below validators are added and removed dynamically</p>
      <app-contact-form [fg]="fg" #requireAllFg="contactForm">
        <action-button
          (click)="requireAll(requireAllFg.fg.controls.personalData)"
          >Require All</action-button
        >
        <cancel-button (click)="clearAll(requireAllFg.fg.controls.personalData)"
          >Clear All</cancel-button
        >
      </app-contact-form>

      <h2>Custom Validators</h2>
      <p>This is a custom sin validator</p>
      <mat-card>
        <mat-form-field>
          <mat-label>SIN Number </mat-label>
          <input matInput [formControl]="sinFc" />
          <mat-hint>Format should follow: 560 494 007</mat-hint>
        </mat-form-field>
      </mat-card>
    </app-page-container>
  `,
  styleUrls: ['./validators.component.scss'],
})
export class ValidatorsComponent implements OnInit {
  fg = this.reactiveFormsSvc.makeFg();
  explicitFg = this.reactiveFormsSvc.makeValidatedFg();
  submitted = false;
  sinFc = this.reactiveFormsSvc.fcWithCustomValidator();
  constructor(public reactiveFormsSvc: ReactiveFormsService) {}

  ngOnInit(): void {}

  requireAll(fg: FormGroup) {
    Object.keys(fg.controls).forEach((key) => {
      fg.controls[key].setValidators([
        Validators.required,
        Validators.minLength(3),
      ]),
        fg.controls[key].updateValueAndValidity({ onlySelf: false });
    });

    fg.updateValueAndValidity();
    fg.markAllAsTouched();
  }

  clearAll(fg: FormGroup) {
    Object.keys(fg.controls).forEach((key) => {
      fg.controls[key].setValidators([]);
      fg.controls[key].updateValueAndValidity({ onlySelf: false });
    });

    fg.updateValueAndValidity();
    fg.markAllAsTouched();
    console.log(fg);
  }

  submit(fg: FormGroup) {
    this.submitted = true;
  }
}
