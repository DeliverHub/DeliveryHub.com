import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralDeliveryService {
  baseUrl = environment.apiurl + 'Rider/';
  baseUrl1 = environment.apiurl + 'Auth/';
constructor(private http: HttpClient) { }
getvehicals(){
  return this.http.get(this.baseUrl+"GetVehicals");
}
getuserinfo(){
  return this.http.get(this.baseUrl1+"GetUserInfo",httpOptions);
}
}
var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
   'Authorization': "Bearer "+localStorage.getItem('token')
});
const httpOptions = {
  headers: headers_object
};