import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiurl + 'Order/';
constructor(private http: HttpClient) { }
PostOrder(data:any){
  debugger;
  console.log(localStorage.getItem('token'))
  return this.http.post<any>(this.baseUrl+'CreateOrder',data,httpOptions)
}
myorders(){
  debugger;
  console.log(localStorage.getItem('token'))
  return this.http.get<any>(this.baseUrl+'ConsumerAllorders',httpOptions)
}
OrderInfo(Id:any):Observable<any>{
  debugger;
  console.log(localStorage.getItem('token'))
  const body=Id;
  return this.http.post<any>(this.baseUrl+'Consumersingleorder',12,httpOptions)
    }


}
var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
   'Authorization': "Bearer "+localStorage.getItem('token')
});
const httpOptions = {
  headers: headers_object
};