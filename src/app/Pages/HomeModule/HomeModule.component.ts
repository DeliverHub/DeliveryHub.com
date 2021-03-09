import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { DataShareService } from './../../../../src/app/_service/DataShare.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
declare let google: any;
@Component({
  selector: 'app-HomeModule',
  templateUrl: './HomeModule.component.html',
  styleUrls: ['./HomeModule.component.scss'],
  // providers: [NgbModalConfig, NgbModal]

})
export class HomeModuleComponent implements OnInit {
  subscription: Subscription;
  lat:any;
  lng:any;
  latitude:any;
  longitude:any;
  getAddress:any;
  currentLocation:any;
  address:string="";
  clear:boolean
  closeResult: string;
  modalOptions:NgbModalOptions;
  rqsttype:string="";
  @ViewChild("loc",{static:false}) block: ElementRef;
  constructor(private spinner: NgxSpinnerService,private mapsAPILoader: MapsAPILoader,private modalService: NgbModal,public dialog: MatDialog,private data: DataShareService, private router: Router) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
   }
  }

  ngOnInit() {
  
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }
  openDialog(content) {
    this.GetCurrentLocation();
    const dialogRef = this.dialog.open(content);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getl(){
 this.GetCurrentLocation();
    this.mapsAPILoader.load().then(() => {  this.getfAddress(this.lat,this.lng);});

}
GetCurrentLocation(){

  this.clear=false;
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
               this.latitude=parseFloat(this.lat)
               this.longitude=parseFloat(this.lng)
         
            
             this.getAddress=(this.lat,this.lng)
             localStorage.setItem('latlng', this.lat+","+this.lng);
            
              
           
      }
  })
  }
}

    getcenter(event){
  
      this.lat=event.lat;
      this.lng=event.lng;
      this.getfAddress(this.lat,this.lng)
   
    }
    @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;


    public handleAddressChange(address: any) {
   
      //this.getGeoLocation(address.formatted_address);
      this.address="";
      this.address=address.formatted_address;
      this.lat=address.geometry.location.lat();
      this.lng=address.geometry.location.lng();
      this.latitude=address.geometry.location.lat();
      this.longitude=address.geometry.location.lng();
      
      this.block.nativeElement.value=this.address;


  }

  SaveAddress(){
 
    localStorage.setItem('latlng', this.lat+","+this.lng);
    localStorage.setItem('address', this.address);
 var data=localStorage.getItem('address');
   

  }
getfAddress( lat: number, lng: number ) {

 
  if (navigator.geolocation) {
  
    let geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(lat, lng);
    let request = { latLng: latlng };
    geocoder.geocode({'latLng':latlng}, (results, status) => {
     
      if (status === google.maps.GeocoderStatus.OK) {
        let result = results[0];
        let rsltAdrComponent = result.address_components;
        let resultLength = rsltAdrComponent.length;
        this.address="";
        if (result != null) {
      
          var checkname=null;
          for(let i=0;i<resultLength;i++){
         
              if(checkname!=rsltAdrComponent[i].long_name){
                this.address+=rsltAdrComponent[i].long_name+",";
               checkname=rsltAdrComponent[i].long_name;
              }
          }
      
        
        
          this.block.nativeElement.value=this.address;
          localStorage.setItem('address', this.address);
        } else {
          alert('No address available!');
        }
      }
    });
    this.clear=true;
}


}
Clearloc(){
  this.address="";
  this.block.nativeElement.value=this.address;
  this.clear=false;
}

selectrst(){
  this.rqsttype="";

this.rqsttype="Restaurant";

}
selectgrc(){
  this.rqsttype="";
 
  this.rqsttype="Groccery";
 
}

Search(){
  if(this.rqsttype=="Restaurant"){
    this.router.navigate(['/home/restaurant']);
  }
  else
  if(this.rqsttype=="Groccery"){
    this.router.navigate(['/home/grocery']);
  }
 
}

}