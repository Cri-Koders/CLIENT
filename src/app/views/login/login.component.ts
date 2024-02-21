import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  formularioLogin: FormGroup


  constructor( private form : FormBuilder ) {
    this.formularioLogin = this.form.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  hasErrors( controlName: string, errorType: string ) {
    return this.formularioLogin?.get(controlName)?.hasError(errorType) && this.formularioLogin?.get(controlName)?.touched
  }

  iniciarSesion() {
    console.log(this.formularioLogin.value);
  }

}
