import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './Checkout/Checkout.component';
import { GeneralDeliveryComponent } from './generalDelivery/generalDelivery.component';
import { AllGrocerystoresComponent } from './Grocerystore/AllGrocerystores/AllGrocerystores.component';
import { MyordersstoreComponent } from './Grocerystore/myordersstore/myordersstore.component';
import { StoreCheckoutComponent } from './Grocerystore/storeCheckout/storeCheckout.component';
import { StoredetailComponent } from './Grocerystore/storedetail/storedetail.component';
import { StoreproductsComponent } from './Grocerystore/Storeproducts/Storeproducts.component';
import { HomeModuleComponent } from './HomeModule.component';
import { OrderCartComponent } from './OrderCart/OrderCart.component';

import { RestaurantComponent } from './Restaurant/Restaurant.component';
import { RestaurantDetailComponent } from './RestaurantDetail/RestaurantDetail.component';

const routes: Routes = [
  { 
    path:"",
    component:HomeModuleComponent
   },
   { 
    path:"restaurant",
    component:RestaurantComponent
   },
   { 
    path:"restaurant/detail",
    component:RestaurantDetailComponent
   },
   { 
    path:"myorders",
    component:MyordersstoreComponent
   },
   { 
    path:"restaurant/cart",
    component:OrderCartComponent
   },
   { 
    path:"checkout",
    component:CheckoutComponent
   },
   { 
    path:"grocery",
    component:AllGrocerystoresComponent
   },
   { 
    path:"grocery/detail",
    component:StoredetailComponent
   },
   { 
    path:"grocery/products",
    component:StoreproductsComponent
   },

  { 
   path:"grocery/storecheckout",
   component:StoreCheckoutComponent
  },
  { 
    path:"generaldelivery",
    component:GeneralDeliveryComponent
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRouting { }

