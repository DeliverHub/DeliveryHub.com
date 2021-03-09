import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetrestaurantDto } from 'src/app/Models/GetrestaurantDto';
import { ResturantService } from '../../../../../src/app/_service/resturant.service';
import { Subscription } from 'rxjs';
import { DataShareService } from './../../../../../src/app/_service/DataShare.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-Restaurant',
  templateUrl: './Restaurant.component.html',
  styleUrls: ['./Restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  resturants:GetrestaurantDto[]=[];
  searchresturants:GetrestaurantDto[]=[];
  rqsttype:any;
  subscription: Subscription;
  restaurantname:any;
  imagepath=environment.imagepath+"Restaurantprofile/";
  constructor(private spinner: NgxSpinnerService,private resturanrservice:ResturantService,private route: ActivatedRoute,private data: DataShareService, private router: Router) { }

  ngOnInit() {

    this.getresturants();
  }
  SearchRestaurant(){
    debugger;
    if(this.restaurantname==""){
      this.resturants=this.searchresturants;
     }
     else{
       if(this.resturants!=null){
         this.resturants=this.searchresturants.filter(res=>{
           debugger
           return res.kitchen.kitchen_Name.toLocaleLowerCase().match(this.restaurantname.toLocaleLowerCase())
           
         })
       }
    
     }
  }
  getresturants(){
    debugger;
    var latlng=localStorage.getItem('latlng');
    this.spinner.show();
      this.resturanrservice.GetResturants(latlng).subscribe((next:any) => {
        debugger;
        this.resturants=next.res;
this.searchresturants=next.res;
this.spinner.hide();
      }, error => {
        console.log(error);
      });
    }
    Restaurantdetail(id:number){
      debugger;

      var singlerst= this.resturants.find(x=>x.kitchen.restaurantID==id);
      localStorage.setItem('restaurantid',singlerst.kitchen.restaurantID.toString());
      localStorage.setItem('restaurantname',singlerst.kitchen.restaurant_Name);
      localStorage.setItem('restaurantimg',singlerst.kitchen.profileImagePath);
      this.data.changeMessage(singlerst);
     // this.subscription = this.data.currentMessage.subscribe(message => message = this.resturants)
          this.router.navigate(['/home/restaurant/detail']);
    }
}
