import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { COUNTRIES } from 'src/app/core/constants/countries.constant';
import { REQUEST_TYPES } from 'src/app/core/constants/request-types.constant';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormsService {
  countries$ = of(COUNTRIES);
  requestTypes$ = of(REQUEST_TYPES);

  constructor() {}
}
