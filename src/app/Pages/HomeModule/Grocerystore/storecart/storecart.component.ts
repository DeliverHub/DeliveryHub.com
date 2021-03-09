import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductOrder } from 'src/app/Models/ProductOrder';
import { Productorderbilling } from 'src/app/Models/productorderbilling';
import { ProductOrderDto } from 'src/app/Models/ProductOrderDto';
import { DataShareService } from 'src/app/_service/DataShare.service';

@Component({
  selector: 'app-storecart',
  templateUrl: './storecart.component.html',
  styleUrls: ['./storecart.component.scss']
})
export class StorecartComponent implements OnInit {

  cart:ProductOrderDto={}as ProductOrderDto;
  subscription: Subscription;
  ttl:number=0
  Order:ProductOrder={} as ProductOrder;
  productorderbilling:Productorderbilling={}as Productorderbilling;
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
    var productcheck= this.cart.OrderItems.find(x=>x.ProductId==id);
    this.ttl=0
    
          var index= this.cart.OrderItems.indexOf(productcheck);
          this.cart.OrderItems[index].ProductOrderItemQuantity= this.cart.OrderItems[index].ProductOrderItemQuantity+1;
          this.cart.OrderItems[index].ProductOrderItemTotalPrice=this.cart.OrderItems[index].ProductOrderItemQuantity*this.cart.OrderItems[index].ProductOrderItemSingleQuantityPrice;
          this.cart.OrderItems= this.cart.OrderItems;
          for(let i=0;i<this.cart.OrderItems.length;i++)
          {
          this.ttl=this.ttl+this.cart.OrderItems[i].ProductOrderItemTotalPrice;
          }
//this.foodorderbilling.Delivery_Charges=(Math.round(parseFloat(localStorage.getItem('deliverycharges'))+ Number.EPSILON) * 100) / 100;
var delvery=parseFloat(localStorage.getItem('deliverycharges')).toFixed(2);
this.productorderbilling.Delivery_Charges=parseFloat(delvery);
this.productorderbilling.Delivery_Charges.toFixed(2);
this.productorderbilling.GrandTotal=this.productorderbilling.Delivery_Charges+this.ttl;
          this.productorderbilling.Total_SumAmount=this.ttl;
          this.productorderbilling.Subtotal=this.ttl;
          this.cart.OrderBilling=this.productorderbilling;
          this.Order.StoreId=parseInt(localStorage.getItem('grocceryID'));
          this.cart.Order=this.Order;
          console.log(this.cart)
          localStorage.setItem('cart',JSON.stringify(this.cart))
  }
  removequantity(id){
    debugger;
    var productcheck= this.cart.OrderItems.find(x=>x.ProductId==id);
    this.ttl=0
          var index= this.cart.OrderItems.indexOf(productcheck);
          if(productcheck.ProductOrderItemQuantity>1){
            this.cart.OrderItems[index].ProductOrderItemQuantity=this.cart.OrderItems[index].ProductOrderItemQuantity-1;
            this.cart.OrderItems[index].ProductOrderItemTotalPrice=this.cart.OrderItems[index].ProductOrderItemQuantity*this.cart.OrderItems[index].ProductOrderItemSingleQuantityPrice;
            this.cart.OrderItems= this.cart.OrderItems;
            for(let i=0;i<this.cart.OrderItems.length;i++)
            {
            this.ttl=this.ttl+this.cart.OrderItems[i].ProductOrderItemTotalPrice;
            }
            var delvery=parseFloat(localStorage.getItem('deliverycharges')).toFixed(2);
            this.productorderbilling.Delivery_Charges=parseFloat(delvery);
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
            this.removeCartItem(id);
          }
        
  }
  removeCartItem(id){
    debugger
    var productcheck= this.cart.OrderItems.find(x=>x.ProductId==id);
    this.ttl=0
  
          var index= this.cart.OrderItems.indexOf(productcheck);
        
        this.cart.OrderItems.splice(index,1);
     
          for(let i=0;i<this.cart.OrderItems.length;i++)
          {
          this.ttl=this.ttl+this.cart.OrderItems[i].ProductOrderItemTotalPrice;
          }

          this.productorderbilling.Delivery_Charges=parseFloat(localStorage.getItem('deliverycharges'));
          this.productorderbilling.GrandTotal=this.productorderbilling.Delivery_Charges+this.ttl;
          this.productorderbilling.Total_SumAmount=this.ttl;
          this.productorderbilling.Subtotal=this.ttl;
          this.cart.OrderBilling=this.productorderbilling;
          this.Order.StoreId=parseInt(localStorage.getItem('grocceryID'));
          this.cart.Order=this.Order;
          console.log(this.cart)
          localStorage.setItem('cart',JSON.stringify(this.cart))
  }


}
