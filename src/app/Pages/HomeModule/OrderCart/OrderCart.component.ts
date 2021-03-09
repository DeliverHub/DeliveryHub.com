import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { GetrestaurantDto } from './../../../../../src/app/Models/GetrestaurantDto';
import { DataShareService } from './../../../../../src/app/_service/DataShare.service';
import { environment } from './../../../../../src/environments/environment';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodOrderDto } from './../../../../../src/app/Models/FoodOrderDto';
import { FoodOrderItem } from './../../../../../src/app/Models/FoodOrderItem';
import { FoodOrderBilling } from 'src/app/Models/FoodOrderBilling';
import { Menucategorey } from 'src/app/Models/menucategorey';
import { ResturantService } from 'src/app/_service/resturant.service';
import { Allorder } from 'src/app/Models/Allorder';
import { FoodOrder } from 'src/app/Models/FoodOrder';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-OrderCart',
  templateUrl: './OrderCart.component.html',
  styleUrls: ['./OrderCart.component.scss']

})
export class OrderCartComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,public dialog: MatDialog,private data: DataShareService,private resturanrservice:ResturantService,private router: Router) { 
    // private modalService: NgbModal,private config: NgbModalConfig
    // config.backdrop = 'static';
    // config.keyboard = false;

  }
cart:FoodOrderDto={}as FoodOrderDto;
previouscart:FoodOrderDto={}as FoodOrderDto;
  subscription: Subscription;
  resturants:GetrestaurantDto;
  orderitem:FoodOrderItem={}as FoodOrderItem;
  foodorderitemlist:FoodOrderItem[]=[];
  catdishes:Menucategorey[]=[];
  restaurantdeliveryfair:any;
  foodorderbilling:FoodOrderBilling={}as FoodOrderBilling;
  distance:number;
  searchedishes:GetrestaurantDto;
  ttl:number=0;
  allorder:Allorder={}as Allorder;
  Order:FoodOrder={} as FoodOrder;
  imagepath=environment.imagepath+"Restaurantprofile/";
  dishimage=environment.imagepath+"DishImages/"
  searchname:any;
  searchedMenu:Menucategorey[];
  ngOnInit() {
   
    this.getdelivery();
    this.resturants=null;
    this.subscription = this.data.currentMessage.subscribe(message => this.resturants = message);
    
    if(this.resturants==null){
      var restaurantid=localStorage.getItem('restaurantid')
      if(restaurantid!=""||restaurantid!=undefined||restaurantid!=null){
        this.spinner.show();
this.resturanrservice.Getrestaurantdishes(restaurantid).subscribe((nex:any)=>{
  debugger;

  console.log(nex);
  this.resturants=nex.res;
  this.spinner.hide();
}, error => {
  console.log(error);
})
      }
      else{
        this.router.navigate['/home'];
      }
    }
   this.searchedMenu=this.resturants.menucategorey;
    console.log(this.resturants);

    if(localStorage.getItem('carttype')=="Product"){
      localStorage.setItem('cart',JSON.stringify(this.cart))
    }
    var ret=JSON.parse(localStorage.getItem('cart'));
   if(ret==null||ret==undefined){

    localStorage.setItem('cart',JSON.stringify(this.cart))
   }
    console.log();
var ltlng=localStorage.getItem("latlng");
var lltt=ltlng.split(",");
var lat1=parseFloat(lltt[0]);
var lng1=parseFloat(lltt[1]);
var lltt2=this.resturants.kitchen.restaurant_Location.split(",");
var lat2=parseFloat(lltt2[0]);
var lng2=parseFloat(lltt2[1]);
 this.distance=this.getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2);

 
  }
 
  openDialog(content) {
    const dialogRef = this.dialog.open(content,
      {
        
        width: '800px',
      
        
        panelClass: 'epsSelectorPanel'
    });
          
    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog result: ${result}`);
    });
  }
  addtocart(id,cid){
    debugger;
    this.previouscart=JSON.parse(localStorage.getItem('cart'))as FoodOrderDto;
    this.catdishes= this.resturants.menucategorey.filter(x=>x.menucategoreyId==cid);
    var data=this.catdishes[0].dishes.filter(x=>x.dishId==id);
   

    localStorage.setItem('carttype','Restaurant');
  if(this.previouscart.OrderItems==undefined){
  
    
   this.addsingleitemincart(data);
   this.data.changecart(this.cart);
  }
  else
  {
    if(this.resturants.kitchen.restaurantID!=this.previouscart.Order.RestaurantID){
      alert('Your Previous cart will be Cleared')
     this.cart.OrderItems=null ;
      this.cart.Order=null;
      this.addsingleitemincart(data);
      this.data.changecart(this.cart);
    }
    else{
      var dishcheck= this.previouscart.OrderItems.find(x=>x.DishId==id);
      if(dishcheck!=null){
        this.ttl=0
        var index= this.previouscart.OrderItems.indexOf(dishcheck);
        this.previouscart.OrderItems[index].Quantity=     this.previouscart.OrderItems[index].Quantity+1;
        this.previouscart.OrderItems[index].TotalPrice=this.previouscart.OrderItems[index].Quantity*this.previouscart.OrderItems[index].SingleQuantityPrice;
        this.cart.OrderItems= this.previouscart.OrderItems;
        for(let i=0;i<this.previouscart.OrderItems.length;i++)
        {
        this.ttl=this.ttl+this.previouscart.OrderItems[i].TotalPrice;
        }
       
        var delvery=(this.distance*this.restaurantdeliveryfair.deliveryCharges).toFixed(2);
this.foodorderbilling.Delivery_Charges=parseFloat(delvery);
        this.foodorderbilling.GrandTotal=this.foodorderbilling.Delivery_Charges+this.ttl;
        this.foodorderbilling.Total_SumAmount=this.ttl;
        this.foodorderbilling.Subtotal=this.ttl;
        this.cart.OrderBilling=this.foodorderbilling;
        this.Order.RestaurantID=parseInt(localStorage.getItem('restaurantid'));
this.cart.Order=this.Order;
        console.log(this.cart)
        localStorage.setItem('cart',JSON.stringify(this.cart))

      }
      else{
        this.catdishes= this.resturants.menucategorey.filter(x=>x.menucategoreyId==cid);
        var ndata= this.catdishes[0].dishes.filter(x=>x.dishId==id);
        this.ttl=0
        this.orderitem.DishId=ndata[0].dishId;
        this.orderitem.Quantity=1;
        this.orderitem.SingleQuantityIncreasedPrice=ndata[0].dishPrice;
        this.orderitem.SingleQuantityPrice=ndata[0].dishPrice;
        this.orderitem.TotalIncreasedPrice=ndata[0].dishPrice;
        this.orderitem.TotalPrice=ndata[0].dishPrice;
        this.orderitem.dishName=ndata[0].dishName;
this.foodorderitemlist=this.previouscart.OrderItems;
this.foodorderitemlist.push(this.orderitem);
        this.cart.OrderItems=this.foodorderitemlist;
        for(let i=0;i<this.cart.OrderItems.length;i++)
        {
        this.ttl=this.ttl+this.cart.OrderItems[i].TotalPrice;
        }
        var delvery=(this.distance*this.restaurantdeliveryfair.deliveryCharges).toFixed(2);
        this.foodorderbilling.Delivery_Charges=parseFloat(delvery);
        this.foodorderbilling.GrandTotal=this.foodorderbilling.Delivery_Charges+this.ttl;
        this.foodorderbilling.Total_SumAmount=this.ttl;
        this.foodorderbilling.Subtotal=this.ttl;
        this.cart.OrderBilling=this.foodorderbilling;
        this.Order.RestaurantID=parseInt(localStorage.getItem('restaurantid'));
        this.cart.Order=this.Order;
      
        console.log(this.cart)
        localStorage.setItem('cart',JSON.stringify(this.cart))
        localStorage.setItem('deliverycharges',this.foodorderbilling.Delivery_Charges.toString())
      }

      this.data.changecart(this.cart);
    }
    

  }
   


  }
addsingleitemincart(data){
  debugger;
  this.ttl=0
    this.orderitem.DishId=data[0].dishId;
    this.orderitem.Quantity=1;
    this.orderitem.SingleQuantityIncreasedPrice=data[0].dishPrice;
    this.orderitem.SingleQuantityPrice=data[0].dishPrice;
    this.orderitem.TotalIncreasedPrice=data[0].dishPrice;
    this.orderitem.TotalPrice=data[0].dishPrice;
    this.orderitem.dishName=data[0].dishName;
  
    this.foodorderitemlist.push(this.orderitem);
    debugger;
    this.cart.OrderItems=this.foodorderitemlist;
  
  for(let i=0;i<this.foodorderitemlist.length;i++)
  {
  this.ttl=this.ttl+this.foodorderitemlist[i].TotalPrice;
    }
    var delvery=(this.distance*this.restaurantdeliveryfair.deliveryCharges).toFixed(2);
    this.foodorderbilling.Delivery_Charges=parseFloat(delvery);
    this.foodorderbilling.GrandTotal=this.foodorderbilling.Delivery_Charges+this.ttl;
   this.foodorderbilling.Total_SumAmount=this.ttl;
   this.foodorderbilling.Subtotal=this.ttl;
this.cart.OrderBilling=this.foodorderbilling;
debugger;
this.Order.RestaurantID=parseInt(localStorage.getItem('restaurantid'));
this.cart.Order=this.Order;
  
 console.log(this.cart)
 
    localStorage.setItem('cart',JSON.stringify(this.cart))
}
getdelivery(){
  this.resturanrservice.getdeliveryfair().subscribe((next:any)=>{
this.restaurantdeliveryfair=next.restaurantdelivery;
console.log(next)
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
