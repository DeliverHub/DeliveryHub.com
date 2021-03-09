import { MapsAPILoader } from '@agm/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { NgxSpinnerService } from 'ngx-spinner';
import { Allorder } from 'src/app/Models/Allorder';
import { DeliveryOrder } from 'src/app/Models/DeliveryOrder';
import { DeliveryOrderDetail } from 'src/app/Models/DeliveryOrderDetail';
import { DataShareService } from 'src/app/_service/DataShare.service';
import { GeneralDeliveryService } from 'src/app/_service/generalDelivery.service';
import { OrderService } from 'src/app/_service/Order.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ResturantService } from 'src/app/_service/resturant.service';
declare let google: any;
@Component({
  selector: 'app-generalDelivery',
  templateUrl: './generalDelivery.component.html',
  styleUrls: ['./generalDelivery.component.css']
})

export class GeneralDeliveryComponent implements OnInit {
  lat:any;
  lng:any;
  latitude:any;
  longitude:any;
  abc:any;
  getAddress:any;
  currentLocation:any;
  address:string="";
  clear:boolean
  closeResult: string;
  consumerlat:any;
  consumerlng:any;
  recieverlat:any;
  recieverlng:any;
  consumeraddress:string;
  vehicals:any;
  deliveryorder:DeliveryOrder={}as DeliveryOrder;
  deliveryorderdetails:DeliveryOrderDetail={}as DeliveryOrderDetail;
  modalOptions:NgbModalOptions;
  rqsttype:string="";
  userinfo:any;
  distance:any;
  generaldeliveryfair:any;
  
  allorder:Allorder={}as Allorder;
  @ViewChild("loc",{static:false}) block: ElementRef;
  constructor(private orderservice:OrderService,private resturantservice:ResturantService,private vehicalservice:GeneralDeliveryService,private spinner: NgxSpinnerService,private mapsAPILoader: MapsAPILoader,private modalService: NgbModal,public dialog: MatDialog,private data: DataShareService, private router: Router) { }

  ngOnInit() {
    this.GetCurrentLocation();
  
    this.deliveryorder.ConsumerLAtLong=localStorage.getItem('latlng');
    this.vehicalservice.getvehicals().subscribe((next:any)=>{
      console.log(next);
      this.vehicals=next.res;
    })
    this.vehicalservice.getuserinfo().subscribe((next:any)=>{
      this.userinfo=next;
      console.log(this.userinfo)
    })
   this.consumeraddress=localStorage.getItem('conadd')
   this.getdelivery();
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
    this.mapsAPILoader.load().then(() => {  this.getfAddress(this.latitude,this.longitude);});

}
GetCurrentLocation(){
debugger;
  this.clear=false;
  if(!navigator.geolocation)
  {
    console.log('location is not supported');
  }
  else
  {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
               this.consumerlat = position.coords.latitude;
               this.consumerlng = position.coords.longitude;
               this.latitude=parseFloat(this.consumerlat)
               this.longitude=parseFloat(this.consumerlng)
         
            
             this.getAddress=(this.lat,this.lng)
             localStorage.setItem('latlng', this.consumerlat+","+this.consumerlng);
             this.getcurentAddress(this.latitude,this.longitude)
              
           
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
      this.deliveryorder.RecieverAddress=this.address;


  }

  SaveAddress(){
 
    localStorage.setItem('latlng', this.lat+","+this.lng);
    localStorage.setItem('address', this.address);
 var data=localStorage.getItem('address');
 this.deliveryorder.RecieverAddress=this.address;
 this.deliveryorder.ReciverLAtLong=localStorage.getItem('latlng');
 var ltlng=localStorage.getItem("latlng");
 var lltt=ltlng.split(",");
 var lat1=parseFloat(lltt[0]);
 var lng1=parseFloat(lltt[1]);
 
   var lltt2=this.deliveryorder.ConsumerLAtLong.split(",");
 
 
 var lat2=parseFloat(lltt2[0]);
 var lng2=parseFloat(lltt2[1]);
 debugger;
  this.distance=this.getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2);
  this.deliveryorderdetails.Price=parseFloat((this.distance*this.generaldeliveryfair).toFixed(2));
  this.deliveryorderdetails.GrandTotal=this.deliveryorderdetails.Price;
   

  }
getfAddress( lat: number, lng: number ) {

 debugger;
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
              
                debugger
               checkname=rsltAdrComponent[i].long_name;
              }
         
          }
      
        
        
          this.block.nativeElement.value=this.address;
          localStorage.setItem('address', this.address);
          console.log(this.consumeraddress)
        } else {
          alert('No address available!');
        }
      }
    });
    this.clear=true;
}


}
getcurentAddress( lat: number, lng: number ) {

  debugger;
   if (navigator.geolocation) {
   
     let geocoder = new google.maps.Geocoder();
     let latlng = new google.maps.LatLng(lat, lng);
     let request = { latLng: latlng };
     geocoder.geocode({'latLng':latlng}, (results, status) => {
      
       if (status === google.maps.GeocoderStatus.OK) {
         let result = results[0];
         let rsltAdrComponent = result.address_components;
         let resultLength = rsltAdrComponent.length;
      
         this.consumeraddress="";
         if (result != null) {
       
           var checkname=null;
           for(let i=0;i<resultLength;i++){
          
               if(checkname!=rsltAdrComponent[i].long_name){
             
                 this.consumeraddress+=rsltAdrComponent[i].long_name+",";
                 debugger
                checkname=rsltAdrComponent[i].long_name;
               }
          
           }
       
         
         
       
         localStorage.setItem('conadd',this.consumeraddress)
           console.log(this.consumeraddress)
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
Submit(){
  debugger
  if(this.deliveryorder.ReciverLAtLong==null||this.deliveryorder.VehicalId==0||this.deliveryorder.RecieverCellNo==null||this.deliveryorderdetails.Description==null){
    alert("Please Give All details Correctly")
  }
  else{
    this.allorder.Location=localStorage.getItem("latlng");
       this.allorder.Address=localStorage.getItem('address');
       this.allorder.OrderType="Delivery";
       this.allorder.PaymentType="Cash";
       this.allorder.Consumer_Id=0;
    var deliveryorderr={"DOrder":this.deliveryorder,"DOrderDetails":this.deliveryorderdetails,"allorder":this.allorder}
    this.orderservice.PostOrder(deliveryorderr).subscribe((next:any)=>{
      console.log(next);
      Swal.fire('Thank you...', 'Order has been placed Successfully!', 'success')
      this.router.navigate(['/home']);
    }
    , error => {
      Swal.fire('Sorry...', 'No Rider Available!', 'error')
    });
  }

}

getdelivery(){
  this.resturantservice.getdeliveryfair().subscribe((next:any)=>{
    debugger
    this.generaldeliveryfair=next.localDeliveryfair.deliveryCharges;
    console.log(this.generaldeliveryfair)
      });

}
 getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
  var dLon = this.deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

deg2rad(deg) {
  return deg * (Math.PI/180)
}
}
