import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../../../src/app/_service/Auth.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,public authservice:AuthService) { }
  decodedToken:any;
  name:string;
  validator:boolean=false;
  jwtHelper = new JwtHelperService();
  ngOnInit() {
    debugger;
    // if(localStorage.getItem('token')!=null){
    //   if(this.jwtHelper.isTokenExpired(localStorage.getItem('token'))){
    //     this.name=localStorage.getItem('name');
    //     if(this.name!=null){
    //       this.validator=true;
    //     }
    //   }
    // }

  
    
    this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    if(this.decodedToken!=null||this.decodedToken!=undefined){
      this.name=this.decodedToken.Name;
      this.validator=true;
    }
   
  }
  logout() {
    debugger;
    localStorage.removeItem('name')
    localStorage.removeItem('ID')
    localStorage.removeItem('token');
  this.router.navigate(['/home']);

  window.location.reload();
  }
viewcart(){
  if(localStorage.getItem('carttype')=="Product"){
    this.router.navigate(['/home/grocery/storecheckout'])
  }
  else{
    this.router.navigate(['/home/checkout'])
  }
}
}
