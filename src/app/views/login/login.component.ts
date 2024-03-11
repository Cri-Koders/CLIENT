import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { RouterModule } from '@angular/router';
import { TemplateBannerComponent } from '../../components/template-banner/template-banner.component';
import { AuthService } from '../../shared/services/auth.service';
import { LoginForm, LoginReactiveForm } from '../../shared/interfaces/auth';
import { MatIconModule } from '@angular/material/icon';
import { FormUtilsService } from '../../shared/services/utils/form-utils.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatInputModule, MatFormFieldModule, CommonModule, FontAwesomeModule, RouterModule, TemplateBannerComponent, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  faGoogle = faGoogle as IconProp;
  faFacebook = faFacebook as IconProp;

  showPassword: boolean = false;

  loginForm: FormGroup<LoginReactiveForm> = this.fb.group({
    email: this.formService.makeNNFormControlWithValidators('', [Validators.required, Validators.email]),
    password: this.formService.makeNNFormControlWithValidators('', [Validators.required]),
  });


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private formService: FormUtilsService,
  ) { }

  ngOnInit(): void {
    
  }

  hasErrors(controlName: string, errorType: string) {
    return this.loginForm?.get(controlName)?.hasError(errorType)
     && 
     this.loginForm?.get(controlName)?.touched
  }

  submitLoginForm() {
    const { email, password } = this.loginForm.getRawValue();
    const propsToLogin: LoginForm = {
      email,
      password,
    }
    this.authService.login(propsToLogin).subscribe({
      next: (response: any)=>{
        console.log(response);
      }
    });
  }

  useFacebookStrategy(){
    window.open(this.authService.facebookStrategyAuth(), '_blank');
  }

  useGoogleStrategy(){
    window.open(this.authService.googleStrategyAuth(), '_blank');
  }

}