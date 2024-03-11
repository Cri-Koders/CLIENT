import { Component, OnInit } from '@angular/core';
import { TemplateBannerComponent } from '../../components/template-banner/template-banner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [TemplateBannerComponent, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit{

  formForgot: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private readonly dialog: MatDialog,
    private readonly fb: FormBuilder,
  )
  {}

  ngOnInit(): void {
      
  }

  youAreSure(){
    this.dialog.open(LoginComponent, {
      height: '30rem',
      width: '40rem'

    })
  }
}
