import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-Searchbar',
  templateUrl: './Searchbar.component.html',
  styleUrls: ['./Searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor() { }
lat:any;
lng:any;
getAddress:any;
  ngOnInit() {
    debugger;
    this.getl();
  }
  
  getl(){
    debugger;
  if(!navigator.geolocation)
  {
    console.log('location is not supported');
  }
  else
  {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
               this.lat = position.coords.latitude;
               this.lng = position.coords.longitude;
             this.getAddress=(this.lat,this.lng)
               console.log(position)
      }
  })
  }
}
 
 
}
