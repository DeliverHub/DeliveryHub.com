import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { OrderService } from 'src/app/_service/Order.service';

@Component({
  selector: 'app-myordersstore',
  templateUrl: './myordersstore.component.html',
  styleUrls: ['./myordersstore.component.scss']
})
export class MyordersstoreComponent implements OnInit {
myourders:any;
decodedToken:any;  
jwtHelper = new JwtHelperService();
  constructor(private router: Router,private orderservice:OrderService) { }

  ngOnInit() { 
    this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    if(this.decodedToken==null||this.decodedToken==undefined){
      this.router.navigate(['/home']);
    }

    this.myorders();
  }
  myorders()
  {
    debugger;
   
    
      this.orderservice.myorders().subscribe((next:any) => {
        debugger;
        this.myourders=next.res;
        console.log(next);
        
      }, error => {
        console.log(error);
      });
  }
  orderInfro(Id:any)
  {
    alert(Id);
    debugger;
    this.orderservice.OrderInfo(Id).subscribe((next:any) => {
      debugger;
      this.myourders=next.res;
      console.log(next);
      
    }, error => {
      console.log(error);
    });
  }
 
}
