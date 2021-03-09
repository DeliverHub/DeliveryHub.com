import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetrestaurantDto } from 'src/app/Models/GetrestaurantDto';
import { GetstoreDto } from 'src/app/Models/GetstoreDto';
import { DataShareService } from 'src/app/_service/DataShare.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-storedetail',
  templateUrl: './storedetail.component.html',
  styleUrls: ['./storedetail.component.scss']
})
export class StoredetailComponent implements OnInit {
  subscription: Subscription;
  stores:GetstoreDto;
  imagepath=environment.imagepath+"StoreImages/";
  lat:any;
  lng:any;
  constructor(private data: DataShareService,private router: Router) { }

  ngOnInit() {
       debugger;
    this.stores=null;
    this.subscription = this.data.currentMessage.subscribe(message => this.stores = message)
    if(this.stores==null){
      this.router.navigate(['/home/grocery']);
    }
    var latlng=this.stores.store.groccery_Location.split(",");
this.lat=parseFloat(latlng[0]);
this.lng=parseFloat(latlng[1]);
console.log(this.lat+""+this.lng)
  }
  Proceed(){
    debugger;
   
    this.data.changeMessage(this.stores);
   // this.subscription = this.data.currentMessage.subscribe(message => message = this.resturants)
        this.router.navigate(['/home/grocery/products']);
  }

}
