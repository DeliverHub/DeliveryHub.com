import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Allorder } from 'src/app/Models/Allorder';
import { Category } from 'src/app/Models/Category';

import { GetstoreDto } from 'src/app/Models/GetstoreDto';
import { ProductOrder } from 'src/app/Models/ProductOrder';
import { Productorderbilling } from 'src/app/Models/productorderbilling';
import { ProductOrderDto } from 'src/app/Models/ProductOrderDto';
import { ProductOrderItems } from 'src/app/Models/ProductOrderItems';
import { DataShareService } from 'src/app/_service/DataShare.service';
import { GroceryService } from 'src/app/_service/grocery.service';
import { ResturantService } from 'src/app/_service/resturant.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Storeproducts',
  templateUrl: './Storeproducts.component.html',
  styleUrls: ['./Storeproducts.component.scss']
})
export class StoreproductsComponent implements OnInit {
  cart:ProductOrderDto={}as ProductOrderDto;
  previouscart:ProductOrderDto={}as ProductOrderDto;
    subscription: Subscription;
    stores:GetstoreDto;
    orderitem:ProductOrderItems={}as ProductOrderItems;
    productorderitems:ProductOrderItems[]=[];
    catproducts:Category[]=[];
    storedeliveryfairs:any;
    productorderbilling:Productorderbilling={}as Productorderbilling;
    distance:number;
    ttl:number=0;
    allorder:Allorder={}as Allorder;
    Order:ProductOrder={} as ProductOrder;
    imagepath=environment.imagepath+"StoreImages/";
    productimage=environment.imagepath+"ProductImages/"
  constructor(private resturantservice:ResturantService,public dialog: MatDialog,private data: DataShareService,private storeservice:GroceryService,private router: Router) { }

