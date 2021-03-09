import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { LoginComponent } from './Login/Login.component';
import { AuthModuleRouting } from './AuthRout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Register } from '../../../../src/app/Models/Register';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    AuthModuleRouting,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatSnackBarModule
  
  ],
  declarations: [AuthComponent,LoginComponent],
  providers:[Register]
})
export class AuthModule { }
