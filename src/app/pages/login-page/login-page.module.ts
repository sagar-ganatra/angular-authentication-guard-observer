import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from '../../forms/login-form/login-form.component';
import { User } from '../../models/user.model';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginPageComponent, LoginFormComponent],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
