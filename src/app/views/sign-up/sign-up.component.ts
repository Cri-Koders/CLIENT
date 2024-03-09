import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TemplateBannerComponent } from '../../components/template-banner/template-banner.component';
import { MatButtonModule } from '@angular/material/button';
import { RegisterForm, RegisterReactiveForm } from '../../shared/interfaces/auth';
import { FormUtilsService } from '../../shared/services/utils/form-utils.service';
import { AuthService } from '../../shared/services/auth.service';


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
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, CommonModule, MatIconModule, TemplateBannerComponent, MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUp: FormGroup<RegisterReactiveForm> = this.fb.group({
    username: this.formService.makeNNFormControlWithValidators('', [Validators.required, Validators.minLength(5)]),
    email: this.formService.makeNNFormControlWithValidators('', [Validators.required, Validators.email]),
    password: this.formService.makeNNFormControlWithValidators('', [Validators.required, Validators.minLength(6)]),
    repeatPassword: this.formService.makeNNFormControlWithValidators('', [Validators.required]),
  },
    {
      validators: [
        this.passwordMatchValidator
      ]
    });
  hide = true;
  controlNames: string[] = ['username', 'email', 'password', 'repeatPassword'];
  labels: string[] = ['Nombre de usuario', 'Email', 'Contraseña', 'Confirmar contraseña'];

  showPass1: boolean = false;
  showPass2: boolean = false;

  constructor(
    private fb: FormBuilder,
    private formService: FormUtilsService,
    private authService: AuthService,
  ) {
  }

  passwordMatchValidator(form: AbstractControl): {[key: string]: any} | null {
    return form.get('password')?.value === form.get('repeatPassword')?.value ? null : { 'mustMatch': true };
  }

  submitForm() {
    const { email, password, repeatPassword, username } =  this.signUp.getRawValue();
    const formToSend : RegisterForm = {
      email,
      password,
      username,
    }
    this.authService.register(formToSend).subscribe({
      next: (response)=>{
        console.log(response);
      },
      error: (error)=>{
        console.log(error);
        
      }
    })
  }

  getErrorMsg(key: string, value: any) {
    const defaultMessage = 'Error en el campo';
    if (key in errorMessages) {
      return errorMessages[key].replace('{0}', value.requiredLength || '');
    }

    return defaultMessage;
  }

  getErrors(control: FormControl | any) {
    if (!control) return;
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
