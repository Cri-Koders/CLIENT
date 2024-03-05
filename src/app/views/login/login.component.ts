import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TemplateBannerComponent } from '../../components/template-banner/template-banner.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatInputModule, MatFormFieldModule, CommonModule, FontAwesomeModule, HttpClientModule, RouterModule, TemplateBannerComponent, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  faGoogle = faGoogle as IconProp;
  faFacebook = faFacebook as IconProp;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    
  }

  hasErrors(controlName: string, errorType: string) {
    return this.loginForm?.get(controlName)?.hasError(errorType) && this.loginForm?.get(controlName)?.touched
  }

  submitLoginForm() {
    if (!this.loginForm.valid) {
      return
    }
    console.log(this.loginForm.value);
    // this._backConnection.loginAccount(this.loginForm.value)
  }

}
