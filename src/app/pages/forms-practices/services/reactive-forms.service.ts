import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';
import { COUNTRIES } from 'src/app/core/constants/countries.constant';
import { REQUEST_TYPES } from 'src/app/core/constants/request-types.constant';
import { sinValidator } from 'src/app/modules/forms/validators/sin.validator';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormsService {
  countries$ = of(COUNTRIES);
  requestTypes$ = of(REQUEST_TYPES);

  constructor() {}

  makeFg() {
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
  makeValidatedFg() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
        ]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        country: new FormControl(null, Validators.required),
      }),
      requestType: new FormControl(''),
      text: new FormControl(''),
    });
  }

  fcWithCustomValidator() {
    return new FormControl(null, [Validators.required, sinValidator()]);
  }
}
