import { Component, OnInit } from '@angular/core';
import { DataShareService } from './../../../../../src/app/_service/DataShare.service';
import { environment } from './../../../../../src/environments/environment';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodOrderDto } from 'src/app/Models/FoodOrderDto';
import { FoodOrderBilling } from 'src/app/Models/FoodOrderBilling';
import { Allorder } from 'src/app/Models/Allorder';
import { FoodOrder } from 'src/app/Models/FoodOrder';
@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:FoodOrderDto={}as FoodOrderDto;
  subscription: Subscription;
  ttl:number=0
  Order:FoodOrder={} as FoodOrder;

  foodorderbilling:FoodOrderBilling={}as FoodOrderBilling;
  constructor(private data: DataShareService,private router: Router) { }

  ngOnInit() {
    debugger;

    this.subscription = this.data.currentcart.subscribe(message => this.cart = message)
    if(this.cart==null){
      this.cart=JSON.parse(localStorage.getItem('cart'));
    }
    var ltlng=localStorage.getItem("latlng");
var lltt=ltlng.split(",");
var lat1=parseFloat(lltt[0]);
var lng1=parseFloat(lltt[1]);

  }
  addquantity(id){
    debugger;
    var dishcheck= this.cart.OrderItems.find(x=>x.DishId==id);
    this.ttl=0
          var index= this.cart.OrderItems.indexOf(dishcheck);
          this.cart.OrderItems[index].Quantity=     this.cart.OrderItems[index].Quantity+1;
          this.cart.OrderItems[index].TotalPrice=this.cart.OrderItems[index].Quantity*this.cart.OrderItems[index].SingleQuantityPrice;
          this.cart.OrderItems= this.cart.OrderItems;
          for(let i=0;i<this.cart.OrderItems.length;i++)
          {
          this.ttl=this.ttl+this.cart.OrderItems[i].TotalPrice;
          }
//this.foodorderbilling.Delivery_Charges=(Math.round(parseFloat(localStorage.getItem('deliverycharges'))+ Number.EPSILON) * 100) / 100;
var delvery=parseFloat(localStorage.getItem('deliverycharges')).toFixed(2);
this.foodorderbilling.Delivery_Charges=parseFloat(delvery);
//this.foodorderbilling.Delivery_Charges.toFixed(2);
this.foodorderbilling.GrandTotal=this.foodorderbilling.Delivery_Charges+this.ttl;
          this.foodorderbilling.Total_SumAmount=this.ttl;
          this.foodorderbilling.Subtotal=this.ttl;
          this.cart.OrderBilling=this.foodorderbilling;
          this.Order.RestaurantID=parseInt(localStorage.getItem('restaurantid'));
this.cart.Order=this.Order;
          console.log(this.cart)
          localStorage.setItem('cart',JSON.stringify(this.cart))
  }
  removequantity(id){
    debugger;
    var dishcheck= this.cart.OrderItems.find(x=>x.DishId==id);
    this.ttl=0
          var index= this.cart.OrderItems.indexOf(dishcheck);
          if(dishcheck.Quantity>1){
            this.cart.OrderItems[index].Quantity=     this.cart.OrderItems[index].Quantity-1;
            this.cart.OrderItems[index].TotalPrice=this.cart.OrderItems[index].Quantity*this.cart.OrderItems[index].SingleQuantityPrice;
            this.cart.OrderItems= this.cart.OrderItems;
            for(let i=0;i<this.cart.OrderItems.length;i++)
            {
            this.ttl=this.ttl+this.cart.OrderItems[i].TotalPrice;
            }
  
            var delvery=parseFloat(localStorage.getItem('deliverycharges')).toFixed(2);
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
            this.removeCartItem(id);
          }
        
  }
  removeCartItem(id){
    debugger
    var dishcheck= this.cart.OrderItems.find(x=>x.DishId==id);
    this.ttl=0
  
          var index= this.cart.OrderItems.indexOf(dishcheck);
        
        this.cart.OrderItems.splice(index,1);
     
          for(let i=0;i<this.cart.OrderItems.length;i++)
          {
          this.ttl=this.ttl+this.cart.OrderItems[i].TotalPrice;
          }

          var delvery=parseFloat(localStorage.getItem('deliverycharges')).toFixed(2);
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

}
