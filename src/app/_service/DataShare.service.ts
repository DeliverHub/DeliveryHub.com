import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

constructor() { }
private messageSource = new BehaviorSubject(null);
currentMessage = this.messageSource.asObservable();

private cartsource = new BehaviorSubject(null);
currentcart = this.cartsource.asObservable();
changeMessage(message: any) {
  this.messageSource.next(message)
}
changecart(cart:any){
this.cartsource.next(cart);
}
}
