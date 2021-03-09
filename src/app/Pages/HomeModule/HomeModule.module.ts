import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleComponent } from './HomeModule.component';
import { HomeModuleRouting } from './HomeModule.routing';
import { MainScreenComponentComponent } from './MainScreenComponent/MainScreenComponent.component';
import { RestaurantComponent } from './Restaurant/Restaurant.component';

import { GetrestaurantDto } from '../../../../src/app/Models/GetrestaurantDto';
import { RestaurantDetailComponent } from './RestaurantDetail/RestaurantDetail.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { CartComponent } from './Cart/Cart.component';
import { OrderCartComponent } from './OrderCart/OrderCart.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { CheckoutComponent } from './Checkout/Checkout.component';
import { StoredetailComponent } from './Grocerystore/storedetail/storedetail.component';
import { StoreproductsComponent } from './Grocerystore/Storeproducts/Storeproducts.component';
import { StoreCheckoutComponent } from './Grocerystore/storeCheckout/storeCheckout.component';
import { AllGrocerystoresComponent } from './Grocerystore/AllGrocerystores/AllGrocerystores.component';
import { StorecartComponent } from './Grocerystore/storecart/storecart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MyordersstoreComponent } from './Grocerystore/myordersstore/myordersstore.component';
import { GeneralDeliveryComponent } from './generalDelivery/generalDelivery.component';


@NgModule({
  imports: [
    CommonModule,
    HomeModuleRouting,
    MatButtonModule,
    MatDialogModule,
    GooglePlaceModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyCUG8nuf7xCD2P8Sc8eQ9C63MQhB48S1Dk"
    })
    
  ],
  providers:[GetrestaurantDto],
  declarations: [HomeModuleComponent,StorecartComponent,MyordersstoreComponent,StoredetailComponent,StoreproductsComponent,StoreCheckoutComponent,GeneralDeliveryComponent,OrderCartComponent,AllGrocerystoresComponent,MainScreenComponentComponent,CartComponent,RestaurantComponent,RestaurantDetailComponent,OrderCartComponent,CheckoutComponent]
})
export class HomeModuleModule { }
