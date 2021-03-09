import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  baseUrl = environment.apiurl + 'AllProduct/';
constructor(private http: HttpClient) { }
GetGrocerystores(latlng:any):Observable<any>{
  debugger;
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(latlng);
  return this.http.post<any>(this.baseUrl+'GetAllProduct?',body,{'headers':headers})
    }

    GetStoreDishes(id:any):Observable<any>{
      debugger;
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(id);
      return this.http.post<any>(this.baseUrl+'GetsingleStoreProduct?',body,{'headers':headers})
        }
}
