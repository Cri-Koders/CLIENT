import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TemplateBannerComponent } from '../../components/template-banner/template-banner.component';


type ErrorMessages = {
  [key: string]: string;
};

const errorMessages: ErrorMessages = {
  required: 'Este campo es obligatorio',
  minlength: 'Debe tener al menos {0} caracteres',
  email: 'Ingrese un correo electrónico válido',
  pattern: 'El formato es incorrecto',
  mustMatch: 'Las contraseñas no coinciden',
};

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, CommonModule, MatIconModule, TemplateBannerComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUp!: FormGroup;
  controlNames: string[] = ['username', 'email', 'password', 'repeatPassword'];
  labels: string[] = ['Nombre de usuario', 'Email', 'Contraseña', 'Confirmar contraseña'];

  constructor(
    private fb: FormBuilder,
  ) {
    this.signUp = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      repeatPassword: ['', [
        Validators.required,
        this.mustMatch('password'),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/)
      ]],
    });
  }
  mustMatch(controlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const matchingControl = control?.parent?.get(controlName);
      if (matchingControl && control?.value !== matchingControl.value) {
        return { mustMatch: true };
      }
      return null;
    };
  }

  submitForm() {
    console.log(this.signUp.getRawValue());
  }

  getErrorMsg(key: string, value: any) {
    const defaultMessage = 'Error en el campo';
    if (key in errorMessages) {
      return errorMessages[key].replace('{0}', value.requiredLength || '');
    }

    return defaultMessage;
  }

  getErrors(control: FormControl|any) {
    if(!control) return;
    const errors = control.errors;
    if (errors) {

      return Object.keys(errors).map(key => this.getErrorMsg(key, errors[key]));
    }
    return [];
  }
  getControlErrors(control: AbstractControl): string[] {
    const errors = control.errors;
    if (errors) {
      return Object.keys(control.errors).map(key => this.getErrorMsg(key, errors[key]));
    }
    return [];
  }

}
