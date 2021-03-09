import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Allorder } from 'src/app/Models/Allorder';
import { ProductOrder } from 'src/app/Models/ProductOrder';
import { ProductOrderDto } from 'src/app/Models/ProductOrderDto';
import { OrderService } from 'src/app/_service/Order.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-storeCheckout',
  templateUrl: './storeCheckout.component.html',
  styleUrls: ['./storeCheckout.component.scss']
})
export class StoreCheckoutComponent implements OnInit {

  cart:ProductOrderDto={}as ProductOrderDto;
  storename:any
  address:any;
  rstimg:any;
  allorder:Allorder={}as Allorder;
  Order:ProductOrder={} as ProductOrder;
  imagepath=environment.imagepath+"StoreImages/";
  constructor( private modalService: NgbModal,private orderservice:OrderService,private router: Router) { }

  ngOnInit() {
    debugger;
    
this.modalService.dismissAll();
    this.cart=JSON.parse(localStorage.getItem('cart'));
    this.address=localStorage.getItem('address');
    this.storename=localStorage.getItem('groccery_Name');
    this.rstimg=localStorage.getItem('profileImagePath');
  }
  ConfirmOrder(){
    debugger;
   var token= localStorage.getItem('token');
    if(token==null||token==""||token==undefined){
      this.router.navigate(['/login']);
    }
    else{
  
      this.allorder.Location=localStorage.getItem("latlng");
       this.allorder.Address=localStorage.getItem('address');
       this.allorder.OrderType="Groccery";
       this.allorder.PaymentType="Cash";
       this.allorder.Consumer_Id=0;
       this.cart.allorder=this.allorder;
       this.Order.GrocceryId=parseInt(localStorage.getItem('grocceryID'));
       this.cart.Order=this.Order;
       var obj={"allorder":this.cart.allorder,"POrder":this.cart.Order,"POrderItems":this.cart.OrderItems,"POrderBilling":this.cart.OrderBilling}
       console.log(obj)
       Swal.fire('Thank you...', 'Order has been placed Successfully!', 'success')


    this.orderservice.PostOrder(obj).subscribe((next:any)=>{
      console.log(next);
      this.clearcart();
      this.router.navigate(['/home']);
    }
    );
    }
   

}
clearcart(){
  debugger;
  this.cart.OrderItems=null;
  this.cart.OrderBilling=null;
  this.cart.Order=null;
  localStorage.removeItem('cart');
  localStorage.setItem('cart',JSON.stringify(this.cart));
}

}