  ngOnInit() {
    debugger;
    this.getdelivery();
    this.stores=null;
    this.subscription = this.data.currentMessage.subscribe(message => this.stores = message)
    if(this.stores==null){
      var storeid=localStorage.getItem('grocceryID')
      if(storeid!=""||storeid!=undefined||storeid!=null){
this.storeservice.GetStoreDishes(parseInt(storeid)).subscribe((nex:any)=>{
  debugger;
  console.log(nex);
  this.stores=nex.res;
  var ltlng=localStorage.getItem("latlng");
var lltt=ltlng.split(",");
var lat1=parseFloat(lltt[0]);
var lng1=parseFloat(lltt[1]);

  var lltt2=this.stores.store.groccery_Location.split(",");


var lat2=parseFloat(lltt2[0]);
var lng2=parseFloat(lltt2[1]);
debugger;
 this.distance=this.getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2);
console.log(this.distance);
})
      }
      else{
        this.router.navigate['/home'];
      }
    }
    else{
      if(localStorage.getItem('carttype')=="Restaurant"){
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
    
      var lltt2=this.stores.store.groccery_Location.split(",");
    
    
    var lat2=parseFloat(lltt2[0]);
    var lng2=parseFloat(lltt2[1]);
    debugger;
     this.distance=this.getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2);
    console.log(this.distance);
    }
 
 
 
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
    this.previouscart=JSON.parse(localStorage.getItem('cart'))as ProductOrderDto;
    this.catproducts= this.stores.productCategorey.filter(x=>x.categoreyId==cid);
    var data=this.catproducts[0].products.filter(x=>x.productId==id);
   

localStorage.setItem('carttype','Product');
  if(this.previouscart.OrderItems==undefined){
  
    
   this.addsingleitemincart(data);
   this.data.changecart(this.cart);
  }
  else
  {
    if(this.stores.store.grocceryID!=this.previouscart.Order.StoreId){
      alert('Your Previous cart will be Cleared')
     this.cart.OrderItems=null ;
      this.cart.Order=null;
      this.addsingleitemincart(data);
      this.data.changecart(this.cart);
    }
      var productcheck= this.previouscart.OrderItems.find(x=>x.ProductId==id);
        if(productcheck!=null){
          debugger;
          this.ttl=0
          var index= this.previouscart.OrderItems.indexOf(productcheck);
          this.previouscart.OrderItems[index].ProductOrderItemQuantity=this.previouscart.OrderItems[index].ProductOrderItemQuantity+1;
          this.previouscart.OrderItems[index].ProductOrderItemTotalPrice=this.previouscart.OrderItems[index].ProductOrderItemQuantity*this.previouscart.OrderItems[index].ProductOrderItemSingleQuantityPrice;
          this.cart.OrderItems= this.previouscart.OrderItems;
          for(let i=0;i<this.previouscart.OrderItems.length;i++)
          {
          this.ttl=this.ttl+this.previouscart.OrderItems[i].ProductOrderItemTotalPrice;
          }
          debugger;
          var delivery=this.distance*this.storedeliveryfairs.deliveryCharges;
          this.productorderbilling.Delivery_Charges=parseFloat(delivery.toFixed(2));
          this.productorderbilling.GrandTotal=this.productorderbilling.Delivery_Charges+this.ttl;
          this.productorderbilling.Total_SumAmount=this.ttl;
          this.productorderbilling.Subtotal=this.ttl;
          this.cart.OrderBilling=this.productorderbilling;
          this.Order.StoreId=parseInt(localStorage.getItem('grocceryID'));
this.cart.Order=this.Order;
          console.log(this.cart)
          localStorage.setItem('cart',JSON.stringify(this.cart))

        }
        else{
          this.catproducts= this.stores.productCategorey.filter(x=>x.categoreyId==cid);
          var ndata= this.catproducts[0].products.filter(x=>x.productId==id);
          this.ttl=0
          this.orderitem.ProductId=ndata[0].productId;
          this.orderitem.ProductOrderItemQuantity=1;
          this.orderitem.ProductOrderItemTotalPrice=ndata[0].dishPrice;
          this.orderitem.ProductOrderItemSingleQuantityPrice=ndata[0].dishPrice;
          this.orderitem.productName=ndata[0].productName

  this.productorderitems=this.previouscart.OrderItems;
  this.productorderitems.push(this.orderitem);
          this.cart.OrderItems=this.productorderitems;
          for(let i=0;i<this.cart.OrderItems.length;i++)
          {
            this.ttl=this.ttl+this.previouscart.OrderItems[i].ProductOrderItemTotalPrice;
          }
          var delivery=this.distance*this.storedeliveryfairs.deliveryCharges;
          this.productorderbilling.Delivery_Charges=parseFloat(delivery.toFixed(2));
          this.productorderbilling.GrandTotal=this.productorderbilling.Delivery_Charges+this.ttl;
          this.productorderbilling.Total_SumAmount=this.ttl;
          this.productorderbilling.Subtotal=this.ttl;
          this.cart.OrderBilling=this.productorderbilling;
          this.Order.StoreId=parseInt(localStorage.getItem('grocceryID'));
          this.cart.Order=this.Order;
        
          console.log(this.cart)
          localStorage.setItem('cart',JSON.stringify(this.cart))
          localStorage.setItem('deliverycharges',this.productorderbilling.Delivery_Charges.toString())
        }

        this.data.changecart(this.cart);

  }
   


  }
addsingleitemincart(data){
  debugger;
  this.ttl=0
    this.orderitem.ProductId=data[0].productId;
    this.orderitem.ProductOrderItemQuantity=1;
    this.orderitem.ProductOrderItemTotalPrice=data[0].dishPrice;
    this.orderitem.ProductOrderItemSingleQuantityPrice=data[0].dishPrice;
  this.orderitem.productName=data[0].productName
    this.productorderitems.push(this.orderitem);
    
    this.cart.OrderItems=this.productorderitems;
  
  for(let i=0;i<this.productorderitems.length;i++)
  {
  this.ttl=this.ttl+this.productorderitems[i].ProductOrderItemTotalPrice;
    }
    var delivery=this.distance*this.storedeliveryfairs.deliveryCharges;
    this.productorderbilling.Delivery_Charges=parseFloat(delivery.toFixed(2));
    this.productorderbilling.GrandTotal=this.productorderbilling.Delivery_Charges+this.ttl;
   this.productorderbilling.Total_SumAmount=this.ttl;
   this.productorderbilling.Subtotal=this.ttl;
this.cart.OrderBilling=this.productorderbilling;
this.Order.StoreId=parseInt(localStorage.getItem('grocceryID'));
this.cart.Order=this.Order;
  
  
 console.log(this.cart)
 
    localStorage.setItem('cart',JSON.stringify(this.cart))
}
getdelivery(){
  this.resturantservice.getdeliveryfair().subscribe((next:any)=>{
    this.storedeliveryfairs=next.grocerydelivery;
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
