import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Register } from '../../../../../src/app/Models/Register';
import { AuthService } from '../../../../../src/app/_service/Auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private snackbar:MatSnackBar ,private spinner: NgxSpinnerService,  private router: Router,private fb:FormBuilder,private registermodel:Register,private authservice:AuthService) { }

  ngOnInit() {
    debugger;
    if( localStorage.getItem('token')!=null){
      this.router.navigate(['/home']);
    }
    this.form = this.fb.group({
    
      avatar: [null]
    })
  }
  Registrationform:FormGroup=new FormGroup({
 
    Consumer_Name: new FormControl(""),
    Email: new FormControl(""),
    Mobile_Number: new FormControl(""),
    Password: new FormControl(""),

  
   });
   LoginForm:FormGroup=new FormGroup({
    Email: new FormControl(""),
    Password: new FormControl(""),

   });

   login() {
    // tslint:disable-next-line: no-debugger
    debugger;

    this.spinner.show();
    this.authservice.login(this.LoginForm.value).subscribe(next => {
      this.spinner.hide();
     
      this.snackbar.open("Logged in Successfully","x",{
        duration:2000,
        verticalPosition:'bottom',
        horizontalPosition:'end',
        panelClass:['mat-toolbar','mat-primary']
      })

     console.log("")
    
      window.location.reload();
    }, error => {
      this.spinner.hide();
        var err=error;
        console.log(err);
        
      this.snackbar.open("Email or Password is incorrect"
      ,"x",{
        duration:2000,
        verticalPosition:'bottom',
        horizontalPosition:'end',
        panelClass:['mat-toolbar','mat-warn']
      })

                 
    });
  }

   Register(){
    debugger;
    if(!this.Registrationform.invalid){
      this.Registrationform.get('Mobile_Number').patchValue('+44'+this.Registrationform.get('Mobile_Number').value);
      console.log(this.Registrationform.value)
      this.spinner.show();
     this.authservice.Register(this.Registrationform.value).subscribe(next => {
   this.Registrationform.reset();
   this.spinner.hide();
   this.snackbar.open("Logged in Successfully","x",{
    duration:2000,
    verticalPosition:'bottom',
    horizontalPosition:'end',
    panelClass:['mat-toolbar','mat-primary']
  })
   window.location.reload();
      
     }, error => {
      this.spinner.hide();
   
      console.log(error)
      this.snackbar.open(error.error
      
      ,"x",{
        duration:2000,
        verticalPosition:'bottom',
        horizontalPosition:'end',
        panelClass:['mat-toolbar','mat-warn']
      })
       console.log(error);
     });
    }
   
   
  }
}
