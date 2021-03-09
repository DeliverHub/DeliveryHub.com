import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { GetrestaurantDto } from 'src/app/Models/GetrestaurantDto';
import { DataShareService } from './../../../../../src/app/_service/DataShare.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-RestaurantDetail',
  templateUrl: './RestaurantDetail.component.html',
  styleUrls: ['./RestaurantDetail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  subscription: Subscription;
  resturants:GetrestaurantDto;

  imagepath=environment.imagepath+"Restaurantprofile/";
  lat:any;
  lng:any;
 
  constructor(private spinner: NgxSpinnerService,private data: DataShareService,private router: Router) { }

  ngOnInit() {




    debugger;
    
    this.resturants=null;
  
    this.subscription = this.data.currentMessage.subscribe(message => this.resturants = message)
 
    if(this.resturants==null){
      this.router.navigate(['/home/restaurant']);
    }
    var latlng=this.resturants.kitchen.restaurant_Location.split(",");
this.lat=parseFloat(latlng[0]);
this.lng=parseFloat(latlng[1]);




  }
  Proceed(){
    debugger;
   
    this.data.changeMessage(this.resturants);
   // this.subscription = this.data.currentMessage.subscribe(message => message = this.resturants)
        this.router.navigate(['/home/restaurant/cart']);
  }

}
