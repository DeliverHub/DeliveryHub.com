import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {
  baseUrl = environment.apiurl + 'AllDish/';
  baseUrl1 = environment.apiurl + 'DeliveryFair/';
  constructor(private http: HttpClient) { }
  GetResturants(latlng:any){
    debugger;
    let bar = 'Hello World!';
// this._httpClient.post('api/GetDetails', '=' + bar, { 
//     headers: new HttpHeaders({ 
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
//     }) 
// })
    return this.http.post<any>(this.baseUrl+'GetAllDishes','=' + latlng,
    { 
           headers: new HttpHeaders({ 
              'Content-Type': 'application/x-www-form-urlencoded'
               
         }) 
       })
      
}
getdeliveryfair(){
  return this.http.get(this.baseUrl1+"DeliveryFair");
}
Getrestaurantdishes(id:any):Observable<any>{
  debugger;
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(id);
  return this.http.post<any>(this.baseUrl+'GetRestaurantDishes?',body,{'headers':headers})
    }
}
