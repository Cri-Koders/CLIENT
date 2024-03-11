import { Injectable } from '@angular/core';
import { AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }

  makeNonNullableFormControl<T>(value: T, validator: ValidatorFn): FormControl<T> {
    return new FormControl(value, { nonNullable: true, validators: [validator] });
  }

  makeNNFormControlWithValidators<T>(value: T, validators: ValidatorFn[]): FormControl<T> {
    return new FormControl(value, { nonNullable: true, validators: [...validators] });
  }

  makeFormControl<T>(value: T | null, validator: ValidatorFn): FormControl<T | null> {
    return new FormControl(value, validator);
  }
  makeNNFormControlWithAsyncValidators<T>(value: T, validators: ValidatorFn[], asyncValidators: AsyncValidatorFn[], updateOn: "change" | "blur" | "submit"): FormControl<T> {
    return new FormControl(value, { nonNullable: true, validators: [...validators], asyncValidators: [...asyncValidators], updateOn: updateOn });
  }
}
